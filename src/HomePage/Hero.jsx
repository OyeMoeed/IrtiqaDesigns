import React from 'react'
import bg from '../assets/structure.jpeg'
const Hero = () => {
  return (
    <div className='bg max-w-screen max-h-screen mx-auto text-black  overflow-hidden'>
   <div>
<img src={bg} alt='/' className=' absolute top-0 right-0 bottom-0 z-[-999] overflow-hidden' />
      </div> 
      <div className='flex h-[19em] px-[2em] justify-end mt-[33em]'>
          <div className='flex align-middle justify-center text-right'>
            <div className=''>
              <h1 className='text-[2em]'>We Believe In</h1>
              <p className='text-[3em]'>Builing. Investing. Innovating.</p>
            </div>
          </div>
          </div>
        </div>

  )
}

export default Hero
