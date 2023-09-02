import React from 'react'
import img from '../assets/services.jpeg'
const Approach = () => {
  return (
    <div 
    style={{backgroundImage:`url(${img})`, backgroundSize:'cover' }}
    className='max-w-screen mx-auto mt-[15em] text-black py-[15em] '>
      <div className='flex justify-end mr-[10em]'>
        <div className='space-y-4'>
            <h1>Our Approach</h1>
            <h1 className='text-[3em]'>A quest for uniqueness</h1>
           <p className='w-[20em] ml-[10em]'> Irtiqa Designs provides a full spectrum of civil engineering planning, design and construction cons
           </p>
           <button className='ml-[10em]'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Approach
