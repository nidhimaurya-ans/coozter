"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-ink/12 border-y border-ink/12">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            <span className="font-serif text-2xl text-ink">{item.question}</span>
            <motion.span animate={{ rotate: open === index ? 45 : 0 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15">
              <FiPlus size={18} />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <p className="max-w-3xl pb-6 text-base leading-7 text-ink/68">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
