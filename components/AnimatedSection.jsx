"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";

export default function AnimatedSection({ children, className = "", delay = 0, ...props }) {
  const sectionRef = useRef(null);
  const viewport = { once: true, amount: 0.38 };
  const isInView = useInView(sectionRef, viewport);

  return (
    <motion.section
      ref={sectionRef}
      {...props}
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <Fragment key={isInView ? "in-view" : "before-view"}>{children}</Fragment>
    </motion.section>
  );
}
