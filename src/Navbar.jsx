
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServicesDropDown from './Modules/ServicesDropDown';
import AboutDropDown from './Modules/AboutDropDown';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [dropdown,setDropDown] = useState(false);
    const [servicesdropdown,setServicesDropDown] = useState(false);

    const onMouseEnter = () => {
        if (window.innerWidth<960) {
            setDropDown(false)
            
        } else {
            setDropDown(true)
         
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth<960) {
            setDropDown(false)
            
        } else {
            setDropDown(false)
        }
    }
    const onSMouseEnter = () => {
        if (window.innerWidth<960) {
            setServicesDropDown(false)
            
        } else {
            setServicesDropDown(true)         
        }
    }
    const onSMouseLeave = () => {
        if (window.innerWidth<960) {
            setServicesDropDown(false)            
        } else {
            setServicesDropDown(false)        }
    }

  return (
    <nav className=' max-w-[1400px] mx-auto text-white'>
       <div>
            <div className='flex flex-row items-center justify-between h-[5em]'>
            <Link to='/'>
            <h1 className='text-[2em]'>Logo</h1>
             </Link>
            <div className='lg:flex lg:flex-row lg:flex-end hidden '>
              <div className='flex flex-row '>

              
              
              <ul className='space-x-[9em] flex flex-row'>
                <motion.li whileHover={{scale:1.2}}><Link to='/'>Home</Link></motion.li>
               <motion.li whileHover={{scale:1.2}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link to='/About'>About Us 
              {dropdown && <AboutDropDown />}
               </Link> </motion.li>
                <motion.li whileHover={{scale:1.2}} onMouseEnter={onSMouseEnter} onMouseLeave={onSMouseLeave}><Link to='/Services'>Services</Link>
                {servicesdropdown && <ServicesDropDown />} </motion.li>
               <motion.li whileHover={{scale:1.2}}> <Link to='/Where To Find Us'> Where To Find Us</Link></motion.li>
        
              </ul>
            </div>
        </div> 
    
    </div>
      </div>
      </nav>
  )
}

export default Navbar