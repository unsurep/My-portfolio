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
            className='mt-[8rem] items-center justify-center flex my-auto'
            >
            <Image 
                src='/pic.jpg' 
                height={500} 
                width={500}
                alt='picture_about'
                className='-mb-20  xl:-mb-40 md:-mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[400px] xl:h-[400px] '
            />
        </motion.div>

        <div className='mt-28 lg:mt-16 pb-10 px-0 md:px-10  text-left md:  '>
            <h4 className='text-base lg:text-lg mb- font-semibold lg:pt-[3rem]'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>  background</h4>

            <p className='text-xs lg:text-base '>I am Louis, result-driven with over 10 years of experience  in administration,
            client <br /> relations and operational management.   Demonstrates excellent skills in leadership, <br /> organizing and  communication, with a proven ability to manage multiple tasks <br /> efficiently and contribute to team success. 
            </p>

            <p className='text-xs lg:text-base'>
                Recently upskilled in  modern digital tools and web technologies,  combining <br /> strong  administrative expertise with problem-solving  abilities to drive <br /> drive  organizational growth. 
            </p>

            <p className='text-xs lg:text-base'>
                Possesses solid frontend development knowledge, including proficiency  in HTML 5, <br /> CSS, Tailwind CSS,  JavaScript, React, and Next.js ,as well as basic backend skills <br /> in  user authentication and database integration. Competent at  creating responsive, <br /> user-friendly web interfaces  and leveraging  technical expertise to streamline <br /> processes and improve efficiency. Seeking a challenging position that allows me <br /> to utilize my administrative  background, technical skills, and continuous learning <br />
                mindset to  deliver innovative solutions and achieve organizational goals.

            </p>
        </div>
    </div>
    </section>
  )
}

export default About
