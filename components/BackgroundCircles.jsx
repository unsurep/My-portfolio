import React from 'react'
import {motion} from 'motion/react'

const BackgroundCircles = () => {
  return (
    <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ['20%', '20%', '50%', '80%', '20%'],
        }}

        transition={{
            duration:2.5,
        }}
        className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[150px] w-[150px] animate-ping'/>

        <div className='absolute border border-[#F7AB0A]/50 rounded-full h-[250px] w-[250px]'/>

        <div className='absolute border border-[#F7AB0A]/30 rounded-full h-[350px] w-[350px] animate-ping'/>

        <div className='rounded-full border border-[#F7AB0A]/20 opacity-20 h-[460px] w-[460px] absolute animate-pulse'/>

        <div className='rounded-full border border-[#333333]/70 opacity-20 h-[580px] w-[580px] absolute animate-pulse'/>

        <div className='rounded-full border border-[#333333]/40 h-[640px] w-[640px] absolute animate-pulse '/>
      
    </motion.div>
  )
}

export default BackgroundCircles
