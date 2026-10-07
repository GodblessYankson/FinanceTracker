import React from 'react'
import { Link } from 'react-router-dom'
import { footerIcons, footerLinks } from '../../constant'
import { FaChartBar } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='w-full bg-[#0f172a] '>
      <div className='max-w-285 mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-4 '>
        <div className='col-span-1 space-y-4'>
            <div className='space-y-4'>
                <div className='flex gap-2 items-center'> 
                        <FaChartBar size={40} className= 'text-violet-500 ' />
                    <p className='text-3xl font-bold tracking-wide text-white'>Fin
                        <span className='text-violet-500'>Track</span>
                    </p>
                </div>
                <p className='textcolor text-base'>
                    The modern financial managemnet platform designed to help you save,budget,grow and visualize your wealth effortleesly
                </p>
            </div>
           <div className='flex gap-4 py-2'>
             {
                footerIcons.map((icon) => {
                    const SocialIcons = icon.icon
                    return (
                        <div key={icon.id} className='bg-gray-200 text-gray-900 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-violet-500 hover:text-white transition-all duration-300'>
                            <div>
                                 <p>{icon.title}</p>
                                <div>
                                    <SocialIcons size={20} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
           </div>
        </div>
        <div className='col-span-2 grid grid-cols-3 md:grid-cols-3'>
            {
                footerLinks.map((link) => (
                    <div key={link.id} className='textcolor'>
                        <p className='text-white mb-3 font-semibold'>{link.title}</p>
                        <div className='space-y-2 text-base'>
                            <p>
                            <Link to="/">
                                {link.link1}
                            </Link>
                        </p>
                        <p>
                            <Link to="/">
                                {link.link2}
                            </Link>
                        </p>
                        <p>
                            <Link to="/">
                                {link.link3}
                            </Link>
                        </p>
                        <p>
                            <Link to="/">
                                {link.link4}
                            </Link>
                        </p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
      <div className='max-w-285 mx-auto border-t border-[#5d697b] flex flex-col md:flex-row justify-between items-center py-4 textcolor text-sm space-y-1'>
        <p>@2026 FinTrack.All rights reserved.</p>
        <p>Designed and built with ❤️ by FinTrack team</p>
      </div>
    </section>
  )
}

export default Footer
