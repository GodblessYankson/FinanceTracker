import React from 'react'
import Navbar from '../Navbar'
import Herosection from './Herosection'
import Features from './Features'
import Calculator from './Calculator'

const LandingPage = () => {
  return (
    <div className='w-full'>
      <Navbar />
        <div className=''>
            <section>
              <Herosection />
            </section>
            <section>
              <Features />
            </section>
            <section className='bg-[#0f172a] w-full'>
              <Calculator />
            </section>
        </div>
        

    </div>
  )
}

export default LandingPage
