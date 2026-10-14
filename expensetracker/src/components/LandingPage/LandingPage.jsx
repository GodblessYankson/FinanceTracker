import React from 'react'
import Navbar from '../Navbar'
import Herosection from './Herosection'
import Features from './Features'
import Calculator from './Calculator'
import TestimonialsTop from './TestimonialsTop'
import Footer from './Footer'
import GroupedBarChart from './GroupedBarChart'

const LandingPage = () => {
  return (
    <div className='w-full'>
      <Navbar />
        <div className=''>
            <section>
              <Herosection />
            </section>
            <section >
              <Features id='features'/>
            </section>
            <section className='bg-[#0f172a] w-full' id='Goal'>
              <Calculator />
            </section>
            <section id='Testimonial'>
              <TestimonialsTop />
            </section>
            <section id='Contact'>
              <Footer  />
            </section>
        </div>
        

    </div>
  )
}

export default LandingPage
