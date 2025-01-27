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
        className='relative flex justify-center items-center mt-28'>
        <div className='absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-52 animate-ping'/>

        <div className='absolute border border-[#F7AB0A]/50 rounded-full h-[250px] w-[250px] mt-52'/>

        <div className='absolute border border-[#F7AB0A]/50 rounded-full h-[350px] w-[350px] mt-52 animate-ping'/>

        <div className='rounded-full border border-[#F7AB0A]/50 opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse'/>

        {/* <div className='rounded-full border border-[#333333] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse'/> */}

        {/* <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52 animate-pulse '/> */}
      
    </motion.div>
  )
}

export default BackgroundCircles
