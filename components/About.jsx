'use client'
import React from 'react'
import {motion} from 'motion/react'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='snap-center'>
    <div className=' flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <motion.h3 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl '>About</motion.h3>

        <motion.div
            initial={{x:-200,
                opacity:0,
            }}
            transition={{duration:1.2,}}
            whileInView={{ opacity:1, x:0, }}
            viewport={{once:true}}
            className='mt-[7rem]'
            >
            <Image 
                src='/pic.jpg' 
                height={500} 
                width={500}
                alt='picture_about'
                className='-mb-20  xl:-mb-40 md:-mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[400px] xl:h-[450px] '
            />
        </motion.div>

        <div className='my-28 px-0 md:px-10  text-left md:  '>
            <h4 className='text-xl lg:text-2xl mb-6 font-semibold lg:pt-[6rem]'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>  background</h4>

            <p className='text-xs lg:text-base '>I am Louis, result-driven with over 10 years of experience <br /> in administration, 
                client relations and operational management. <br />  Demonstrates excellent skills in leadership, organizing and  <br /> communication,  with a proven ability to manage multiple tasks efficiently <br /> and contribute to team success. <br /> Recently upskilled in  modern digital tools and web technologies, <br /> combining strong  administrative expertise with problem-solving <br /> abilities to drive  organizational growth. <br />
            Possesses solid frontend development knowledge, including proficiency <br /> in HTML 5, CSS, Tailwind CSS,  JavaScript, React, and Next.js <br />, as well as basic backend skills in  user authentication and database integration. <br /> Competent at  creating responsive, user-friendly web interfaces <br /> and leveraging  technical expertise to streamline processes and improve efficiency. <br />  Seeking a challenging position that allows me to utilize my administrative  background, technical skills, <br /> and continuous learning mindset to  deliver innovative solutions and achieve organizational goals.</p>
        </div>
    </div>
    </section>
  )
}

export default About
