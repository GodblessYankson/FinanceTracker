import React from "react";
import { useState } from "react";
import { BsLock, BsUnlock } from "react-icons/bs";

const Signup = () => {
  //const [showPasswordType, setshowasswordType] = useState(false);
  const [showPasswordType, setshowasswordType] = useState(null);

  const showpassword = () => {
    setshowasswordType(!showPasswordType);
  };
  return (
    <div className="w-full md:mx-auto flex items-center justify-center ">
      <div className="bg-white text-gray-500 w-full md:w-2/4  p-3  rounded-2xl shadow-2xl my-6">
        <form action="" className="">
          <p className="text-3xl font-bold text-violet-500 text-center tracking-wider">
            Sign Up
          </p>
          <div className="flex flex-col gap-2 ">
            <label className="signupLabel">Firstname</label>
            <div className="signupInputDiv">
              <input
                type="text"
                autoComplete="off"
                required
                placeholder="Enter firstname"
                className="signupInput"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Lastname</label>
            <div className="signupInputDiv">
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="Enter lastname"
                className="signupInput"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Email</label>
            <div className="signupInputDiv">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Enter email"
                className="signupInput"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Password</label>
            <div className="flex items-center justify-between signupInputDiv">
              <input
                type={showPasswordType === "password" ? "text" : "password"}
                required
                autoComplete="off"
                placeholder="Enter password"
                className="signupInput"
              />
              <button 
              onClick={() => setshowasswordType(showPasswordType === "password" ? null : "password")}>
                {showPasswordType === "password"? (
                  <BsUnlock size={22} />
                ) : (
                  <BsLock size={22} />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Confirm password</label>
            <div className="flex items-center justify-between signupInputDiv">
              <input
                type={showPasswordType === "confirmPassword" ? "text" : "password"}
                required
                autoComplete="off"
                placeholder="Enter password"
                className="signupInput"
              />
              <button 
              onClick={() => setshowasswordType(showPasswordType === "confirmPassword" ? "text" : "confirmPassword")}>
                {showPasswordType === "confirmPassword" ? (
                  <BsUnlock size={22} />
                ) : (
                  <BsLock size={22} />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Phone</label>
            <div className="signupInputDiv">
              <input
                type="number"
                placeholder="Enter phone"
                required
                autoComplete="off"
                className="signupInput"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Select Role</label>
            <div className="signupInputDiv">
              <select name="role" id="role" className="signupInput">
                <option value="">User</option>
                <option value="">Admin</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Source of income</label>
            <div className="signupInputDiv">
              <select name="role" id="role" className="signupInput">
                <option value="">Salary</option>
                <option value="">Savings</option>
                <option value="">Others</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Hometown</label>
            <div className="signupInputDiv">
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="Enter hometown"
                className="signupInput"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Next Of Kin</label>
            <div className="signupInputDiv">
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="Enter next of kin"
                className="signupInput"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
