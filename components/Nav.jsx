'use client'
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "motion/react";
import Link from "next/link";
import portfolioData from "@/data/portfolioData";

const Nav = () => {
  const {
    socialLinks,
    contactLinks,
    secondaryCta,
  } = portfolioData.header;
  const emailLink =
    contactLinks.find((link) => link.type === "Email") ?? contactLinks[0];

  return (
    <header className="flex items-start p-5 justify-between sticky top-0 max-w-7xl mx-auto z-20 xl:items-center backdrop-blur-lg bg-black/20 border-b border-white/5">
      {/* social icons */}
      <motion.div
        className="flex items-center gap-2"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
        }}
      >
        {socialLinks.map(({ type, href }) => (
          <SocialIcon
            key={type}
            url={href}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            network={type.toLowerCase()}
            style={{ height: 38, width: 38 }}
          />
        ))}
      </motion.div>

      {/* email icon */}
      <motion.div
        className="flex items-center gap-4"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
        }}
      >
        <SocialIcon
          url={emailLink.href}
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          network="email"
          style={{ height: 40, width: 40 }}
        />

        <div className="hidden md:flex flex-col items-start">
          <p className="uppercase text-xs tracking-[3px] text-gray-400">
            Get in touch
          </p>
          <span className="text-sm text-gray-300">{emailLink.label}</span>
        </div>

        <Link
          href={secondaryCta.href}
          className="rounded-full border border-[#F7AB0A]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#F7AB0A] transition hover:bg-[#F7AB0A] hover:text-black"
        >
          {secondaryCta.label}
        </Link>
      </motion.div>
    </header>
  );
};

export default Nav;
