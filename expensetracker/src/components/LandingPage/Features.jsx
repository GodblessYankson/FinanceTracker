import React from 'react'
import { feauturesIcons } from '../../constant'

const Features = () => {
  return (
    <section className='py-10 '>
       <div className='max-w-285 mx-auto'>
             <div className='text-center space-y-2 py-6'>
            <p className='purple text-sm'>POWERFUL CAPABILITIES</p>
            <p className='text-xl sm:text-3xl md:text-5xl font-bold tracking-wide text-[#1a1a1a] text-wrap'>Everything you need to master your money</p>
            <p className='textcolor text-xl'>Simple enough for beginners, rich enough for seasoned planners</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 space-y-3 my-10'>
            {
                feauturesIcons.map((feature) => {
                    const Icons = feature.icon;
                    return (
                    <div key={feature.id} className='bg-[#f8fafc] px-4 py-10 space-y-3 hover:shadow-xl hover:border hover:border-violet-500 rounded-2xl'>
                        <div className='bg-violet-200 rounded-2xl w-12 purple py-3 px-2 p flex items-center justify-center '>
                            <Icons size={30} />
                        </div>
                        <p className='text-2xl font-bold tracking-wide'>{feature.title}</p>
                        <p className='textcolor text-sm'>{feature.subtitle}</p>
                    </div>
                )})              
            }
        </div>
       </div>
    </section>
  )
}

export default Features
