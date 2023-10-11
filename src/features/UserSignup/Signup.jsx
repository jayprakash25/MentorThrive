import React from "react";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../../Firebase";
export default function Signup() {
  const GoogleProvider = new GoogleAuthProvider();

  const GoogleSignin = async () => {
    try {
      const res = await signInWithPopup(auth, GoogleProvider);
      console.log(res.user);
    } catch (error) {
      console.log(error);
    }
  };
  // Microsoft auth provider
  const MicrosoftProvider = new OAuthProvider("microsoft.com");
  const MicrosoftSignin = async () => {
    try {
      const res = await signInWithPopup(auth, MicrosoftProvider);
      console.log(res.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to="/">
        <div className="p-9 flex items-center space-x-0.5">
          <p className="text-2xl font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text md:text-3xl">
            MentorHeal
          </p>
        </div>
      </Link>

      <main className="pt-7">
        <div>
          <div className="my-11">
            <div className=" space-y-1.5 text-center">
              <h1 className="text-3xl font-bold md:text-4xl">Get MentorShip</h1>
              <p className="text-[#676b5f] font-semibold md:text-lg">
                Sign Up for free!
              </p>
            </div>
            <div className="flex flex-col justify-center max-w-md mx-auto my-10 space-y-5">
              <button
                className="flex items-center justify-center rounded-full space-x-3 border-[1px] hover:bg-[#eeefea] ease-in-out duration-500 border-slate-300 px-10 py-3.5"
                onClick={GoogleSignin}
              >
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png"
                  }
                  className="w-7 h-7"
                />
                <h1>Sign up with Google</h1>
              </button>
              <button
                onClick={MicrosoftSignin}
                className="flex items-center justify-center rounded-full space-x-3 border-[1px] hover:bg-[#eeefea] ease-in-out duration-500 border-slate-300 px-10 py-3.5"
              >
                <img
                  src={
                    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E"
                  }
                  className="w-7 h-7"
                  // alt={Google}
                />
                <h1>Sign up with Microsoft</h1>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="flex items-center justify-center p-2">
          <h2 className="text-[#676b5f]  text-center mx-auto max-w-md md:max-w-xl text-sm md:text-base absolute bottom-3">
            By continuing, you agree to Linktree's Terms and Conditions and
            confirm you have read our Privacy Notice.
          </h2>
        </div>
      </footer>
    </>
  );
}
