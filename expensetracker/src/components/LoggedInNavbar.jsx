import React from 'react'
import { FaChartBar} from "react-icons/fa";
import { GoPlus } from "react-icons/go";



const LoggedInNavbar = () => {
  return (
    <nav className='bg-[#ffffff] shadow-sm'>
        <div className='max-w-290 mx-auto flex items-center  justify-between'>
            <div className='flex  items-center gap-3 py-2'>
            <FaChartBar size={40} className='text-violet-500'/>
            <div className='text-sm'>
                <p className='font-bold text-lg'>
                    Fin
                    <span className='text-violet-500'>Track</span>
                </p>
                <p className='textcolor'>
                    Personal Financial Analytics 
                </p>
            </div>
        </div>
        <div className='flex items-center gap-1 bg-violet-500 py-2 px-4 text-white rounded-xl text-base'>
            <GoPlus size={30}/>
            <p>Add Transaction</p>
        </div>
        </div>
    </nav>
  )
}

export default LoggedInNavbar
