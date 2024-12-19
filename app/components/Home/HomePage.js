"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon

const HomePage = () => {
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            <h1 className="text-5xl font-bold font-mono text-white mb-8 text-center shadow-md">
                Welcome to JobQuest Companion!!
            </h1>
            <div className="bg-white rounded-2xl shadow-xl p-8 w-96 transition-transform transform hover:scale-105 duration-300">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>
                <form>
                    {!isLogin && ( // Render the username field only for Sign Up
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                                required
                            />
                        </div>
                    )}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg hover:from-purple-500 hover:to-blue-500 transition duration-300"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>
                <div className="flex items-center justify-center mt-6">
                    <button
                        className="flex items-center justify-center w-full bg-white border border-gray-300 py-3 rounded-lg shadow-md hover:shadow-lg hover:border-gray-400 transition duration-300"
                    >
                        <FcGoogle size={24} className="mr-2" />
                        <span className="font-medium text-gray-700">
                            {isLogin ? "Sign in with Google" : "Sign up with Google"}
                        </span>
                    </button>
                </div>
                <p className="text-center mt-6 text-sm text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={toggleForm}
                        className="text-purple-600 font-semibold hover:underline"
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default HomePage;
