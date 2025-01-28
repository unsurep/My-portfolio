import React from "react";
import Image from "next/image";
import {motion} from 'motion/react'

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[400px] snap-center bg-[#292929] p-6 mt-28 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      
      <motion.img
        initial={{
          y: -100,
          opacity:0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once:true}}
        className="w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/profile.png" 
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">CEO PAPAFAM</h4>
        <p className="font-bold text-lg mt-1">PAPAFAM</p>

        <div className="flex space-x-2 my-2">
          <Image src='/itailwindcss.png' width={30} height={30} alt="pic-img" className="rounded-full "/>
          <Image src='/ireact.png' width={30} height={30} alt="pic-img" className="rounded-full "/>
          <Image src='/ivscode.png' width={30} height={30} alt="pic-img" className="rounded-full "/>
          <Image src='/ivscode.png' width={30} height={30} alt="pic-img" className="rounded-full "/>
          <Image src='/ivscode.png' width={30} height={30} alt="pic-img" className="rounded-full "/>
        </div>

        <p className="uppercase text-sm py-2 text-gray-300 ">Started work..... - Ended...</p>

        <ul className="list-disc space-y-2 ml-4 text-sm">
          <li>Summary points Summary points Summary points </li>
          <li>Summary points Summary points Summary points </li>
          <li>Summary points Summary points Summary points </li>
          <li>Summary points Summary points Summary points </li>
          
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
