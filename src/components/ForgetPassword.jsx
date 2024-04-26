import React, { useState } from "react";
// import { loginFunction } from "../helpers";
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";


export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const resetPasswrord = () => {
    
  }
  
  return (
    <section className="bg-sky-50 dark:bg-sky-600 rounded-md lg:p-5 md:p-5 sm:p-2 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-500 dark:border-sky-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-sky-900 md:text-2xl dark:text-white">
              Reset your password
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-sky-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className=" w-full p-2 rounded-md outline-none placeholder:text-sky-300 bg-sky-700 text-white font-medium "
                  placeholder="name@company.com"
                  required
                />
              </div>
              
             
              <button
                disabled={loading}
                onClick={resetPasswrord}
                className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              >
                Reset Password
              </button>
              <button className="text-sm font-light text-sky-100 dark:text-sky-100">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
