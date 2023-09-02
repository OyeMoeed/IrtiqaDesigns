import React from 'react'
import bg from '../assets/background.mp4'
const Hero = () => {
  return (
    <div>
    <div className='absolute top-0 bottom-0 z-[-99] '>
        <video src={bg} autoPlay muted loop className='w-screen '/>
    </div>
        <div className='max-w-[1400px] max-h-screen mx-auto text-white relative'>
          <div className='flex absolute top-[-90em] right-0 text-right'>
            <div>
              <h1 className='text-[2em]'>We Believe In</h1>
              <p className='text-[3em]'>Builing. Investing. Innovating.</p>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Hero
