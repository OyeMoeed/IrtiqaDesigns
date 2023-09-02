
import React, { useEffect, useRef } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia,  Typography } from '@mui/material'
import services from '../assets/services.jpeg'
import {motion, useAnimation, useInView} from 'framer-motion'
import { Link } from 'react-router-dom'


const Services = () => {
const ref = useRef(null)

const isInView= useInView(ref,{once:true})
const main = useAnimation()

useEffect(()=>{
  if (isInView) {
    main.start('visible')
 } }, [isInView, main])

  return (
    <div ref={ref} className='max-w-screen mx-auto '> 
    <div 
    className='overflow-hidden absolute top-[108em]'>
    <motion.div 
    variants={{
      hidden: {opacity:0, y:75},
      visible: {opacity:1, y:0}
    }}
    initial='hidden'
    animate={main}
    transition={{duration:1, delay:0.2}}
    className='max-w-screen mx-auto px-[30em] '>
      <div className=' pt-[3em] flex flex-row space-x-[3em]'>

        <Card sx={{maxWidth:300, maxHeight:330}} className='drop-shadow-2xl'>
          <CardMedia
          component='img'
          alt='/'
          src={services}
          />
          <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            View Our Serices
          </Typography>
          </CardContent>
          <CardActions>
          <Button size='small'><Link to='/Services'>View More</Link></Button>
          </CardActions>
        </Card>
        <Card sx={{maxWidth:300, maxHeight:330}} className='drop-shadow-2xl'>
          <CardMedia
          component='img'
          alt='/'
          height='140'
          src={services}
          />
          <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            View Our Serices
          </Typography>
          </CardContent>
          <CardActions>
          <Button size='small'><Link to='/Services'>View More</Link></Button>
          </CardActions>
        </Card>
        <Card sx={{maxWidth:300, maxHeight:330}} className='drop-shadow-2xl'>
          <CardMedia
          component='img'
          alt='/'
          height='140'
          src={services}
          />
          <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            View Our Serices
          </Typography>
          </CardContent>
          <CardActions>
          <Button size='small'><Link to='/Services'>View More</Link></Button>
          </CardActions>
        </Card>
        </div>
    </motion.div>
    </div>
    </div>

  )
}

export default Services
