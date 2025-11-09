'use client'

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import portfolioData from "@/data/portfolioData";

const Hero = () => {
  const {
    header: { name, title, tagline, availability, primaryCta, secondaryCta },
    about,
  } = portfolioData;

  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${name}`,
      tagline,
      "<BuildingPurposefulProducts />",
    ],
    loop: true,
    delaySpeed: 2200,
  });

  return (
    <section id="hero" className="snap-start">
      <div className="h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20">
        <div className="flex-1 max-w-3xl flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 rounded-full border border-[#F7AB0A]/40 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-[#F7AB0A] backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {availability.status} · {availability.location}
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-100 leading-tight">
              {title}
            </h1>
            <h2 className="text-base md:text-lg text-[#F7AB0A]/90 uppercase tracking-[6px]">
              {text} <Cursor cursorColor="#F7AB0A" />
            </h2>
            <p className="text-sm md:text-base text-gray-300/90 leading-relaxed">
              {about.summary[0]}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <Link
              href={primaryCta.href}
              className="rounded-full bg-[#F7AB0A] px-6 py-3 text-sm font-semibold uppercase tracking-[2px] text-black transition hover:bg-[#f9ba31]"
            >
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className="heroButton">
              {secondaryCta.label}
            </Link>
            <Link href="#about" className="heroButton">
              About
            </Link>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center w-full">
          <BackgroundCircles />
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#F7AB0A]/20 blur-3xl" />
            <Image
              src="/profile.png"
              width={240}
              height={240}
              alt="Portrait of Louis Umukoro"
              className="relative z-10 rounded-full border-4 border-[#F7AB0A]/40 object-cover shadow-xl shadow-[#F7AB0A]/20"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;