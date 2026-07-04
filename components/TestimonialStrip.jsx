"use client";

import { motion } from "framer-motion";

export default function TestimonialStrip({ testimonials }) {
  return (
    <div className="grid gap-8 rounded-[1.5rem] bg-white/70 p-5 shadow-[0_24px_80px_rgba(14,62,128,0.1)] ring-1 ring-moss/10 backdrop-blur anim-scale-in md:rounded-[2rem] md:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
      <div className="anim-fade-up">
        <p className="text-sm uppercase tracking-[0.12em] text-coral">Proof from the field</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">A calmer way to see marketing progress.</h2>
      </div>
      <div className="space-y-8">
        {testimonials.map((item, index) => (
          <motion.figure key={item.name} className="border-l border-coral/45 bg-white/54 py-1 pl-6 anim-slide-left" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <blockquote className="font-serif text-xl leading-snug text-ink md:text-3xl">&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center gap-3 text-sm text-ink/60">
              <span className="font-semibold text-ink">{item.name}</span>
              <span>{item.role}, {item.company}</span>
              <span className="rounded-full bg-coral/15 px-3 py-1 text-ink">{item.result}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
