import React from 'react'
import HerosectionBtn from './HerosectionBtn'
import { FaShieldAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";



const Herosection = () => {
  return (
    <section className='bg-[#f7fafc] pt-15 pb-10'>
        <div className='pt-10 max-w-285 mx-auto '>
            <div className='w-full flex md:block items-center justify-center pb-4'>
              <div className='flex items-center gap-1 bg-violet-300 w-75 rounded-2xl justify-center p-0.5 text-sm text-gray-900'>
              <div className='w-2 h-2 rounded-full bg-violet-500 animate-ping'></div>
              <p className='text-md text-semibold tracking-wide'>Smart Personal Wealth Platform v2.0</p>
            </div>
            </div>
            <div className='font-bold text-xl sm:text-4xl  md:text-6xl space-y-1 pb-4  text-center md:text-left '>
              <p className='text-[#1a1a1a]'>Take Control of Your </p>
              <span className='text-violet-500 '>Finanacial Future</span>
            </div>
            <div className='text-xl tracking-wider text-center md:text-left textcolor span-y-1 pb-4 '>
              <p className=''>Effortlessly track expenses, set budget caps, manage group</p>
              <p>savings, and visualize your growing wealth—all in one secure place.

              </p>
    
            </div>
            <div className='pb-1'>
                <HerosectionBtn />
            </div>
            <div className='flex items-center justify-center md:justify-start gap-6 '>
              <div className=' flex items-center gap-2'>
                  <FaShieldAlt size={20}  className='purple'/>
                  <span>                    
                    256-Bit Bank Encryption
                  </span>
              </div>
              <div className='flex items-center gap-2'>
                  <FaCreditCard size={20} className='purple' />
                  <span>
                    No Card Required
                  </span>
              </div>
            </div>
        </div>
        <div>

        </div>
    </section>
  )
}

export default Herosection
