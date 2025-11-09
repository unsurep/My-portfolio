'use client';
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Skill = ({ skill, directionLeft = false }) => {
  const { icon, name, proficiency } = skill;

  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 0.9 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-white/10 bg-black/40 p-4"
      >
        <Image
          src={icon}
          width={96}
          height={96}
          alt={`${name} icon`}
          className="h-16 w-16 xl:h-20 xl:w-20 object-contain"
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-2xl border border-[#F7AB0A]/50 bg-[#F7AB0A]/95 text-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <p className="text-xl font-bold">{proficiency}%</p>
        <span className="text-xs uppercase tracking-[2px]">{name}</span>
      </div>
    </div>
  );
};

export default Skill;