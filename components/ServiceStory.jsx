"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceStory({ services }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-moss/10 bg-white/60 shadow-[0_22px_70px_rgba(14,62,128,0.08)] backdrop-blur anim-scale-in md:rounded-[2rem]">
      {services.slice(0, 8).map((service, index) => (
        <motion.div
          key={service.slug}
          className="group grid items-center gap-4 border-b border-moss/10 px-4 py-6 last:border-b-0 md:grid-cols-[0.22fr_0.9fr_1.25fr_0.42fr] md:gap-6 md:px-7 md:py-7"
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-30%" }}
          whileHover={{ x: 8 }}
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-coral/12 font-serif text-2xl text-moss anim-pop">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="font-serif text-2xl leading-tight text-ink md:text-4xl">{service.name}</h3>
          <p className="max-w-2xl text-base leading-7 text-ink/66">{service.short}</p>
          <Link href="/services" className="self-center text-sm font-semibold text-moss underline decoration-coral underline-offset-4">
            {service.cta}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
