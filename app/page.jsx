import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience' 
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React from 'react'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { FaArrowUp } from "react-icons/fa";
import CallToAction from '@/components/CallToAction'




const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Nav/>
      <Hero/>
      <About/>
      <section className='snap-start' id='experience'>
        <WorkExperience/>
      </section>

      <section id='skills' className='snap-start min-h-screen items-center px-[1rem] flex flex-col pt-24 md:pt-32 pb-16 '>
        <Skills/>
      </section>

      <section id='projects' className='snap-start '>
        <Projects/>
      </section>

      <section id='contact' className='snap-end'>
        <ContactMe/>
      </section>

      <section className='snap-center'>
        <CallToAction/>
      </section>

      {/* scroll to the top */}
      <Link href='#hero' aria-label='Scroll to top'>
        <div className="h-11 w-11 md:h-14 md:w-14 rounded-full bg-[#3177A3] hover:bg-[#3d8cbf] items-center justify-center ring-4 md:ring-8 ring-[#3177A3]/30 md:hover:ring-red-300 transition-all flex fixed right-5 md:right-16 bottom-5 md:bottom-12 z-30"><span className="font-bold text-white"><FaArrowUp /></span></div>
      </Link>

      
      

    </div>
  )
}

export default Home
