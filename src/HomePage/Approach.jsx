import React from 'react'
import img from '../assets/structure.jpeg'
const Approach = () => {
  return (
    <div>
        <img src={img} alt='/' className='absolute top-[130em] z-[-99999]' />
    <div className='max-w-[1400px] mx-auto text-black '>
      <div className='absolute left-[70em] top-[157em]'>
        <div className='space-y-4'>
            <h1>Our Approach</h1>
            <h1 className='text-[3em]'>A quest for uniqueness</h1>
           <p className='w-[20em] ml-[10em]'> Irtiqa Designs provides a full spectrum of civil engineering planning, design and construction cons
           </p>
           <button className='ml-[10em]'>Learn More</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Approach
