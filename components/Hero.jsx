'use client'

import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

const Hero=()=>{
    const [text, count] = useTypewriter({
        words: ["Hi-The Name's Louis Umukoro",
            'Guy-who-loves-hashing.jsx',
             "<ButLovesToCodeMore/>"],
        loop: true,
        delaySpeed:2000,
      });
    return(
        <section id='hero' className="snap-start">
            <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
                <BackgroundCircles/>
                <Image 
                    src='/profile.png' 
                    width={150} 
                    height={150} 
                    alt="profile picture"
                    className="rounded-full relative mx-auto object-cover"
                />

                <div className="z-20">
                    <h2 className="text-sm uppercase text-gray-500 pb-3 tracking-[13px] md:tracking-[20px]">Web Developer</h2>
                    <h1 className="text-2xl lg:text-4xl font-semibold px-10">
                        <span className="mr-3 text-gray-300">{text}</span>
                        <Cursor cursorColor="#F7AB0A"/>
                    </h1>

                    <div className="pt-5">
                        <Link href='#about'>
                            <button className="heroButton">About</button>
                        </Link>
                        
                        <Link href='#experience'>
                            <button className="heroButton">Experience</button>
                        </Link>

                        <Link href='#skills'>
                            <button className="heroButton">Skills</button>
                        </Link>

                        <Link href='#projects'>
                            <button className="heroButton">Projects</button>
                        </Link>
                        
                    </div>
                </div>


                
                
            </div>
        </section>
    );


};

export default Hero;