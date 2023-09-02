import React from 'react'
import aboutus from '../assets/aboutus.jpeg'
import background from '../assets/background.jpeg'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const About = () => {
  return (
    <div 
    style={{backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
    className='max-w-screen px-[2em] max-h-screen mx-auto  text-white overflow-hidden z-[-99]'>
      <div className='flex justify-evenly'>
      <div className='flex flex-col w-[30em] space-y-3 py-[19em]'>
        <h1 className='text-[3em] '>We Serve All Of Your Construction Services</h1>
        <p className='pb-2'>Irtiqa Design is a medium-sized, multi-disciplined engineering consultancy providing clients with an innovative, reliable, friendly service and creative solutions to ensure a smooth pathway from conception to completion.
</p>

<Button variant='outlined' className='py-4 w-[10em] lg:text-[1em] text-[0.7em] background-white '> <Link to='/About'>About Us</Link></Button>
      </div>

      <div className='py-[7em]'>
        <img src={aboutus} alt="/" className='w-[35em]'/>
      </div>
      </div>
    </div>
  )
}

export default About
