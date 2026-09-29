import React from 'react'
import { PiChartBarBold } from "react-icons/pi";
import { FaChartBar} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { navLinks } from '../constant/index';
import { Link } from 'react-router-dom';
import { LoginBtn } from './LoginBtn';
import { useState } from 'react';


const Navbar = () => {
    //Setting toogle menu state
    const [showToggle, setShowToggle] = useState(true)

    //Setting show toogle function
    const ToogleMenu = () => {
        setShowToggle(!showToggle)
    }

  return (
    <nav className='bg-[#fefefe] w-full py-4 px-2 shadow-sm'>
      <div className='flex justify-between items-center max-w-285 mx-auto'>
        <div className='flex gap-2 items-center'>
            <FaChartBar size={40} className='text-violet-500' />
            <p className='font-bold tracking-wide text-2xl'>
                Fin
                <span className='text-violet-500'>Track</span>
            </p>
        </div>
        <div className='hidden md:flex  gap-3 items-center justify-center text-semibold tracking-wide '>
            {navLinks.map((navLink) => (
                <section key={navLink.id} className='' >
                    <Link to={navLink.path} 
                    className='text-md relative after:absolute hover:font-semibold  after:content-[""] after:w-0 after:left-0 after:bg-violet-500 hover:after:h-0.5 hover:after:w-full hover:after:-bottom-2  after:transition-all duration-300'>
                    {navLink.title}
                    </Link>
                    
                </section>
            ))}
        </div>
        <div className='hidden md:block'>
            <LoginBtn />
        </div>
        <div className='block md:hidden'>
            <div onClick={ToogleMenu}>
                {
                    showToggle ? <FiMenu size={30} /> : <IoClose size={30}/>
                }
            </div>
            <div className='absolute right-0 sm:w-1/2 bg-violet-500 top-20 py-4 px-2 rounded-2xl shadow-2xl h-[50%] space-y-5'>
                {
                    navLinks.map((navLink) => (
                        <section key={navLink.id}>
                        <Link to={navLink.path} 
                            className='text-xl tracking-wider relative after:absolute hover:font-semibold  after:content-[""] after:w-0 after:left-0 after:bg-[#fefefe] hover:after:h-0.5 hover:after:w-full hover:after:-bottom-2  after:transition-all duration-300'>
                            {navLink.title}
                    </Link>
                        </section>
                    ))
                }
                <div>
                    <LoginBtn />
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
