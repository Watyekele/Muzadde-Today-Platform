import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { loginWithRedirect } = useAuth0(); // loginWithRedirect

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = () => {
    console.log("Logging in with:", { email, password, rememberMe });

    // If "Remember Me" is checked, store a flag in local storage
    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }
  };
  const handleLoginWithAuth0 = () => {
    // Redirect to Auth0 login page
    loginWithRedirect();
  };
  return (
    <div className="relative flex flex-col lg:flex-row justify-center min-h-screen overflow-hidden">
      <div className="lg:w-1/2 w-full p-6 m-auto bg-white rounded-md shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-green-700 uppercase">
          Welcome to Muzadde Today
        </h1>
        <p className="text-center font-semibold text-lg text-gray-800 px-4">
          Kindly Login to gain access to your account
        </p>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <Link
              to="/forgotpassword"
              className="text-xs text-purple-600 hover:underline"
            >
              Forgotten Password?
            </Link>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4">
          <div className="flex items-center justify-center text-gray-800 mb-4">
            <hr className="flex-grow border-t" />
            <p className="mx-4">Or</p>
            <hr className="flex-grow border-t" />
          </div>
          <button
            type="button"
            onClick={handleLoginWithAuth0}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-blue-600 mr-2"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            Login with Google
          </button>
        </div>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Are you a new member?{" "}
          <Link
            to="/signup"
            className="font-medium text-purple-600 hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
