import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AboutMenu } from './AboutMenu'
import {motion} from 'framer-motion'

const AboutDropDown = () => {
const [click, setClick] = useState(false)
const handleClick = ( ) => setClick(!click)
  return (
    <>
      <motion.ul initial={{y:'-100%'}} animate={{y:0}} onClick={handleClick} className={click ? 'hidden' : 'absolute drop-shadow-2xl top-[1.4em] right-[-4em] w-[12em] bg-white text-black bg-opacity-60 space-y-[1em] text-center py-[1em] pl-[1em] rounded-xl z-[-99999]'} >
        {AboutMenu.map((item,index) =>
        {
            return(
                <motion.li whileHover={{scale:1.2}} key={index}>
                <Link className={item.cName} to={item.path} onClick={()=>
                setClick(false)}>
                    {item.title}
                </Link>
                </motion.li>
            )
        })}

      </motion.ul>
    </>
  )
}

export default AboutDropDown
