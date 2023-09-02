import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Navbar from '../Navbar'
import Approach from './Approach'
import Footer from '../Footer'

const Homepage = () => {
  return (
    <div>
              <Hero />
              <About />
              <Services />
              <Approach />
    </div>
  )
}

export default Homepage
