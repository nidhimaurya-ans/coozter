"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function MagneticButton({ href, children, variant = "dark", className = "" }) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all will-animate focus:outline-none focus-visible:ring-2 focus-visible:ring-coral";
  const styles =
    variant === "light"
      ? "border border-[#d8e8f5] bg-white/88 text-ink shadow-[0_14px_36px_rgba(14,62,128,0.08)] hover:border-coral/45 hover:bg-white"
      : "bg-[linear-gradient(135deg,#061a2f,#1d5edb_62%,#2bbcff)] text-white shadow-[0_18px_44px_rgba(29,94,219,0.24)] anim-gradient hover:shadow-[0_22px_55px_rgba(29,94,219,0.32)]";

  const content = (
    <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={`${base} ${styles} ${className}`}>
      {children}
      <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.span>
  );

  return href ? <Link href={href}>{content}</Link> : <button type="submit">{content}</button>;
}
