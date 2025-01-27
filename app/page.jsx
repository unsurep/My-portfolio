import About from '@/components/About'
import WorkExperience from '@/components/Experience' 
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Nav/>
      <Hero/>
      <About/>
      <WorkExperience/>

    </div>
  )
}

export default Home
