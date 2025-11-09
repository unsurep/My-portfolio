'use client'
import React from 'react'
import {motion} from 'motion/react'
import Image from 'next/image'
import portfolioData from '@/data/portfolioData'

const About = () => {
  const { about } = portfolioData
  return (
    <section id='about' className='snap-center'>
    <div className='flex relative flex-col text-center md:text-left lg:flex-row max-w-6xl px-6 md:px-10 justify-between mx-auto items-center gap-16'>
        <motion.h3 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className='absolute top-16 uppercase tracking-[16px] text-gray-500 text-base md:text-xl'>About</motion.h3>

        <motion.div
            initial={{x:-200,
                opacity:0,
            }}
            transition={{duration:1.2,}}
            whileInView={{ opacity:1, x:0, }}
            viewport={{once:true}}
            className='mt-[8rem] items-center justify-center flex my-auto relative'
            >
            <Image 
                src={about.image.src}
                height={420} 
                width={420}
                alt={about.image.alt}
                className='flex-shrink-0 w-56 h-56 rounded-3xl object-cover md:w-[320px] md:h-[420px] xl:w-[360px] xl:h-[480px] border border-[#F7AB0A]/30 shadow-xl shadow-[#F7AB0A]/20'
            />
        </motion.div>

        <div className='mt-4 lg:mt-24 pb-10 px-0 md:px-6 text-left w-full space-y-6'>
            <h4 className='text-lg lg:text-2xl font-semibold text-gray-100 flex flex-col gap-1'>
              <span>{about.headline}</span>
              <span className='text-[#F7AB0A]/80 text-sm uppercase tracking-[4px]'>Admin leader turned product-focused engineer</span>
            </h4>

            <div className='space-y-4 text-sm md:text-base text-gray-300/90 leading-relaxed'>
              {about.summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4'>
              {about.highlights.map((highlight) => (
                <div key={highlight.label} className='rounded-2xl border border-white/10 bg-white/5 px-5 py-6 shadow-lg shadow-black/10 backdrop-blur'>
                  <p className='text-3xl font-semibold text-[#F7AB0A]'>{highlight.value}</p>
                  <p className='text-xs uppercase tracking-[2px] text-gray-400 mt-2'>{highlight.label}</p>
                </div>
              ))}
            </div>
        </div>
    </div>
    </section>
  )
}

export default About
