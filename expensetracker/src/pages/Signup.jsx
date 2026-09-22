import React from "react";
import { useState } from "react";
import { BsLock, BsUnlock } from "react-icons/bs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//import { data } from "react-router-dom";
import{ useNavigation } from "../utils/useNavigation"
//import { db } from "../config/firebaseconfig";
import { auth, provider } from "../config/firebaseconfig";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAddUserInfo } from "../hooks/useAddUserInfo";

const Signup = () => {
  const [showPasswordType, setshowasswordType] = useState(null);

  const showpassword = () => {
    setshowasswordType(!showPasswordType);
  };
  //Navigations
  const { goBack, goLogin } = useNavigation()

  //Adding user information to firebase
  const { addUserInfo } = useAddUserInfo()
  const submitUserInfo = async(data) => {
   await addUserInfo(data)
  }
  

  const userSchema = z
    .object({
      firstName: z
        .string()
        .min(2, "First name must be more than 2 characters")
        .max(30, "First name must be less than 30 characters")
        .regex(
          /^[A-Za-z]+$/,
          "Must be more than one and should contain only letters",
        ),

      lastName: z
        .string()
        .min(2, "Last name must be more than 2 characters")
        .max(30, "Last name must be less than 30 characters")
        .regex(
          /^[A-Za-z]+$/,
          "Must be more than one and should contain only letters",
        ),
        
      email: z
      .string()
      .email("Invalid email address"
      ),

       password: z
        .string()
        .min(8, "Password must be more than 7")
        .max(30, "Password must be less than 31")
        .regex(
          /[A-Za-z0-9][^A-Za-z0-9]*$/,
          "Must contain alphabets and at least special characters",
        ),

      confirmPassword: z
        .string()
        .min(8, "Password must be more 7")
        .max(30, "Password must not exceed 30 characters"), 
 
      phone: z
      .string()
      .regex(/^0\d{9}$/, "Enter a valid number"
      ),
      
      age: z.coerce
        .number()
        .min(15, "Age must be more than 14 years")
        .max(200, "Should be between 15 and 200 years"
        ),
        
      role: z.
      string()
      .max(10, "Please selct a role"
      ),
      
      income: z
      .string()
      .max(10,"Select your source of income"
      ),
      
      hometown: z
        .string()
        .min(2, "Must the more than one character")
        .max(30, "Must be less than 30 characters")
        .regex(
          /^[A-Za-z][A-Za-z-_  ]+$/,
          "Must be more than two alphabets and no special characters except _,-",
        ),

      nextOfKin: z
        .string()
        .min(2, "Must be more than one characters")
        .max(50, "Must not exceed 50 characters")
        .regex(
          /^[A-za-z- ]+$/,
          "Must contain only letters, spaces and hyphens",
        ),
      nextOfKinPhone: z.string().regex(/^0\d{9}$/, "Enter a valid number"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match",
      path: ["confirmPassword"],
    });

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema) });


  return (
    <div className="w-full md:mx-auto flex items-center justify-center ">
      <div className="bg-white text-gray-500 w-full md:w-2/4  p-3  rounded-2xl shadow-2xl my-6">
        <form action="" className="" onSubmit={handleSubmit(submitUserInfo)}>
          <p className="text-3xl font-bo~ld text-violet-500 text-center tracking-wider">
            Sign Up
          </p>
          <div className="flex flex-col gap-2 ">
            <label className="signupLabel">Firstname</label>
            <div className="signupInputDiv">
              <input
                type="text"
                {...register("firstName")}
                autoComplete="off"
                placeholder="Enter firstname"
                className="signupInput"
              />
            </div>
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Lastname</label>
            <div className="signupInputDiv">
              <input
                type="text"
                {...register("lastName")}
                autoComplete="off"
                placeholder="Enter lastname"
                className="signupInput"
              />
            </div>
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Email</label>
            <div className="signupInputDiv">
              <input
                type="email"
                {...register("email")}
                autoComplete="off"
                placeholder="Enter email"
                className="signupInput"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
           <div className="flex flex-col gap-2">
            <label className="signupLabel">Password</label>
            <div className="flex items-center justify-between signupInputDiv">
              <input
                type={showPasswordType === "password" ? "text" : "password"}
                {...register("password")}
                autoComplete="off"
                placeholder="Enter password"
                className="signupInput"
              />
              <button
                onClick={() =>
                  setshowasswordType(
                    showPasswordType === "password" ? null : "password",
                  )
                }
              >
                {showPasswordType === "password" ? (
                  <BsUnlock size={22} />
                ) : (
                  <BsLock size={22} />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Confirm password</label>
            <div className="flex items-center justify-between signupInputDiv">
              <input
                type={
                  showPasswordType === "confirmPassword" ? "text" : "password"
                }
                {...register("confirmPassword")}
                autoComplete="off"
                placeholder="Enter password"
                className="signupInput"
              />
              <button
                onClick={() =>
                  setshowasswordType(
                    showPasswordType === "confirmPassword"
                      ? "text"
                      : "confirmPassword",
                  )
                }
              >
                {showPasswordType === "confirmPassword" ? (
                  <BsUnlock size={22} />
                ) : (
                  <BsLock size={22} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div> 
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Phone</label>
            <div className="signupInputDiv">
              <input
                type="text"
                {...register("phone")}
                placeholder="Enter phone"
                autoComplete="off"
                className="signupInput"
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Age</label>
            <div className="signupInputDiv">
              <input
                type="number"
                {...register("age")}
                placeholder="Enter age"
                autoComplete="off"
                className="signupInput"
              />
            </div>
            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Select Role</label>
            <div className="signupInputDiv">
              <select
                name="role"
                id="role"
                {...register("role")}
                className="signupInput"
              >
                <option value="" disabled>Select your role</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            {errors.role && (
            <span className="text-red-500 text-sm">
              {errors.role.message}
            </span>
          )}
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Source of income</label>
            <div className="signupInputDiv">
              <select
                name="role"
                id="role"
                {...register("income")}
                className="signupInput"
              >
                <option value="" disabled>Source of income</option>
                <option value="Salary">Salary</option>
                <option value="Savings">Savings</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {errors.income && 
            (
              <span>{errors.income.message}</span>
            )
            }
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Hometown</label>
            <div className="signupInputDiv">
              <input
                type="text"
                {...register("hometown")}
                autoComplete="off"
                placeholder="Enter hometown"
                className="signupInput"
              />
            </div>
            {errors.hometown && (
              <span className="text-red-500 text-sm">
                {errors.hometown.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Next Of Kin</label>
            <div className="signupInputDiv">
              <input
                type="text"
                {...register("nextOfKin")}
                autoComplete="off"
                placeholder="Enter next of kin"
                className="signupInput"
              />
            </div>
            {errors.nextOfKin && (
              <span className="text-red-500 text-sm">
                {errors.nextOfKin.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="signupLabel">Phone</label>
            <div className="signupInputDiv">
              <input
                type="text"
                {...register("nextOfKinPhone")}
                placeholder="Enter phone"
                autoComplete="off"
                className="signupInput"
              />
            </div>
            {errors.nextOfKinPhone && (
              <span className="text-red-500">
                {errors.nextOfKinPhone.message}
              </span>
            )}
          </div>
          <div className="grid md:grid-cols-3 gap-2 mt-5">
            <button onClick={goBack} className="signUpBtn bg-red-500 hover:bg-hover-700">
            Back
          </button>
          <button onClick={goLogin} className="signUpBtn bg-blue-500 hover:bg-hover-700">
            Login
          </button>
          <button type="submit" className="signUpBtn bg-green-500 hover:bg-hover-700">
            Register
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
