import React from "react";
import { z } from "zod";
//import { ZodType } from 'zod/lib/types'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ReactForm = () => {
  const userSchema = z
    .object({
      firstName: z
        .string()
        .min(2)
        .max(30)
        .regex(
          /^[A-Z]/,
          "Must begin with a capital number and cannot contain numbers"
        ).regex(
          /^[A-Za-z]*$/,
          "Cannot contain number"        
        ),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      age: z.number().min(5).max(30),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
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

  const submitData = (data) => {
    console.log("IT WORKED", data);
  };

  return (
    <div className="bg-emerald-50 flex justify-center items-center">
      <form action="" onSubmit={handleSubmit(submitData)}>
        <label>First Name</label>
        <input
          type="text"
          {...register("firstName")}
          className="bg-white block border-2"
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <label>Last Name</label>
        <input
          type="text"
          {...register("lastName")}
          className="bg-white block border-2"
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <label>Email:</label>
        <input
          type="email"
          {...register("email")}
          className="bg-white block border-2"
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label>Age</label>
        <input
          type="number"
          {...register("age", { valueAsNumber: true })}
          className="bg-white block border-2"
        />
        {errors.email && <span>{errors.age.message}</span>}
        <label>Password</label>
        <input
          type="password"
          {...register("password")}
          className="bg-white block border-2"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="bg-white block border-2"
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactForm;
