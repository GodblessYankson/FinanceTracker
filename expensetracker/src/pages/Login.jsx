import React, { useState } from "react";
import { auth, provider } from "../config/firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { BsLock, BsUnlock } from "react-icons/bs";
/* import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
 */
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [passwordType, setPasswordType] = useState(false);
  console.log(passwordType);

  const showPassword = () => {
    setPasswordType(!passwordType);
  };

  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Create successfully");
    } catch (err) {
      console.log("Errror creeating user");
    }
  };
/*   const userSchema = z.object({
    email: z.string().email()
  }) */


  return (
    <div className="md:mx-auto flex items-center justify-center w-full ">
       <div className="bg-white w-full md:w-2/4 my-20 px-4 py-6 rounded-2xl shadow-2xl">
      
       <p className="text-2xl tracking-wider font-bold text-center py-4">
          Login
        </p>
         <form action="">
          <div className="my-3"> 
          <label className="font-semibold tracking-wider text-md">
            Enter your email
          </label>
          <div className="relative w-full border border-gray-500 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500 rounded-lg shadow-2xl p-2">
            <input
              type="text"
              placeholder="Enter email"
              className="w-full autofill-off placeholder:text-gray-500 border-0 outline-none"
              value={email}
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 space-y-2">
          <label className="font-semibold tracking-wider text-md">
            Enter password
          </label>
          <div className="relative w-full flex items-center   border border-gray-500 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500 rounded-lg shadow-2xl">
            <input
              type={passwordType ? "text" : "password"}
              placeholder="Enter password"
              className="w-full bg-transparent text-base autocomplete-off placeholder:text-gray-500 border-0 outline-none p-2"
              value={password}
              required
              onChange={(e) => setpassword(e.target.value)}
            />
            <button
              onClick={() => showPassword()}
              className="mr-3 flex items-center justify-center hover-text-violer-500"
            >
              {passwordType ? <BsUnlock size={22} /> : <BsLock size={22} />}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6 mb-2 space-y-2">
          <button
            onClick={createUser}
            className="bg-violet-500 py-2 px-6 my-4 text-white hover:bg-violet-700 hover:shadow-xl rounded-lg font-light text-xl  tracking-wide"
          >
            Sign In
          </button>
         </div> 
         </form>

          <button className="bg-violet-500 py-2 px-6 my-4 text-white hover:bg-violet-700 hover:shadow-xl rounded-lg font-light text-xl  tracking-wide">
            Sign In With Google
          </button>
        
        <button>
          <Link
            to="/signup"
            className="text-md font-semibold underline text-violet-500"
          >
            Does not have an account? Sign Up
          </Link>
        </button> 
      </div> 
    </div>
  );
};

export default Login;
