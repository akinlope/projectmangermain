import React, { useState } from 'react';
import { registerationFunction } from '../helpers';
import { useNavigate } from 'react-router-dom';


export const Registrationform = ({check}) => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [loading, setLoading] = useState(false)
const navigate = useNavigate()


const handleRegister = async ()=> {
  setLoading(prevState => !prevState)
  const data = {
    email,
    password
  };
  const val = await registerationFunction(data);
  setLoading(prevState => !prevState)
  if(val.email) return navigate("/mainpage")
}
  
  return (
    <section className="bg-sky-50 dark:bg-sky-600 rounded-md lg:p-5 md:p-5 sm:p-2">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-500 dark:border-sky-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-sky-900 md:text-2xl dark:text-white">
              Sign Up to create an account
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
                  className=" w-full p-2 rounded-md outline-none placeholder:text-sky-300 bg-sky-700 text-white font-medium"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-sky-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" w-full p-2 rounded-md outline-none placeholder:text-sky-300 bg-sky-700 text-white font-medium"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-sky-300 rounded bg-sky-500 focus:ring-3 focus:ring-primary-300 dark:bg-sky-700 dark:border-sky-600 dark:focus:ring-primary-600 dark:ring-offset-sky-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-sky-100 dark:text-sky-100"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
              disabled={loading}
                onClick={handleRegister}
                type="submit"
                className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-sky-100 dark:text-sky-100">
                Already have an account?{" "}
                <a
                onClick={check}
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
