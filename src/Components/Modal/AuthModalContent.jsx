/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import GoogleIcon from "../../Assets/icons/google.png";
import FacebookIcon from "../../Assets/icons/facebook.png";
import TwitterIcon from "../../Assets/icons/twitter.png";
import MailIcon from "../../Assets/icons/email.png";

export const AuthModalContent = ({ modalContent, signin, signup }) => {
  return (
    <>
      {modalContent === true ? (
        <>
          <h1 className="text-center text-2xl font-semibold mb-14">Welcome back.</h1>
          <div className="flex flex-col items-center gap-3 mb-14">
            <div className="flex items-center gap-3 w-2/3 border border-1 border-slate-300 px-4 py-2 rounded-md transition ease-in hover:border-slate-500 hover:cursor-pointer md:w-2/5">
              <img src={GoogleIcon} alt="signin-with-google" className="w-5" />
              <span className="text-[16px] text-slate-900 font-[400]">Sign in with Google</span>
            </div>

            <div className="flex items-center gap-3 w-2/3 border border-1 border-slate-300 px-4 py-2 rounded-md transition ease-in hover:border-slate-500 hover:cursor-pointer md:w-2/5">
              <img src={FacebookIcon} alt="signin-with-google" className="w-5" />
              <span className="text-[16px] text-slate-900 font-[400]">Sign in with Facebook</span>
            </div>

            <div className="flex items-center gap-3 w-2/3 border border-1 border-slate-300 px-4 py-2 rounded-md transition ease-in hover:border-slate-500 hover:cursor-pointer md:w-2/5">
              <img src={TwitterIcon} alt="signin-with-google" className="w-5" />
              <span className="text-[16px] text-slate-900 font-[400]">Sign in with Twitter</span>
            </div>

            <div className="flex items-center gap-3 w-2/3 border border-1 border-slate-300 px-4 py-2 rounded-md transition ease-in hover:border-slate-500 hover:cursor-pointer md:w-2/5">
              <img src={MailIcon} alt="signin-with-google" className="w-5" />
              <span className="text-[16px] text-slate-900 font-[400]">Sign in with Email</span>
            </div>
          </div>

          <h1 className="text-center text-lg mb-10">
            Not account?{" "}
            <span
              className="text-green-700 font-bold transition-all ease-in hover:text-green-800 hover:cursor-pointer"
              onClick={signup}
            >
              Create one
            </span>
          </h1>
          <div className="flex justify-center">
            <small className="w-3/4 text-center">
              Click "SignIn" to agree to Readme.md{" "}
              <span className="underline">Terms of Service</span> and acknowledge that Readme.md{" "}
              <span className="underline">Privacy Policy applies to you</span>
            </small>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center text-2xl font-semibold mb-14">Join Readme.md</h1>
          <div className="flex flex-col items-center gap-3 mb-14">
            <div className="flex items-center gap-3 w-2/3 border border-1 border-slate-300 px-4 py-2 rounded-md transition ease-in hover:border-slate-500 hover:cursor-pointer md:w-2/5">
              <img src={GoogleIcon} alt="signin-with-google" className="w-5" />
              <span className="text-[16px] text-slate-900 font-[400]">Sign up with Google</span>
            </div>

            <div className="flex items-center gap-3 w-2/3 border border-1 border-slate-300 px-4 py-2 rounded-md transition ease-in hover:border-slate-500 hover:cursor-pointer md:w-2/5">
              <img src={FacebookIcon} alt="signin-with-google" className="w-5" />
              <span className="text-[16px] text-slate-900 font-[400]">Sign up with Facebook</span>
            </div>

            <div className="flex items-center gap-3 w-2/3 border border-1 border-slate-300 px-4 py-2 rounded-md transition ease-in hover:border-slate-500 hover:cursor-pointer md:w-2/5">
              <img src={MailIcon} alt="signin-with-google" className="w-5" />
              <span className="text-[16px] text-slate-900 font-[400]">Sign up with Email</span>
            </div>
          </div>

          <h1 className="text-center text-lg mb-10">
            Already have an account?{" "}
            <span
              className="text-green-700 font-bold transition-all ease-in hover:text-green-800 hover:cursor-pointer"
              onClick={signin}
            >
              Sign in
            </span>
          </h1>
          <div className="flex justify-center">
            <small className="w-3/4 text-center">
              Click "SignIn" to agree to Readme.md{" "}
              <span className="underline">Terms of Service</span> and acknowledge that Readme.md{" "}
              <span className="underline">Privacy Policy applies to you</span>
            </small>
          </div>
        </>
      )}
    </>
  );
};
