import React from 'react'
import bg from './assets/footerbg.mp4'

const Footer = () => {
  return (
        
        <div className='max-w-screen relative mx-auto mt-[5em] pt-[7em] border-b text-white'>
        <div className='flex felx-row justify-around'>
        <ul className='space-y-4'>
            <li className='font-bold text-[1.1em]'>More From Our Company</li>
            <li>Home</li>
            <li>Abouty</li>
            <li>Services</li>
            <li>Where To Find Us</li>
            

        </ul>
        <ul className='space-y-4'> 
            <li className='font-bold text-[1.1em]'>About</li>
            <li>Our Company</li>
            <li>Our Teams</li>
        </ul>
        <ul className='space-y-4'>
            <li className='font-bold text-[1.1em]'>Services</li>
            <li>Architectural Designs</li>
            <li>Interior Designs and Modeling</li>
            <li>Interior Designs and Modeling</li>
            <li>Structural Design and Consultation</li>
            <li>Civil Construction Works</li>
            <li>Engineering Consultancy </li>
        </ul>
        <ul className='space-y-4'>
            <li className='font-bold text-[1.1em]'>Where To Find Us</li>
            <li>Location</li>
            
        </ul>
<div className='w-[15em] space-y-7 text-justify pb-[4em]'>
    <h1 className='text-[1.1em] font-bold'> Reach Out To Us</h1>
    <p>We are here to answer all your questions, Fill out your form and we will connect you with the people who can help</p>
    <button className='px-7 py-4 rounded-xl bg-[#800000] hover:bg-[#se1914] hover:shadow-xl'>Contact Us</button>
<div className='pt-[3em]'>
<a href='https://www.facebook.com/irtiqadesigns/' target='blank' className='pt-[5em]'>
</a>
</div>
</div>
</div>
<div className='absolute top-0 z-[-99]'>
<video src={bg} autoPlay muted loop className='w-screen' />
</div>
</div>
      
  )
}

export default Footer
