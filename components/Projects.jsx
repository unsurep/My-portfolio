'use client'

import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';


const Projects = () => {
    const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>Projects</h3>

      <div className=' w-full snap-x snap-mandatory'>
      {/* Swiper Js */}
      {/* swiper mobile, tablet & laptops responsive */}
      <div className='w-full mt-[10rem]'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={true}
              // pagination={{
              // clickable: true,
              // }}
              modules={[Pagination, Navigation]}
              className="mySwiper">

              <SwiperSlide>
                <div className=''>
                  <div> <Image src='/blog.png' width={1300} height={1300} alt='image' className='overflow-hidden'/></div>
                  <div className=' text-gray-500 font-bold underline decoration-black/50'>Blog site</div>
                  <p className='text-gray-800 bg-black/30 flex flex-col gap-1 text-xs p-3'>A Simple Blog site built with Nextjs <br />
                  <span className='decoration-amber-400 underline cursor-pointer'>https://blog-porject.vercel.app/</span></p>
                </div>
                
              </SwiperSlide>

              <SwiperSlide>
                <div className=''>
                  <div><Image src='/adminlte.png' width={1300} height={1300} alt='image' className=''/></div>

                  <div className=' text-gray-500  font-bold underline decoration-black/50'>Adminlte clone</div>

                  <p className='text-gray-800 bg-cyan-600/30 flex flex-col gap-1 text-xs p-3'>Adminlte clone built with Nextjs <br />
                  <span className='decoration-amber-400 underline cursor-pointer'>https:</span></p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=''>
                  <div><Image src='/phh3.png' width={1300} height={1300} alt='image' className=''/></div>
                </div>

                <div className=' text-gray-500  font-bold underline decoration-black/50'>PH Hash House Harriers</div>

                <p className='text-gray-800 bg-red-600/30 flex flex-col gap-1 text-xs p-3'>Fitness & Beer with Nextjs <br />
                  <span className='decoration-amber-400 underline cursor-pointer'>https://ph-h3.netlify.app/</span></p>
              </SwiperSlide>

              <SwiperSlide>
                <div className=''>
                 <div> <Image src='/prompt.png' width={1300} height={1300} alt='image' className=''/></div>

                 <div className=' text-gray-500  font-bold underline decoration-black/50'>Prompt-cloud</div>

                 <p className='text-gray-800 bg-black/30 flex flex-col gap-1 text-xs p-3'>AI powered Prompt built with Nextjs <br />
                  <span className='decoration-amber-400 underline cursor-pointer'>https://promptopia-lemon-zeta.vercel.app/</span></p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=''>
                  <div><Image src='/TESLA.png' width={1300} height={1300} alt='image' className=''/></div>

                  <div className=' text-gray-500  font-bold underline decoration-black/50'>Tesla clone</div>

                  <p className='text-gray-800 bg-black/30 flex flex-col gap-1 text-xs p-3'>Tesla Clone built with Nextjs <br />
                  <span className='decoration-amber-400 underline cursor-pointer'>https://teslaklon.vercel.app/</span></p>
                </div>
              </SwiperSlide>

            

              
                    
            </Swiper>
      </div>

      {/* <div>hello</div> */}

      
        
        
        
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'>

      </div>


    </div>
  )
}

export default Projects
