import React, { useState } from "react";
import instaImage from "./images/auth.png";
import instaLogo from "./images/instaLogo.png";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function showPassword() {
    setShow((prev) => {
      return !prev;
    });
  }

  function handleSubmit() {
    if (inputs.email === "" || inputs.password === "") {
      alert("please enter all details");
      return;
    }

    navigate("/");
  }
  return (
    <>
      <div className="bg-black border-solid border-2 border-blue-900 h-screen w-screen grid grid-cols-2 ">
        <div className=" h-full w-3/5 flex justify-end hidden sm:block md:block lg:block md:flex md:justify-center md:items-center md:w-full  lg:flex lg:justify-end lg:items-center lg:w-full">
          <img
            src={instaImage}
            className=" object-cover object-right"
            style={{ height: "500px" }}
          />
        </div>

        <div className="h-screen w-full max-sm:ml-0 sm:p-4 ml-4 p-8 flexflex-col justify-center sm:items-center  max-sm:bg-amber-300 max-sm:w-96 max-sm:flex max-sm:flex-col  max-sm:justify-center  md:flex md:flex-col md:items-start ">
          <form className="border-solid border-2 border-white flex flex-col justify-center items-center w-80 gap-5 pb-2 ">
            <div className="h-auto w-48 object-cover mt-6 ">
              <img src={instaLogo} className="invert" />
            </div>

            <div className="relative flex gap-4 flex-col w-72">
              <input
                name="email"
                type="text"
                value={inputs.email}
                onChange={handleChange}
                placeholder="phone number , username or email"
                autoComplete="off"
                className="outline-none border-solid border-2 border-30343f  p-2 bg-transparent focus:text-white dark:border-dark-2 w-full focus:bg-transparent text-white"
              />

              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="password"
                value={inputs.password}
                onChange={handleChange}
                className="outline-none border-solid border-2 border-30343f p-2 bg-transparent focus:text-white dark:border-dark-2 w-full text-white"
              />
              {inputs.password !== "" && (
                <span
                  style={{ top: "70px" }}
                  onClick={showPassword}
                  className="absolute text-white right-2 cursor-pointer"
                >
                  {show ? "Hide" : "Show"}
                </span>
              )}

              <button
                onClick={handleSubmit}
                className="text-white border-solid border-2 border-sky-300 w-full p-1 rounded-lg bg-sky-500 hover:bg-sky-700 "
              >
                Login
              </button>
            </div>
            <div className="text-center flex flex-col gap-4">
              <p className="text-white">OR</p>
              <h4 className="text-white text-large cursor-pointer">
                Log in with Facebook
              </h4>

              <p className="text-white text-sm cursor-pointer">
                Forgot Password?
              </p>
            </div>
          </form>
          <div className="border-solid border-2 border-white w-80 mt-4 p-4 text-white text-center cursor-pointer">
            <span className=" cursor-pointer">Don't have an account?</span>
            <span className="ml-2 cursor-pointer">Sign up</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
