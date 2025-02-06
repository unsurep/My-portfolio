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




const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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

      <div></div>
      

    </div>
  )
}

export default Home
