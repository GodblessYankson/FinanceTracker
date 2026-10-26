import React from 'react'
import { FaChartBar} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useAdmin } from '../pages/Admin/AdminContext'; 
import { createContext } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";


const sideNavContext = createContext()
const LoggedInNavbar = ({sideNavToggle, setSideNavToggle}) => {
    const { adminLoading, adminInfo } = useAdmin()
    if(adminLoading) {
        return <p>Loading...</p>
    }
const sideToogle = createContext()


  return (
    <nav className={`${sideNavContext ? '-z-50' : 'z-50'} bg-[#ffffff] fixed top-0 right-0 w-full p-2 bg-white shadow-md overflow-hidden`}>
        <div className=' flex items-center  justify-between'>
            {/* <div className='flex  items-center gap-3 py-2'>
            <FaChartBar size={40} className='text-violet-500'/>
            <div className='text-sm'>
                <p className='font-bold text-lg'>
                    Fin
                    <span className='text-violet-500'>Track</span>
                </p>
                <p className='textcolor'>
                    Personal Finance Tracker 
                </p>
            </div>
        </div> */}
        <div 
        className={`${sideNavToggle ? "invisible" : "visible"} w-10 h-10 bg-gray-300 rounded-sm flex items-center justify-center`}
        onClick={() => setSideNavToggle(!sideNavToggle)}
        >
            <FiMenu size={30}/>
        </div>
        <div 
        className='relative w-85 bg-gray-300 rounded-md'
        >
            <IoIosSearch 
            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
            size={20}
            />
            <input
             type="text"
             required
             placeholder='Search transactions, Report...' 
             className='w-full border border-gray-300 py-2 pl-10 pr-3 rounded-xl outline-none'
            />
                
            
        </div>
        <div className='flex items-center gap-4'>
            <div className='relative bg-gray-300 w-12 h-12 rounded-xl flex items-center justify-center'>
                <IoIosNotificationsOutline size={30}/>
                <div className='absolute bg-violet-500 top-3 right-2.5 w-2 h-2 rounded-full'>

                </div>
            </div>
            <button className='bg-violet-500 px-4 py-2 rounded-xl text-lg tracking-wide'>
                Add Transactions
            </button>
            {/* <div className='bg-gray-400 w-12 h-12 border-2 border-violet-500 rounded-full flex items-center justify-center font-bold text-2xl'>
                <p>{adminInfo?.firstName?.charAt(0)?.toUpperCase()}{adminInfo?.lastName?.charAt(0)?.toUpperCase()}</p>
            </div>
            <div className='bg-green-300 w-1 h-1 absolute top-10 right-1 animate-ping'>

            </div> */}
        </div>
        </div>
    </nav>
  )
}

export default LoggedInNavbar
