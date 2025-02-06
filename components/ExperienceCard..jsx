import React from "react";
import Image from "next/image";
import {motion} from 'motion/react'
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[400px] snap-center bg-[#292929] p-6 mt-28 md:mt-[14rem] lg:mt-[25rem]  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      
      <motion.img
        initial={{
          y: -100,
          opacity:0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once:true}}
        className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="/profile.png" 
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-sm md:text-base font-light">FRONT-END DEVELOPER</h4>
        <p className="font-bold text-sm md:text-base mt-1">INTERN HNG</p>

        <div className="flex space-x-2 my-2">
          {/* <Image src='/itailwindcss.png' width={20} height={20} alt="pic-img" className="rounded-full "/>
          <Image src='/ireact.png' width={20} height={20} alt="pic-img" className="rounded-full "/>
          <Image src='/ivscode.png' width={20} height={20} alt="pic-img" className="rounded-full "/>
          <Image src='/ivscode.png' width={30} height={30} alt="pic-img" className="rounded-full "/>
          <Image src='/ivscode.png' width={30} height={30} alt="pic-img" className="rounded-full "/> */}
          <p><IoLogoHtml5 /></p>
          <p><IoLogoCss3 /></p>
          <p><FaJsSquare /></p>
          <p><FaReact /></p>
          <p><RiNextjsFill /></p>
          <p><SiMongodb /></p>

        </div>

        <p className="uppercase text-sm py-2 text-gray-300 ">Started: January 29th 2025</p>

        <ul className="list-disc space-y-1 ml-4 text-sm">
          <li>Built and deployed multiple projects </li>
          <li>Implemented user authentication</li>
          <li> Designed and developed user interface</li>
          {/* <li>Summary points Summary points Summary points </li> */}
          
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
