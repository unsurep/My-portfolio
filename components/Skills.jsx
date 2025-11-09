'use client'
import React from 'react'
import { motion } from 'motion/react'
import Skill from './Skill'
import portfolioData from '@/data/portfolioData'

const Skills = () => {
  const { skills } = portfolioData
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className='flex relative flex-col text-center md:text-left max-w-6xl w-full min-h-[70vh] justify-center mx-auto items-center gap-10'
    >
        <h3 className='uppercase tracking-[16px] text-gray-500 text-base md:text-2xl'>Skills</h3>
        <p className='uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>{skills.headline}</p>

        <div className='w-full space-y-10'>
          {skills.categories.map((category) => (
            <div key={category.name}>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4 px-2'>
                <h4 className='text-lg font-semibold text-gray-100'>{category.name}</h4>
                <span className='text-xs uppercase tracking-[2px] text-gray-500'>Tap or hover on desktop to reveal proficiency</span>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {category.skills.map((skillItem, index) => (
                  <Skill key={skillItem.name} skill={skillItem} directionLeft={index % 2 === 0}/>
                ))}
              </div>
            </div>
          ))}
        </div>

        {skills.currentlyLearning?.length ? (
          <div className='w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
            <h5 className='text-sm uppercase tracking-[3px] text-[#F7AB0A] mb-3'>Currently exploring</h5>
            <ul className='flex flex-wrap gap-3 text-sm text-gray-300'>
              {skills.currentlyLearning.map((item) => (
                <li key={item} className='rounded-full border border-[#F7AB0A]/40 px-3 py-1 text-xs uppercase tracking-[2px]'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      
    </motion.div>
  )
}

export default Skills
