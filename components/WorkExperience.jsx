'use client'
import React from 'react'
import {motion} from 'motion/react'
import ExperienceCard from './ExperienceCard'
import portfolioData from '@/data/portfolioData'

const WorkExperience = () => {
  const { experience } = portfolioData
  return (
    <motion.div 
      initial={{opacity: 0 }}
      whileInView={{opacity: 1 }}
      transition={{duration:  1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-6 md:px-10 justify-evenly mx-auto items-center'>
      <h3  className='absolute top-24  uppercase tracking-[16px] text-gray-500 text-base md:text-2xl'>Experience</h3>

      {/* ExperienceCard section */}
      <div className='w-full flex space-x-5 overflow-x-scroll px-5 md:mt-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {experience.map((item) => (
          <ExperienceCard key={`${item.company}-${item.title}`} experience={item}/>
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
