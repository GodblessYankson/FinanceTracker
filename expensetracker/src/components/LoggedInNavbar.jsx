import React from 'react'
import { FaChartBar} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useAdmin } from '../pages/Admin/AdminContext'; 
import { createContext } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";


const sideNavContext = createContext()
const LoggedInNavbar = ({sideNavToggle, setSideNavToggle, setaddTransactionModal }) => {
    const { adminLoading, adminInfo } = useAdmin()
    if(adminLoading) {
        return <p>Loading...</p>
    }
const sideToogle = createContext()

  return (
    <nav className={`${sideNavContext ? '-z-50' : 'z-50'} bg-[#ffffff] static top-0 right-0 w-full  p-2 bg-white shadow-md overflow-hidden`}>
        <div className=' flex items-center  justify-between'>
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
            <button className='bg-violet-500 px-4 py-2 rounded-xl text-lg tracking-wide' onClick={() => setaddTransactionModal(true)}>
                Add Transactions
            </button>
        </div>
        </div>
    </nav>
  )
}

export default LoggedInNavbar
