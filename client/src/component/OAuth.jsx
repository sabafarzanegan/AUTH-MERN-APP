import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/user/userSlice";

function OAuth() {
  const dispatch = useDispatch();
  const googlehandler = async () => {
    // const provider = GoogleAuthProvider();
    // const auth = getAuth(app);
    // const Result = await signInWithPopup(auth, provider);
    // console.log(Result);
    // try {
    // } catch (error) {
    //   console.log("google account could not response", error);
    // }
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
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
      const data = await res.json();
      dispatch(signinSuccess(data));
      console.log(data);
    } catch (error) {
      console.log("could not login with google", error);
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
