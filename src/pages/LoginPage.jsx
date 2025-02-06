import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/images/logo-presently.svg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-screen">
    <div className="flex flex-col justify-center items-center p-8">
      <form className="w-full max-w-md md:shadow-sm md:bg-gray-100 md:rounded-xl md:p-10 lg:shadow-none lg:rounded-none lg:bg-transparent lg:p-0">
        <h1 className="text-2xl font-bold text-[#116E63] mb-6">
          Masuk
        </h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email/No Telepon
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm border border-gray-300 text-gray-700 text-sm rounded-[12px] block w-full p-3 font-normal"
            placeholder="Contoh: johndoe@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
      <label
        htmlFor="password"
        className="mb-2 text-sm font-medium text-gray-700 flex justify-between items-center"
      >
        Password
        <a
          href="#"
          className="text-[#116E63] text-sm hover:underline font-medium"
        >
          Lupa kata sandi?
        </a>
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="shadow-sm border border-gray-300 text-gray-700 text-sm rounded-[12px] block w-full p-3 pr-10 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Masukan Password"
          required
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>
    </div>
        <button
          type="submit"
          className="w-full bg-[#116E63] text-white rounded-[12px] py-3 font-medium hover:opacity-95 transition duration-300"
        >
        Masuk
        </button>
        <div className="mt-6 flex flex-col items-center">
          <button
            type="button"
            className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-3 mb-4 shadow-sm transition duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.9 0 7.1 1.6 9.3 4l6.9-6.9C35.8 3.5 30.3 1 24 1 14.9 1 7.3 6.5 3.7 14l7.8 6.1C13 13.7 18 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.5 24c0-1.6-.2-3.1-.5-4.6H24v9.1h12.6c-.5 2.9-1.9 5.3-3.9 7l6.9 6.9c4.1-3.8 6.5-9.4 6.5-15.4z"
              />
              <path
                fill="#4A90E2"
                d="M10.7 27c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7L3 12.5C1.1 15.8 0 19.7 0 24s1.1 8.2 3 11.5l7.7-6.5z"
              />
              <path
                fill="#FBBC05"
                d="M24 46c6.3 0 11.6-2.1 15.4-5.6l-6.9-6.9C30.3 35.7 27.3 36.5 24 36.5c-6 0-11-4.2-12.9-9.8l-7.8 6.1C7.3 41.5 14.9 46 24 46z"
              />
            </svg>
            Login with Google
          </button>
          <button className="text-black text-sm font-normal flex gap-3">
            Belum punya akun? 
            <span className="text-[#116E63] hover:underline">Daftar disini</span>
          </button>
        </div>
      </form>
    </div>
    <div className="bg-[#F8F8F8] lg:flex flex-col justify-center items-center p-8 hidden">
      <img src={Logo} alt="logo presently" className="md:w-56 lg:w-96" />
    </div>
    </section>
  );
};

export default LoginPage;
