import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 px-4 p-8">
      <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create Your Account
        </h1>
        <div className="mb-3">
          <label
            htmlFor="firstname"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-3 focus:ring-green-500 focus:border-green-500"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-3 focus:ring-green-500 focus:border-green-500"
            placeholder="Doe"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="birthdate"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Birthdate
          </label>
          <input
            type="date"
            id="birthdate"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-3 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-3 focus:ring-green-500 focus:border-green-500"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-3 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
        <div className="mt-6 flex flex-col items-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Login here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
