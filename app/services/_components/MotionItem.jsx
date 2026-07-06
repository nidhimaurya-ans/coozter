"use client";

import { motion } from "framer-motion";

const directions = {
  up: { opacity: 0, y: 18 },
  down: { opacity: 0, y: -18 },
  left: { opacity: 0, x: 22 },
  right: { opacity: 0, x: -22 },
  scale: { opacity: 0, scale: 0.98 },
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
      transition={{ duration: 0.92, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Component>
  );
}
