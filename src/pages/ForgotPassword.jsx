import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/images/logo-presently.svg";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to send the reset link
    setError(false); // Clear any existing error
    setSuccess(true); // Show success message
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex flex-col justify-center items-center p-8 relative">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md md:shadow-sm md:bg-gray-100 md:rounded-xl md:p-10 lg:shadow-none lg:rounded-none lg:bg-transparent lg:p-0"
        >
          <h1 className="text-2xl font-bold text-[#116E63] mb-6">Forgot Password</h1>
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
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#116E63] text-white rounded-[12px] py-3 font-medium hover:opacity-95 transition duration-300"
          >
            Kirim Tautan
          </button>
        </form>
        {error && (
          <div className="fixed lg:absolute bottom-16 md:bottom-56 lg:bottom-14 left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0 w-full max-w-md mx-auto px-4">
            <div className="bg-[#FF0000] text-white p-3 rounded-md text-sm text-center">
              Maaf email atau password anda salah
            </div>
          </div>
        )}
        {success && (
          <div className="fixed lg:absolute bottom-16 md:bottom-56 lg:bottom-14 left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0 w-full max-w-md mx-auto px-4">
            <div className="bg-green-500 text-white p-3 rounded-md text-sm text-center">
              Tautan reset password telah terkirim
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#F8F8F8] lg:flex flex-col justify-center items-center p-8 hidden">
        <img src={Logo} alt="logo presently" className="md:w-56 lg:w-96" />
      </div>
    </section>
  );
};

export default ForgotPassword;