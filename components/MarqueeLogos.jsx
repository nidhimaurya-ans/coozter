"use client";

import { motion } from "framer-motion";
import { SiNike } from "react-icons/si";

const partners = [
  [GoogleLogo, "Google"],
  [MicrosoftLogo, "Microsoft"],
  [AmazonLogo, "Amazon"],
  [NikeLogo, "Nike"],
];

export default function MarqueeLogos({ logos = [] }) {
  const activeLogos = logos.filter((logo) => logo?.logoUrl);
  const marqueeItems =
    activeLogos.length > 0
      ? activeLogos.map((logo) => [null, logo.name, logo])
      : partners.map(([Logo, name]) => [Logo, name, null]);
  const filledItems = Array.from(
    { length: Math.max(4, Math.ceil(12 / marqueeItems.length)) },
    () => marqueeItems,
  ).flat();

  return (
    <div className="mt-8 w-full overflow-hidden bg-transparent py-7">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <LogoTrack items={filledItems} trackKey="primary" />
        <LogoTrack items={filledItems} trackKey="duplicate" ariaHidden />
      </motion.div>
    </div>
  );
}

function LogoTrack({ items, trackKey, ariaHidden = false }) {
  return (
    <div
      className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
      aria-hidden={ariaHidden}
    >
      {items.map(([Logo, name, logo], index) => (
        <span
          key={`${trackKey}-${name}-${index}`}
          className="inline-flex min-w-max shrink-0 items-center opacity-85 transition hover:-translate-y-0.5 hover:opacity-100"
          aria-label={ariaHidden ? undefined : name}
          role={ariaHidden ? undefined : "img"}
        >
          {logo ? (
            <img
              src={logo.logoUrl}
              alt={ariaHidden ? "" : logo.altText || logo.name || ""}
              className="h-10 max-w-[10rem] object-contain sm:h-12"
            />
          ) : (
            <Logo />
          )}
        </span>
      ))}
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
