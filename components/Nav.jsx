'use client'
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "motion/react"

const Nav = () => {
  return (
    <header className="flex items-start p-5 justify-between sticky top-0 max-w-7xl mx-auto z-20 xl:items-center">
      {/* social icons */}
      <motion.div 
      className="flex items-center"
      initial={{
        x:-500,
        opacity:0,
        scale:0.5}}

        animate={{
        x:0,
        opacity:1,
        scale:1
        }}
        
        transition={{
            duration:1.5,
        }}>
        
        <SocialIcon
          url="https://linkedin.com"
          fgColor="gray"
          bgColor="transparent"
          network="linkedin"
          style={{ height: 40, width: 40 }}
        />

        <SocialIcon
          url="https://github.com"
          fgColor="gray"
          bgColor="transparent"
          network="github"
          style={{ height: 40, width: 40 }}
        />

        <SocialIcon
          url="https://tiktok.com"
          fgColor="gray"
          bgColor="transparent"
          network="tiktok"
          style={{ height: 40, width: 40 }}
        />

        <SocialIcon
          url="https://twitter.com"
          fgColor="gray"
          bgColor="transparent"
          network="twitter"
          style={{ height: 40, width: 40 }}
        />

        <SocialIcon
          url="https://whatsapp.com"
          fgColor="gray"
          bgColor="transparent"
          network="whatsapp"
          style={{ height: 40, width: 40 }}
        />
      </motion.div>

      {/* email icon */}
      <motion.div 
      className="flex items-center"
      initial={{
        x:500,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5
      }}
      >
        <SocialIcon
          url="https://email.com"
          fgColor="gray"
          bgColor="transparent"
          network="email"
          style={{ height: 40, width: 40 }}
        />

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Nav;
