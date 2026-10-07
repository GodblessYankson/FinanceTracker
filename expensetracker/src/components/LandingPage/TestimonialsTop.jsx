import React from 'react';
import { testimonialsDown, testimonialsTop } from '../../constant';

const TestimonialsTop = () => {
 

  return (
    <div className='w-full bg-[#f8fafc] py-20'>
      <div className='max-w-285 mx-auto '>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {testimonialsTop.map((testimonial) => (
          <div key={testimonial.id} className='bg-white p-6 rounded-lg shadow-md text-center'>
            <h3 className='purple font-bold text-4xl md:text-5xl'>{testimonial.title}</h3>
            <p className='textcolor text-sm'>{testimonial.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Testimonials down */}
      <div>
        <div className='text-center py-15'>
          <p className='text-[#1a1a1a] font-semibold text-2xl'>Loved by smart budgeters worldwide</p>
          <p className='textcolor'>See how FinTrack is empowering individuals and communities</p>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
              testimonialsDown.map((testimonial) => {
                const Icons = testimonial.icon
                return (
                  <div key={testimonial.id} className='bg-white px-4 py-6 rounded-lg shadow-md text-center'>
                    <div className='flex py-2'>
                      <Icons size={30}  className='text-[#fbbf24]' />
                      <Icons size={30}  className='text-[#fbbf24]' />
                      <Icons size={30}  className='text-[#fbbf24]' />
                      <Icons size={30}  className='text-[#fbbf24]' />
                      <Icons size={30}  className='text-[#fbbf24]' />
                    </div>
                    <div>
                      <p className='textcolor text-lg py-2'>"{testimonial.subtitle}"</p>
                      <div className='flex gap-3 items-center'>
                        <div className='bg-violet-200 w-12 h-12 rounded-full flex items-center justify-center purple  font-bold' >
                          <p>{testimonial.shortTitle}</p>
                        </div>
                        <div>
                          <p className='font-bold text-lg'>{testimonial.name}</p>
                          <p className='textcolor'>{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TestimonialsTop
