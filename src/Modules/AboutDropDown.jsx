import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AboutMenu } from './AboutMenu'

const AboutDropDown = () => {
const [click, setClick] = useState(false)
const handleClick = ( ) => setClick(!click)
  return (
    <>
      <ul onClick={handleClick} className={click ? 'hidden' : 'absolute top-[3em] right-[-5em] w-[13em] items-center bg-white text-black bg-opacity-60 space-y-[1em] py-[1em] pl-[1em] rounded-xl'} >
        {AboutMenu.map((item,index) =>
        {
            return(
                <li key={index}>
                <Link className={item.cName} to={item.path} onClick={()=>
                setClick(false)}>
                    {item.title}
                </Link>
                </li>
            )
        })}

      </ul>
    </>
  )
}

export default AboutDropDown
