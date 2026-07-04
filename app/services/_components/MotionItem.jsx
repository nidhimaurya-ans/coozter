"use client";

import { motion } from "framer-motion";

const directions = {
  up: { opacity: 0, y: 28 },
  down: { opacity: 0, y: -24 },
  left: { opacity: 0, x: 34 },
  right: { opacity: 0, x: -34 },
  scale: { opacity: 0, scale: 0.96 },
};

export default function MotionItem({
  as = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...props
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      {...props}
      className={className}
      initial={directions[direction] || directions.up}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Component>
  );
}
