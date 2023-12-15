import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("parent"); // Set default role to 'parent'
  const navigate = useNavigate();

  const signupUser = async (name, email, password, userRole) => {
    console.log("Signing up user:", { name, email, password, userRole });
    // Simulating an API call with a timeout
    return new Promise((resolve) => {
      setTimeout(() => {
        // Resolve the promise after a simulated signup
        resolve();
      }, 1000);
    });
  };

  const handleSignup = async () => {
    try {
      console.log("Selected user role:", userRole);
<<<<<<< HEAD
=======

>>>>>>> 3b2fff74acffcec61bb6d2be5b08d245852e7c3b
      await signupUser(name, email, password, userRole);
      console.log("User signed up successfully!");
      if (userRole === "doctor") {
        navigate("/doctor-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
<<<<<<< HEAD
        <form>
=======
        <h1 className="text-3xl font-semibold text-center text-green-700 uppercase">
          Sign up
        </h1>
        <form className="mt-6">
>>>>>>> 3b2fff74acffcec61bb6d2be5b08d245852e7c3b
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
<<<<<<< HEAD
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
=======
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setName(e.target.value)}
>>>>>>> 3b2fff74acffcec61bb6d2be5b08d245852e7c3b
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
<<<<<<< HEAD
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
=======
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setEmail(e.target.value)}
>>>>>>> 3b2fff74acffcec61bb6d2be5b08d245852e7c3b
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
              id="password"
              name="password"
<<<<<<< HEAD
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Type of User
            </label>
            <div className="flex mt-2">
              <label className="mr-4">
                <input
                  type="radio"
                  value="parent"
                  checked={userRole === "parent"}
                  onChange={() => setUserRole("parent")}
                  className="mr-2"
                />
                Parent
              </label>
              <label>
                <input
                  type="radio"
                  value="doctor"
                  checked={userRole === "doctor"}
                  onChange={() => setUserRole("doctor")}
                  className="mr-2"
                />
                Doctor
              </label>
            </div>
          </div>
=======
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">Type of User</label>
                        <div className="flex mt-2">
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    value="parent"
                                    checked={userRole === 'parent'}
                                    onChange={() => setUserRole('parent')}
                                    className="mr-2"
                                />
                                Parent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="doctor"
                                    checked={userRole === 'doctor'}
                                    onChange={() => setUserRole('doctor')}
                                    className="mr-2"
                                />
                                Doctor
                            </label>
                        </div>
                    </div> */}
>>>>>>> 3b2fff74acffcec61bb6d2be5b08d245852e7c3b
          <div className="mt-6">
            <button
              type="button"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
              onClick={handleSignup}
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
