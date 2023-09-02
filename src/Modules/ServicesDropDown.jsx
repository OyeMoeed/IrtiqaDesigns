import React from 'react'
import { Link } from 'react-router-dom'
import { Services } from './ServiceMenu'
import { useState } from 'react'

const ServicesDropDown = () => {
    const [sclick, setSClick] = useState(false)

const handleClick = ( ) => setSClick(!sclick)
  return (
    <>
      <ul onClick={handleClick} className={sclick ? 'hidden' : 'absolute top-[3em] right-[-10em] w-[20em] items-center bg-white text-black bg-opacity-60 space-y-[1em] py-[1em] pl-[1em] rounded-xl'} >
        {Services.map((item,index) =>
        {
            return(
                <li key={index}>
                <Link className={item.cName} to={item.path} onClick={()=>
                setSClick(false)}>
                    {item.title}
                </Link>
                </li>
            )
        })}

      </ul>
    </>
  )
}

export default ServicesDropDown
