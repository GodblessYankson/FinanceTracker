import React from 'react'
import HerosectionBtn from './HerosectionBtn'
import { FaShieldAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { MdShoppingCart } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import GroupedBarChart from './GroupedBarChart';
import { useState } from 'react';
/* import HeroCharts from './Charts/HeroCharts';
 */


const Herosection = () => {
  const [chart, setCharts] = useState("bar")
  return (
    <section className='bg-[#f7fafc] pt-15 pb-10'>
        <div className='pt-10 max-w-285 mx-auto flex flex-col md:flex-row gap-6 '>
          <div className='flex-[1] border '>
            <div className='w-full flex md:block items-center justify-center pb-4'>
              <div className='flex items-center gap-1 bg-violet-300 w-75 rounded-2xl justify-center p-0.5 text-sm text-gray-900'>
              <div className='w-2 h-2 rounded-full bg-violet-500 animate-ping'></div>
              <p className='text-md text-semibold tracking-wide'>Smart Personal Wealth Platform v2.0</p>
            </div>
            </div>
            <div className='font-bold text-xl sm:text-3xl  md:text-5xl space-y-1 pb-4  text-center md:text-left '>
              <p className='text-[#1a1a1a]'>Take Control of Your </p>
              <span className='text-violet-500 '>Finanacial Future</span>
            </div>
            <div className='text-lg tracking-wider text-center md:text-left textcolor span-y-1 pb-4 '>
              <p className=''>Effortlessly track expenses, set budget caps, manage group savings, and visualize your growing wealth—all in one secure place.</p>
    
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
        <div className='flex-[1] border border-red-400 px-2'>
          <div className='w-full'>
            <div className='flex items-center justify-between py-2'>
              <div>
                <p className='textcolor text-sm'>TOTAL NET WORTH</p>
                <p className='font-semibold text-xl'>GHS48,250.80</p>
              </div>
              <fieldset className='space-x-'>
                <legend>Charts</legend>
               <input type='radio' value='bar' id='bar' onClick={() => setCharts(bar)} {...chart === "bar" ? "checked" : ""} />
               <label for='bar' className='mr-1'>Bar</label>
               <input type='radio' value='line' id='line' onClick={() => setCharts(line)} {...chart === "line" ? "checked" : ""}/>
               <label for='line' className='mr-1'>Line</label>
               <input type='radio' value='pie' id='pie' onClick={() => setCharts(pie)} {...chart === "pie" ? "checked" : ""}/>
               <label for='pie' className=''>Pie</label>
              </fieldset>
              <div className=' w-[100px] rounded-full flex items-center justify-center text-violet-500 font-semibold'>
                <CgArrowTopRight />
                <span>+14.2%</span>
              </div>
            </div>
            <div className='w-full'>
              <GroupedBarChart />
            </div>
             <div>
              <p className='textcolor text-sm py-2'>Recent Transactions</p>
              <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <MdShoppingCart size={20} className='text-red-500'/>
                    <div>
                      <p className='font-semibold '>Supermarket</p>
                      <p className='textcolor'>Groceries.Today</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-red-500 font-semibold'>-GHS84.50</p>
                  </div>           
              </div>
              <div className='flex items-center justify-between py-2'>
                  <div className='flex items-center gap-2 '>
                    <BsBank2 size={20} className='text-green-500'/>
                    <div className=''>
                      <p className='font-semibold'>Salary Deposit</p>
                      <p className='textcolor'>Income.Yesterday</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-green-500 font-semibold'>GHS5,500</p>
                  </div>           
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Herosection
