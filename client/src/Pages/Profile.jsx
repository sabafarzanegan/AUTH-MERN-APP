import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  return (
    <>
      <h1 className="text-primary text-2xl text-center mt-4  font-lalezar">
        حساب کاربری
      </h1>
      {/* <form
        action=""
        className="flex flex-col w-[50%] min-h-80  m-auto mt-8 rounded-lg bg-third ">
        <h3 className="text-center text-xl font-vazir text-white py-4 ">
          سلام{currentUser.username}
        </h3>
        <label className="text-right text-white font-vazir  px-10 mb-2  ">
          نام کاربری جدید
        </label>
        <input
          className="w-[80%] m-auto p-1 rounded-md mt-1 "
          type="text"
          placeholder="new username"
          id="username"
        />
        <label className="text-right text-white font-vazir  px-10 mb-2  ">
          ایمیل جدید
        </label>
        <input
          className="w-[80%] m-auto p-1 rounded-md mt-1 "
          type="email"
          placeholder="new email"
          id="email"
        />
        <label className="text-right text-white font-vazir  px-10 mb-2  ">
          رمز جدید
        </label>
        <input
          className="w-[80%] m-auto p-1 rounded-md mt-1 "
          type="password"
          placeholder="new username"
          id="password"
        />
      </form> */}
      <div className="w-full flex items-center justify-center mt-10  ">
        {/* signup content */}
        <div className="md:w-[40%] p-10 bg-third rounded-lg">
          <form action="" className="flex flex-col  justify-center gap-y-5">
            <label className="text-right font-vazir text-white text-sm px-1">
              نام کاربری جدید
            </label>

            <input
              type="text"
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
              id="email"
              className="p-3 rounded-lg border-none outline-none"
              placeholder="email"
            />
            <label className="text-right font-vazir text-white text-sm px-1 border-none outline-none">
              رمزعبور جدید
            </label>
            <input
              type="password"
              id="password"
              className="p-3 rounded-lg border-none outline-none"
              placeholder="password"
            />
            <button
              type="submit"
              className="w-full bg-blue-700 p-3 text-white font-vazir text-xl mt-2  rounded-lg">
              {" "}
              به روز رسانی
            </button>
          </form>
          <div className="flex items-center justify-between mt-2 py-2 font-vazir font-semibold text-md cursor-pointer text-red-500">
            <span>حذف حساب</span>
            <span>خروج از حساب</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
