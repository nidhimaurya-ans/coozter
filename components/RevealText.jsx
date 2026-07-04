"use client";

import { motion } from "framer-motion";

export default function RevealText({ as: Tag = "h1", text, className = "" }) {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pr-[0.18em]"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
