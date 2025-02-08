import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience' 
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React from 'react'
import Skill from '@/components/Skill'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Skilll from '@/components/Skilll'
import Skillr from '@/components/Skillr'
import Skillt from '@/components/Skillt'
import Skilln from '@/components/Skilln'
import Skillm from '@/components/Skillm'
import Skillj from '@/components/Skillj'
import Skillg from '@/components/Skillg'
import Skillv from '@/components/Skillv'
import Link from 'next/link'
import { FaArrowUp } from "react-icons/fa";




const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Nav/>
      <Hero/>
      <About/>
      <section className='snap-start' id='experience'>
        <WorkExperience/>
      </section>

      <section id='skills' className='snap-start  h-screen items-center px-[1rem] flex flex-col pt-32 '>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-base md:text-2xl '>Skills</h3>

        <h3 className=' uppercase tracking-[3px] text-gray-500 text-[10px] md:text-sm '>Hover over a skill for proficiency</h3>
        <div className='grid grid-cols-3 pt-5 gap-3 md:gap-5'>
          <Skill/>
          <Skilll/>
          <Skillr/>
          <Skillt/>
          <Skilln/>
          <Skillm/>
          <Skillj/>
          <Skillg/>
          <Skillv/>
        </div>
      </section>

      <section id='projects' className='snap-start '>
        <Projects/>
      </section>

      <section id='contact' className='snap-end'>
        <ContactMe/>
      </section>

      {/* scroll to the top */}
      <Link href='#hero'>
        <div className="w-[10px] rounded-full px-3 py-2 md:px-6 md:py-4 md:bg-[#3177A3] items-center justify-center md:ring-8 md:hover:ring-red-300   flex fixed right-10 md:right-16 bottom-0 md:bottom-12"><span className="font-bold "><FaArrowUp /></span></div>
      </Link>

      
      

    </div>
  )
}

export default Home
