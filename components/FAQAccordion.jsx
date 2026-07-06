"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function FAQAccordion({ items, defaultOpenIndex = 0 }) {
  const [open, setOpen] = useState(defaultOpenIndex);

  return (
    <div className="divide-y divide-ink/12 border-y border-ink/12">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
            onClick={() => setOpen((current) => (current === index ? null : index))}
            aria-expanded={open === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-serif text-2xl text-ink">{item.question}</span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15">
              {open === index ? <FiMinus size={18} /> : <FiPlus size={18} />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="max-w-3xl pb-6 text-base leading-7 text-ink/68">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
