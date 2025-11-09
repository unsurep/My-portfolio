import React from "react";
import Link from "next/link";
import portfolioData from "@/data/portfolioData";

const CallToAction = () => {
  const { callToAction, testimonials } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 flex flex-col gap-12">
      {testimonials?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-black/30"
            >
              <p className="text-sm text-gray-300/90 leading-relaxed">
                “{testimonial.quote}”
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[3px] text-[#F7AB0A]">
                {testimonial.name} · {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </div>
      ) : null}

      <div className="rounded-3xl border border-[#F7AB0A]/40 bg-gradient-to-r from-[#F7AB0A]/20 via-transparent to-[#F7AB0A]/5 px-8 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">
            {callToAction.message}
          </h3>
          <p className="text-sm md:text-base text-gray-200/90 max-w-xl leading-relaxed">
            {callToAction.subtext}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={callToAction.primary.href}
            target="_blank"
            className="rounded-full bg-[#F7AB0A] px-6 py-3 text-xs font-semibold uppercase tracking-[2px] text-black transition hover:bg-[#f9ba31]"
          >
            {callToAction.primary.label}
          </Link>
          <Link
            href={callToAction.secondary.href}
            className="rounded-full border border-[#F7AB0A]/40 px-6 py-3 text-xs font-semibold uppercase tracking-[2px] text-[#F7AB0A] transition hover:bg-[#F7AB0A]/10"
          >
            {callToAction.secondary.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

