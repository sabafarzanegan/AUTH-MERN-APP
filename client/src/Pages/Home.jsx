import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="sm:text-xl md:text-2xl font-bold font-lalezar text-center my-6  text-white">
        Welcome to my Auth App!
      </h1>

      <div className="w-[50%] m-auto text-right text-white sm:text-lg md:text-xl font-vazir">
        <p>
          سلام این اپ احرازهویت است که درساخت آن از تکنولوژی های زیر استفاده شده
          :<br /> فرانت اند:
          <br />
          reactjs,reduxtlk,tailwindcss <br />
          بک اند:
          <br />
          Nodejs,Express js,Mongodb
          <br /> این اپ شامل ثبت نام کاربر،ورود،خروج ومسیرهای محافظت شده است
        </p>
      </div>
    </>
  );
}
