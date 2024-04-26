import React, { useState } from "react";
import { resetPassword } from "../helpers";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import bg from "../img/bg.jpg"

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resetPasswrord = async () => {
    setLoading((prevState) => !prevState);
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i))
      return toast.error("Invalid email");
    const res = await resetPassword(email);
    setEmail("");
    if (res == 200)
      return (
        toast.success("Reset link sent to your email address.") && navigate("/")
      );
  };

  return (
    <section className=" bg-cover h-screen flex w-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div className=" justify-center items-center mx-auto my-auto p-5 bg-sky-700 rounded-lg">
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
                  value={email}
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
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="text-sm font-semibold text-sky-100 dark:text-sky-100 px-4 p-1 border-2 border-sky-800 hover:bg-sky-800 rounded-md"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
