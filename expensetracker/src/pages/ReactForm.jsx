import React from 'react'
import {z} from 'zod'
//import { ZodType } from 'zod/lib/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

 type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  age: number,
  password: string,
  confirmPassword: string,
  }

const ReactForm = () => {
 
  const userSchema: ZodType<FormData> = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    age: z.number().min(5).max(30),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20)

  }).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"]
    
  })

 const { register, handleSubmit } = 
  useForm<FormData>({ resolver:zodResolver(userSchema) })

  const submitData = (data: FormData) => {
    console.log("IT WORKED", data)
  }

  return (
    <div className='bg-emerald-50 flex justify-center items-center'>
         <form action="" onSubmit={handleSubmit(submitData)}>
        <label>First Name</label>
        <input type="text" {...register("firstName")} className='bg-white block border-2'/>
        <label>Last Name</label>
        <input type="text" {...register("lastName")}  className='bg-white block border-2'/>
        <label>Email:</label>
        <input type="email" {...register("email")} className='bg-white block border-2'/>
        <label>Age</label>
        <input type="number" {...register("age", { valueAsNumber: true }) }  className='bg-white block border-2'/>
        <label>Password</label>
        <input type="password" {...register("password")} className='bg-white block border-2'/>      
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} className='bg-white block border-2'/>
        <input type="submit" />

      </form>
    </div>
  )
}

export default ReactForm
