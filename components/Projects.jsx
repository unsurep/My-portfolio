'use client'

import React from 'react'
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import portfolioData from '@/data/portfolioData';

const Projects = () => {
    const { projects } = portfolioData
  return (
    <div className='h-full min-h-screen relative flex overflow-hidden flex-col max-w-7xl w-full justify-evenly mx-auto items-center z-0 px-6'>
      <h3 className='absolute top-20 uppercase tracking-[16px] text-gray-500 text-base md:text-2xl'>Projects</h3>

      <div className='w-full mt-[8rem]'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
              navigation
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              className="mySwiper pb-14"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.title}>
                  <div className='rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur shadow-2xl shadow-black/30 flex flex-col gap-6 h-full'>
                    <div className='relative w-full h-48 rounded-2xl overflow-hidden'>
                      <Image src={project.thumbnail} fill alt={`${project.title} thumbnail`} className='object-cover' sizes="(max-width: 768px) 100vw, 50vw"/>
                      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'/>
                      <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between'>
                        <h4 className='text-lg font-semibold text-white'>{project.title}</h4>
                        <span className='text-xs uppercase tracking-[2px] text-white/80 bg-black/40 px-3 py-1 rounded-full'>{project.role}</span>
                      </div>
                    </div>

                    <div className='flex flex-col gap-4 text-left'>
                      <p className='text-sm text-gray-300/90 leading-relaxed'>{project.description}</p>
                      <div className='space-y-2 text-sm text-gray-300/80'>
                        <p><span className='text-[#F7AB0A] font-semibold'>Problem:</span> {project.problem}</p>
                        <p><span className='text-[#F7AB0A] font-semibold'>Solution:</span> {project.solution}</p>
                        <p><span className='text-[#F7AB0A] font-semibold'>Impact:</span> {project.impact}</p>
                      </div>
                      <div className='flex flex-wrap gap-2 pt-2'>
                        {project.tech.map((tool) => (
                          <span key={tool} className='rounded-full border border-[#F7AB0A]/40 px-3 py-1 text-xs uppercase tracking-[2px] text-gray-200'>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className='flex items-center gap-3 pt-3'>
                      <a href={project.url} target='_blank' rel='noreferrer' className='rounded-full bg-[#F7AB0A] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-black transition hover:bg-[#f9ba31]'>
                        Visit Site
                      </a>
                      <a href={project.githubUrl} target='_blank' rel='noreferrer' className='rounded-full border border-[#F7AB0A]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#F7AB0A] transition hover:bg-[#F7AB0A]/10'>
                        View Code
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
      </div>

      <div className='w-full absolute top-[40%] bg-[#F7AB0A]/10 left-0 h-[260px] -skew-y-12 pointer-events-none' />
    </div>
  )
}

export default Projects
