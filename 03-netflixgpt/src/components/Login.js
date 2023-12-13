import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>

      <form className="absolute text-white bg-black flex flex-col w-96 p-10 mt-28 mx-auto left-0 right-0 rounded-sm bg-opacity-80">
        <h1 className="text-3xl font-semibold mb-7">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700"
        />
        <button className="py-4 my-6 bg-red-700 font-semibold w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggelSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign In now"}
        </p>
        <p className="text-gray-400 mt-4 text-sm">
          Sign in is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <b className="cursor-pointer">Learn more</b>
        </p>
      </form>
    </div>
  );
};

export default Login;
