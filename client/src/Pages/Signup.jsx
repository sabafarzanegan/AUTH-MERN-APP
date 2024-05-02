import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      {/* title component */}
      <h1 className="font-lalezar text-3xl text-primary text-center mt-6">
        ثبت نام
      </h1>
      {/* signup container */}
      <div className="w-full flex items-center justify-center mt-10 rounded-md ">
        {/* signup content */}
        <div className="md:w-[40%] p-10 bg-third">
          <form action="" className="flex flex-col  justify-center gap-y-5">
            <label className="text-right font-vazir text-white text-sm px-1">
              نام کاربری
            </label>
            <input
              type="text"
              id="username"
              className="p-3 rounded-lg"
              placeholder="username"
            />
            <label className="text-right font-vazir text-white text-sm px-1">
              ایمیل
            </label>

            <input
              type="email"
              id="email"
              className="p-3 rounded-lg border-none outline-none"
              placeholder="email"
            />
            <label className="text-right font-vazir text-white text-sm px-1 border-none outline-none">
              رمزعبور
            </label>
            <input
              type="password"
              id="password"
              className="p-3 rounded-lg border-none outline-none"
              placeholder="password"
            />
            <button
              type="submit"
              className="w-full bg-primary p-3 text-white font-vazir text-xl mt-2  rounded-lg">
              ثبت نام
            </button>
          </form>
          <p className="text-center text-white font-vazir text-xl mt-6 ">
            قبلا ثبت نام کرده اید؟
            <Link
              to="/signin"
              className="text-gray-300 font-lalezar text-2xl mx-4">
              ورود
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
