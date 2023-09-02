import React from 'react'
import aboutus from '../assets/aboutus.jpeg'
import background from '../assets/background.jpeg'

const About = () => {
  return (
    <div>
      <div className='absolute top-[55em] z-[-9999]'>
        <img src={background} alt="/" />
      </div>
    <div className='max-w-[1400px] max-h-screen mx-auto z-[-10] lg:px-0 px-3 text-white '>
      
      <div className='absolute left-[20em] top-[77em] w-[30em] space-y-3 '>
        <h1 className='text-[3em] '>We Serve All Of Your Construction Services</h1>
        <p className='pb-2'>Irtiqa Design is a medium-sized, multi-disciplined engineering consultancy providing clients with an innovative, reliable, friendly service and creative solutions to ensure a smooth pathway from conception to completion.
</p>
<button className='bg-purple-950 py-4 text-white w-[10em] lg:text-[1em] text-[0.7em] '> About Us</button>
      </div>

      <div className='absolute lg:right-[10em] lg:top-[65em] top-[77em] lg:w-[50em] z-[-10]'>
        <img src={aboutus} alt="/" className='w-[35em]'/>
      </div>
    </div>
    </div>
  )
}

export default About
