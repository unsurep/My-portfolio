import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience' 
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React from 'react'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'




const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Nav/>
      <Hero/>
      <About/>
      <section className='snap-center' id='experience'>
        <WorkExperience/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      <section id='projects' className='snap-start '>
        <Projects/>
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>

      <div></div>
      

    </div>
  )
}

export default Home
