import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo-presently.svg";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OTP = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isExpired, setIsExpired] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsExpired(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    if (value && !/^\d*$/.test(value)) return;
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
      if (!newOtp[index] && index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        document.getElementById(`otp-input-${index - 1}`).focus();
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (isExpired) {
      setError(true);
      setSuccess(false);
    } else if (enteredOtp === "123456") {
      setSuccess(true);
      setError(false);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  const handleResendOTP = (e) => {
    e.preventDefault();
    setTimer(60);
    setIsExpired(false);
    setError(false);
    setOtp(Array(6).fill(""));
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex flex-col justify-center items-center p-8 relative">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md md:shadow-sm md:bg-gray-100 md:rounded-xl md:p-10 lg:shadow-none lg:rounded-none lg:bg-transparent lg:p-0"
        >
          <div className="space-y-4 lg:space-y-8">
            <Link to="/register" className="inline-block">
              <ArrowLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </Link>
            <h1 className="text-xl lg:text-2xl font-bold text-[#116E63]">
              Masukan OTP
            </h1>
          </div>
          
          <div className="py-6 lg:py-10 text-center">
            <p className="text-sm lg:text-base">
              Ketik 6 digit kode yang dikirimkan ke J*****@gmail.com
            </p>
          </div>
          
          <div className="flex gap-2 lg:gap-4 md:gap-4 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="bg-white border-2 border-[#116E63] p-2 sm:p-4 rounded-xl text-center w-10 h-10 lg:w-12 lg:h-12 text-lg lg:text-xl focus:outline-none focus:border-[#116E63]"
              />
            ))}
          </div>
          
          <div className="py-6 lg:py-8 text-center">
            {timer > 0 ? (
              <p className="text-sm lg:text-base">Kirim Ulang OTP dalam {timer} detik</p>
            ) : (
              <button
                onClick={handleResendOTP}
                className="text-[#FF0000] text-sm lg:text-base hover:underline font-medium"
              >
                Kirim Ulang OTP
              </button>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#116E63] text-white rounded-xl py-3 font-medium hover:opacity-95 transition duration-300 text-sm lg:text-base"
          >
            Daftar
          </button>
        </form>

        {(success || error) && (
          <div className="fixed lg:absolute bottom-16 md:bottom-56 lg:bottom-14 left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0 w-full max-w-md mx-auto px-4">
            <div
              className={`${
                success ? "bg-green-500" : "bg-[#FF0000]"
              } text-white p-3 rounded-md text-sm text-center`}
            >
              {success
                ? "Registrasi berhasil"
                : "Maaf, OTP salah / sudah kedaluarsa"}
            </div>
          </div>
        )}
      </div>

      <div className="hidden lg:flex flex-col justify-center items-center p-8 bg-[#F8F8F8]">
        <img src={Logo} alt="logo presently" className="w-96" />
      </div>
    </section>
  );
};

export default OTP;