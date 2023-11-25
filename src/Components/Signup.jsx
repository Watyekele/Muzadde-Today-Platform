import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-700 uppercase">
                    Sign up
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                         </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="button"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-purple-600"
                            onClick={() => console.log("Create Account clicked")} // Replace with your create account logic
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-purple-600 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
