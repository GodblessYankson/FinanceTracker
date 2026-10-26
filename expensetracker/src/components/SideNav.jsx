import React from 'react'
import { FaChartBar } from 'react-icons/fa'
import { IoClose } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { sideNav } from '../constant'
import {Link} from "react-router-dom"
import { useAdmin } from '../pages/Admin/AdminContext'
import { useState } from 'react';
import { useSignOut } from '../hooks/useSignOut';

const SideNav = ({sideNavToggle,setSideNavToggle}) => {
  const {adminInfo} = useAdmin()
  const [getSideNavid, setGetSideNavid] = useState(0)
  const [showLogOut, setShowLogOut] = useState(false)
  console.log(showLogOut)

  
  //LogOut the user
  const {SignOut} = useSignOut()
  return (
    <aside className={`${sideNavToggle ? 'visible backdrop-blur-md transition-all duration-300' : 'invisible'} md:visible h-screen bg-white  fixed top-0 left-0 md:w-[300px] border-r-2 border-violet-500`}>
      <nav className='px-2'>
        <div className='flex gap-2 items-center justify-between px-2 py-2 border-b border-violet-500 '>
          <div className='flex items-center  gap-2'>
          <FaChartBar size={40} className='text-violet-500' />
          <div>
            <p className='font-bold tracking-wide text-xl'>Fin<span className='text-violet-500'>Track</span></p>
            <p className='textcolor text-sm'>Personal finance tracker</p>
          </div>
        </div>
        <button className={`textcolor md:invisible`} onClick={() => setSideNavToggle(!sideNavToggle)}>
          <IoClose size={30} />
        </button>
        </div>
        <hr className='text-violet-500' />

        <div className=' my-2'>
          {
            sideNav.map((tab,index) => {
              const Icon = tab.icon;

              return (
                <div key={index} className=''>
                  <div onClick={() => setGetSideNavid(index)} className={`${index === getSideNavid ? 'bg-gray-300 border border-violet-500' : ""} py-2 my-1 hover:bg-gray-300 w-[280px] mx-auto rounded-xl px-2`}>
                    <Link className='flex items-center gap-2 textcolor '>
                      <Icon className=''/>
                      <p className=''>{tab.title}</p>
                    </Link>
                  </div>
                </div>
              )
})
          }
        </div> 
        <div className='absolute bottom-4 right-3 flex  items-center justify-between'>
          {/* Where to add the logout button */}
          <div className='flex items-center gap-1 py-2  w-[250px]'>
            <div 
            className='relative w-13 h-13  flex items-center text-2xl justify-center font-semibold bg-violet-500 rounded-full border border-white text-[#1a1a1a]'
            >             
                {adminInfo?.firstName?.charAt(0)?.toUpperCase()}{adminInfo?.lastName?.charAt(0)?.toUpperCase()}         
                <div className='bg-green-500 w-2 h-2 absolute bottom-0 right-2 rounded-full animate-ping'></div>     
            </div>
            <div>
              <p className='font-semibold tracking-wide text-sm '>
                {adminInfo?.firstName }{adminInfo?.lastName}
              </p>
              <span className='textcolor text-xs'>{adminInfo?.role}</span>
              
            </div>
          </div>
          <div className='textcolor' onMouseEnter={() => setShowLogOut(true)} onMouseLeave={() => setShowLogOut(false)}  >
            <MdLogout size={30} onClick={SignOut}/>
            <div className='absolute'>
              {
                showLogOut ? 
                <p className='text-xs'>LogOut</p> : ""

              }
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default SideNav
