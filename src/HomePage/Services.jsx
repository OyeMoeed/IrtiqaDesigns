import React from 'react'
import services from '../assets/services.jpeg'
import mep from '../assets/mep.jpeg'
import about from '../assets/about.jpeg'

 const Services = () => {
    
  return (
    <div>
       <div className='max-w-[1400px] mx-auto h-[20em] lg:mt-[123em] mt-[140em] flex flex-col items-center justify-evenly text-center'>
      <div className='flex lg:flex-row flex-col items-center lg:space-x-[4em] lg:mt-0 mt-[em] '>
      <div className="card w-96 bg-base-100 mr-[2em]">
  <figure className="pb-3">
    <img src={services} alt='/'/>
  </figure>
  <div className="card-body items-center text-left pl-5 ">
    <h2 className="card-title font-semibold text-[1.5em]">View Our Services</h2>
    <div className='card-actions'>
    <button className='py-3'>Learn More</button>
    </div>
    
  </div>
</div> 

<div className="card w-96 bg-base-100 mr-[2em]">
  <figure className="pb-3">
    <img src={about} alt='/'/>
  </figure>
  <div className="card-body items-center text-left pl-5 ">
    <h2 className="card-title font-semibold text-[1.5em]">Know More About Us</h2>
    <div className='card-actions'>
    <button className='py-3'>Learn More</button>
    </div>
    
  </div>
</div> 
<div  className="card w-96 bg-base-100 mr-[2em]">
  <figure className="pb-3">
    <img src={mep} alt='/'/>
  </figure>
  <div className="card-body items-center text-left pl-5">
    <h2 className="card-title font-semibold text-[1.5em]">Meet Our Team</h2>
    <div className='card-actions'>
    <button className='py-3'>Learn More</button>
    </div>
    
  </div>
</div>     
 </div>
    </div>
    </div>
  )
}
 
export default Services
