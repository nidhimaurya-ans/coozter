"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function MagneticButton({ href, children, variant = "dark", className = "" }) {
  const base =
    "group inline-flex items-center justify-center gap-2 px-5 py-3 text-lg font-semibold transition-all will-animate focus:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-4";
  const styles = variant === "light" ? "btn-secondary" : "btn-primary";

  const content = (
    <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={`${base} ${styles} ${className}`}>
      {children}
      <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.span>
  );

  return href ? <Link href={href}>{content}</Link> : <button type="submit">{content}</button>;
}
