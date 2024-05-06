import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const Currentuser = useSelector((state) => state.user.currentUser);
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
          <ul className="flex items-center justify-center gap-x-6">
            <li>
              <Link to="/profile">
                {Currentuser ? (
                  // <img src={Currentuser.profilePicture} alt="" />
                  <p className="hover:text-primary">{Currentuser.username}</p>
                ) : (
                  <Link to="/signin" className=" hover:text-primary">
                    ورود
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
              <Link to="/" className=" hover:text-primary">
                خانه
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
