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
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className=' w-full snap-x snap-mandatory'>
      {/* Swiper Js */}
      {/* swiper mobile, tablet & laptops responsive */}
      <div className='w-full'>
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
                  <div className=' text-gray-500  font-bold underline decoration-black/50'>Blog site</div>
                  <p className='text-gray-500 text-xs p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, at earum. Temporibus facilis placeat ducimus! Ab possimus reiciendis eveniet saepe? Odio, ratione itaque excepturi cum vel rem dolores illum, cupiditate iusto qui doloremque ab pariatur. Consectetur fugiat illo dolorum accusamus recusandae itaque voluptas pariatur aspernatur distinctio. Itaque at saepe perspiciatis.</p>
                </div>
                
              </SwiperSlide>

              <SwiperSlide>
                <div className=''>
                  <div><Image src='/adminlte.png' width={1300} height={1300} alt='image' className=''/></div>

                  <div className=' text-gray-500  font-bold underline decoration-black/50'>Adminlte clone</div>

                  <p className='text-gray-500 text-xs p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, at earum. Temporibus facilis placeat ducimus! Ab possimus reiciendis eveniet saepe? Odio, ratione itaque excepturi cum vel rem dolores illum, cupiditate iusto qui doloremque ab pariatur. Consectetur fugiat illo dolorum accusamus recusandae itaque voluptas pariatur aspernatur distinctio. Itaque at saepe perspiciatis.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=''>
                  <div><Image src='/phh3.png' width={1300} height={1300} alt='image' className=''/></div>
                </div>

                <div className=' text-gray-500  font-bold underline decoration-black/50'>PH Hash House Harriers</div>

                <p className='text-gray-500 text-xs p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, at earum. Temporibus facilis placeat ducimus! Ab possimus reiciendis eveniet saepe? Odio, ratione itaque excepturi cum vel rem dolores illum, cupiditate iusto qui doloremque ab pariatur. Consectetur fugiat illo dolorum accusamus recusandae itaque voluptas pariatur aspernatur distinctio. Itaque at saepe perspiciatis.</p>
              </SwiperSlide>

              <SwiperSlide>
                <div className=''>
                 <div> <Image src='/prompt.png' width={1300} height={1300} alt='image' className=''/></div>

                 <div className=' text-gray-500  font-bold underline decoration-black/50'>Prompt-cloud</div>

                 <p className='text-gray-500 text-xs p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, at earum. Temporibus facilis placeat ducimus! Ab possimus reiciendis eveniet saepe? Odio, ratione itaque excepturi cum vel rem dolores illum, cupiditate iusto qui doloremque ab pariatur. Consectetur fugiat illo dolorum accusamus recusandae itaque voluptas pariatur aspernatur distinctio. Itaque at saepe perspiciatis.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=''>
                  <div><Image src='/TESLA.png' width={1300} height={1300} alt='image' className=''/></div>

                  <div className=' text-gray-500  font-bold underline decoration-black/50'>Tesla clone</div>

                  <p className='text-gray-500 text-xs p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, at earum. Temporibus facilis placeat ducimus! Ab possimus reiciendis eveniet saepe? Odio, ratione itaque excepturi cum vel rem dolores illum, cupiditate iusto qui doloremque ab pariatur. Consectetur fugiat illo dolorum accusamus recusandae itaque voluptas pariatur aspernatur distinctio. Itaque at saepe perspiciatis.</p>
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
