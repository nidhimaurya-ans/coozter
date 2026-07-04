"use client";

import { motion } from "framer-motion";
import { SiNike } from "react-icons/si";

const partners = [
  [GoogleLogo, "Google"],
  [MicrosoftLogo, "Microsoft"],
  [AmazonLogo, "Amazon"],
  [NikeLogo, "Nike"],
];

export default function MarqueeLogos() {
  return (
    <div className="mt-8 overflow-hidden bg-transparent py-7">
      <motion.div
        className="flex min-w-max items-center gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {[...partners, ...partners, ...partners, ...partners].map(
          ([Logo, name], index) => (
            <span
              key={`${name}-${index}`}
              className="inline-flex min-w-max items-center opacity-85 transition hover:-translate-y-0.5 hover:opacity-100"
              aria-label={name}
              role="img"
            >
              <Logo />
            </span>
          ),
        )}
      </motion.div>
    </div>
  );
}

function GoogleLogo() {
  return (
    <span className="inline-flex items-center text-[2rem] font-semibold leading-none tracking-[-0.055em] sm:text-[2.35rem]">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

function MicrosoftLogo() {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid h-8 w-8 grid-cols-2 gap-1">
        <span className="bg-[#F25022]" />
        <span className="bg-[#7FBA00]" />
        <span className="bg-[#00A4EF]" />
        <span className="bg-[#FFB900]" />
      </span>
      <span className="text-[2rem] font-semibold leading-none tracking-[-0.035em] text-[#5E5E5E] sm:text-[2.3rem]">
        Microsoft
      </span>
    </span>
  );
}

function AmazonLogo() {
  return (
    <span className="relative inline-flex pb-3 text-[2.1rem] font-bold leading-none tracking-[-0.06em] text-[#111111] sm:text-[2.45rem]">
      amazon
      <svg
        className="absolute bottom-0 left-[2.55rem] h-4 w-24 sm:left-[2.95rem] sm:w-28"
        viewBox="0 0 120 20"
        aria-hidden="true"
      >
        <path
          d="M5 7c25 12 61 12 98-1"
          fill="none"
          stroke="#FF9900"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path d="M96 1l18 2-13 12z" fill="#FF9900" />
      </svg>
    </span>
  );
}

function NikeLogo() {
  return (
    <span className="inline-flex items-center gap-3 text-[#111111]">
      <SiNike size={76} />
      <span className="text-[2rem] font-black uppercase italic leading-none tracking-[-0.055em] sm:text-[2.35rem]">
        Nike
      </span>
    </span>
  );
}
