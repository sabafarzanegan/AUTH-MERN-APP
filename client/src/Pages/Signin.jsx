import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signinStart,
  signinError,
  signinSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
function Signin() {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupInpuHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signinStart());
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success === false) {
        // setError(true);
        dispatch(signinError(data.message));
        return;
      }
      dispatch(signinSuccess(data));

      navigate("/");

      setLoading(false);
    } catch (err) {
      // setLoading(false);
      // setError(true);
      dispatch(signinError(err));
    }
  };

  return (
    <>
      {/* title component */}
      <h1 className="font-lalezar text-3xl text-primary text-center mt-6">
        ورود
      </h1>
      {/* error section */}
      {error && (
        <div className=" w-[30%] m-auto mt-2 border border-red-600 bg-red-600 text-white text-center font-vazir p-4 ">
          <p>{error ? error || "خطا در احراز هویت" : ""}</p>
        </div>
      )}

      {/* signup container */}
      <div className="w-full flex items-center justify-center mt-10 rounded-md ">
        {/* signup content */}
        <div className="md:w-[40%] p-10 bg-third">
          <form
            action=""
            onSubmit={handelSubmit}
            className="flex flex-col  justify-center gap-y-5">
            <label className="text-right font-vazir text-white text-sm px-1">
              ایمیل
            </label>

            <input
              type="email"
              id="email"
              className="p-3 rounded-lg border-none outline-none"
              placeholder="email"
              onChange={signupInpuHandler}
            />
            <label className="text-right font-vazir text-white text-sm px-1 border-none outline-none">
              رمزعبور
            </label>
            <input
              type="password"
              id="password"
              className="p-3 rounded-lg border-none outline-none"
              placeholder="password"
              onChange={signupInpuHandler}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary p-3 text-white font-vazir text-xl mt-2  rounded-lg">
              {loading ? "...درحال ارسال" : "ورود"}
            </button>
          </form>
          <p className="text-center text-white font-vazir text-xl mt-6 ">
            قبلا ثبت نام نکرده اید؟
            <Link
              to="/signup"
              className="text-gray-300 font-lalezar text-2xl mx-4">
              ثبت نام
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signin;
