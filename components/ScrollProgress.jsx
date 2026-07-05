"use client";

import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    scrollTop();
    requestAnimationFrame(scrollTop);
  }, [pathname]);

  useEffect(() => {
    const handlePageShow = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return <motion.div className="fixed left-0 top-0 z-[80] h-1 origin-left bg-coral" style={{ scaleX: scrollYProgress }} />;
}
