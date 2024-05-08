import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);
  const Currentuser = useSelector((state) => state.user.currentUser);
  const activeHandler = () => {
    setActive((prev) => !prev);
  };
  const closeHandler = () => {
    setActive(false);
  };
  // console.log(Currentuser.profilePicture);
  return (
    // header container
    <>
      <div className="w-full bg-third py-4 px-8 text-white font-vazir text-lg">
        {/* header content */}
        <div className="flex items-center justify-between ">
          <Link to="/" className="font-lalezar text-Secondary text-2xl">
            اپ احراز هویت
          </Link>
          {/* menu item */}
          {/* mobile navbar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={activeHandler}
            className="w-6 h-6 md:hidden">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>

          <ul className=" items-center justify-center gap-x-6 hidden md:flex">
            <li>
              <Link to="/profile">
                {Currentuser ? (
                  // <img src={Currentuser.profilePicture} alt="" />
                  <p className="hover:text-primary">{Currentuser.username}</p>
                ) : (
                  <Link to="/" className=" hover:text-primary">
                    خانه
                  </Link>
                )}
              </Link>
            </li>
            <li>
              <Link to="/about" className=" hover:text-primary">
                درباره ی اپ
              </Link>
            </li>
            <li>
              <Link to="/signin" className=" hover:text-primary">
                ورود
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`w-52 h-full bg-third fixed top-0 -right-96 z-20 md:hidden ${
          active ? "showbar" : "hiddenbar"
        }`}>
        <h3 className="flex items-center justify-between font-lalezar font-bold px-2 py-2 mt-4 border-b border-blue-200 ">
          <p className="text-white font-vazir text-xl">Auth APP</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={closeHandler}
              className="w-7 h-7 rotate-45 text-white cursor-pointer">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </p>
        </h3>
        <ul className=" flex flex-col  justify-center gap-y-6 text-white px-2 font-vazir text-lg mt-4 ">
          <li>
            <Link to="/profile">
              {Currentuser ? (
                // <img src={Currentuser.profilePicture} alt="" />
                <p className="hover:text-primary">{Currentuser.username}</p>
              ) : (
                <Link to="/" className=" hover:text-primary">
                  خانه
                </Link>
              )}
            </Link>
          </li>
          <li>
            <Link to="/about" className=" hover:text-primary">
              درباره ی اپ
            </Link>
          </li>
          <li>
            <Link to="/signin" className=" hover:text-primary">
              ورود
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
