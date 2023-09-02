import React from 'react'
import { Link } from 'react-router-dom'
import { Services } from './ServiceMenu'
import { useState } from 'react'
import {motion} from 'framer-motion'
const ServicesDropDown = () => {
    const [sclick, setSClick] = useState(false)

const handleClick = ( ) => setSClick(!sclick)
  return (
    <>
      <motion.ul initial={{y:'-100%'}} animate={{y:0}} onClick={handleClick} className={sclick ? 'hidden' : 'absolute drop-shadow-2xl top-[1.4em] right-[-8em] w-[20em] items-center bg-white text-black bg-opacity-60 space-y-[1em] py-[1em] pl-[1em] rounded-xl text-center z-[-99999]'} >
        {Services.map((item,index) =>
        {
            return(
                <motion.li whileHover={{scale:1.2}} key={index}>
                <Link  className={item.cName} to={item.path} onClick={()=>
                setSClick(false)}>
                    {item.title}
                </Link>
                </motion.li>
            )
        })}

      </motion.ul>
    </>
  )
}

export default ServicesDropDown
