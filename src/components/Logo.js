import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href='/' className='w-20 h-20 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold' whileHover={{
        backgroundColor: ['#121212', 'rgba(131,58,180,1)', 'rgba(253,29,29,1)', 'rgba(252,176,69,1)', 'rgba(131,58,180,1)', '#121212'],
        scale: [1, 0.8, 1.2, 0.8, 1],
        rotate: [0, -90, 0, 90, 0],
        borderRadius: ["100%", "50%", "30%", "50%", "100%"],
        transition:{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity }
      }}>&lt;DP/&gt;</MotionLink>
    </div>
  )
}

export default Logo