import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googlehandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      // console.log(res);
      const data = await res.json();
      // console.log(data);
      dispatch(signinSuccess(data));
      navigate("/");
      console.log("login/signin success");

      // console.log(data);
    } catch (error) {
      console.log("could not login with google", error);
      navigate("/signin");
    }
  };
  return (
    <button
      type="button"
      className=" w-full bg-blue-700 p-3 text-white  text-xl mt-2  rounded-lg"
      onClick={googlehandler}>
      GOOGLE ACCOUNT
    </button>
  );
}

export default OAuth;
