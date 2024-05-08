import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUsersuccess,
  updateuserfail,
  updateuserstart,
  deleteUsersuccess,
  deleteuserstart,
  deleteuserfail,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [formDataupdate, setFormDataupdata] = useState({});
  const currentUser = useSelector((state) => state.user.currentUser);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormDataupdata({ ...formDataupdate, [e.target.id]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateuserstart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataupdate),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateuserfail(data));
        return;
      }
      dispatch(updateUsersuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(updateuserfail(error));
      console.log(error);
    }
  };
  const delethandler = async () => {
    try {
      dispatch(deleteuserstart());
      const res = await fetch(`api/user/delete${currentUser._id}`, {
        method: "DELETE",
      });
      const data = res.json();
      if ((data.success = false)) {
        dispatch(deleteuserfail(data));
        return;
      }
      dispatch(deleteUsersuccess(data));
    } catch (error) {
      dispatch(deleteuserfail(error));
    }
  };

  return (
    <>
      <h1 className="text-primary text-2xl text-center mt-4  font-lalezar">
        حساب کاربری
      </h1>
      {error ? <h3>خطا در به روز رسانی</h3> : ""}
      <div className="w-full flex items-center justify-center mt-10  ">
        <div className="md:w-[40%] p-10 bg-third rounded-lg">
          <form
            onSubmit={handelSubmit}
            action=""
            className="flex flex-col  justify-center gap-y-5">
            <label className="text-right font-vazir text-white text-sm px-1">
              نام کاربری جدید
            </label>

            <input
              type="text"
              onChange={handleChange}
              defaultValue={currentUser.username}
              id="username"
              className="p-3 rounded-lg border-none outline-none"
              placeholder="username"
            />
            <label className="text-right font-vazir text-white text-sm px-1">
              ایمیل جدید
            </label>

            <input
              defaultValue={currentUser.email}
              type="email"
              onChange={handleChange}
              id="email"
              className="p-3 rounded-lg border-none outline-none"
              placeholder="email"
            />
            <label className="text-right font-vazir text-white text-sm px-1 border-none outline-none">
              رمزعبور جدید
            </label>
            <input
              type="password"
              onChange={handleChange}
              id="password"
              className="p-3 rounded-lg border-none outline-none"
              placeholder="password"
            />
            <button
              type="submit"
              className="w-full bg-blue-700 p-3 text-white font-vazir text-xl mt-2  rounded-lg">
              {loading ? "در حال ازسال" : "به روز رسانی"}
            </button>
          </form>
          <div
            className="flex items-center justify-between mt-2 py-2 font-vazir font-semibold text-md cursor-pointer
         text-red-500">
            <span onClick={delethandler}>خروج از حساب</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
