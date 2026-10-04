import React from 'react'
import { FaArrowRightLong, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const HerosectionBtn = () => {
  return (
    <div className='flex items-center justify-center md:justify-start gap-4 py-4'>
        <Link to={"/signup"} className='flex items-center text-sm bg-violet-500 px-8 py-3 text-white gap-2 shadow-md shadow-violet-500 rounded-xl font-semibold tracking-wider'>
            <p>Get Started Free</p>
            <FaArrowRightLong size={20} className='hidden md:flex' />
        </Link>
        <Link className='flex items-center bg-white px-8 py-3 font-semibold tracking-wider  text-[#5d697b] gap-2 shadow-md border border-gray-300 rounded-xl'>
            <FaYoutube size={20} className='text-violet-500 hidden md:flex'/>
            <p>Try Calculator</p>
        </Link>
    </div>
  )
}

export default HerosectionBtn
