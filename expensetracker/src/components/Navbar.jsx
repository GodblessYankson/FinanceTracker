import React from 'react'
import { PiChartBarBold } from "react-icons/pi";
import { FaChartBar } from "react-icons/fa";
import { navLinks } from '../constant/index';
import { Link } from 'react-router-dom';
import { LoginBtn } from './LoginBtn';


const Navbar = () => {
  return (
    <nav className='bg-white max-w-285 mx-auto'>
      <div className='flex justify-between items-center px-2'>
        <div className='flex gap-2 items-center'>
            <FaChartBar size={40} className='text-violet-500' />
            <p className='font-bold tracking-wide text-2xl'>
                Fin
                <span className='text-violet-500'>Track</span>
            </p>
        </div>
        <div className='flex gap-3 items-center justify-center text-semibold tracking-wide '>
            {navLinks.map((navLink) => (
                <section key={navLink.id} >
                    <Link to={navLink.path} className='hover:text-violet-500 hover:underline'>{navLink.title}</Link>
                </section>
            ))}
        </div>
        <div>
            <LoginBtn />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
