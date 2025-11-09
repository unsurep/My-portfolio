import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const ExperienceCard = ({ experience }) => {
  const {
    title,
    company,
    location,
    startDate,
    endDate,
    summary,
    achievements,
    tech,
    logo,
  } = experience;

  return (
    <article className="flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg items-start space-y-5 flex-shrink-0 w-[300px] md:w-[420px] snap-center py-10 px-8 hover:border-[#F7AB0A]/60 transition duration-200 overflow-hidden shadow-lg shadow-black/20">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <div className="relative h-16 w-16 rounded-2xl border border-[#F7AB0A]/30 bg-black/60 overflow-hidden">
          <Image
            src={logo}
            alt={`${company} logo`}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div>
          <h4 className="text-sm md:text-base font-semibold text-gray-100 uppercase tracking-[3px]">
            {title}
          </h4>
          <p className="text-sm text-gray-400">
            {company} · {location}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-[2px]">
            {startDate} — {endDate}
          </p>
        </div>
      </motion.div>

      <p className="text-sm text-gray-300/90 leading-relaxed">{summary}</p>

      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300/90">
        {achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2">
        {tech.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-black/50 border border-white/10 px-3 py-1 text-xs uppercase tracking-[2px] text-gray-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ExperienceCard;

