"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import BrandLogo from "./BrandLogo";
import MagneticButton from "./MagneticButton";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  // ["Affiliate Branding", "/affiliate-branding"],
  // ["Digital Marketing", "/digital-marketing"],
  ["Blogs", "/blogs"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "is-scrolled py-3" : "py-4"}`}
    >
      <nav
        className="container-pad grid grid-cols-[auto_auto] items-center gap-5 xl:grid-cols-[auto_1fr_auto]"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex min-w-max items-center gap-3 text-ink anim-fade-down"
          onClick={() => setOpen(false)}
        >
          <BrandLogo />
        </Link>
        <div className="hidden min-w-0 items-center justify-center gap-7 justify-self-center xl:flex anim-fade-down anim-delay-1">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`relative whitespace-nowrap py-2 text-[1rem] font-semibold transition ${
                pathname === href ? "text-moss" : "text-ink/68 hover:text-ink"
              }`}
            >
              {label}
              <motion.span
                className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-coral"
                initial={false}
                animate={{ scaleX: pathname === href ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ originX: 0 }}
              />
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 justify-self-end xl:flex anim-fade-down anim-delay-2">
          <MagneticButton href="/contact">Plan My Growth</MagneticButton>
        </div>
        <div className="flex items-center gap-2 justify-self-end xl:hidden">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-ink"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] bg-[rgba(7,27,51,0.42)] backdrop-blur-sm xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mobile-menu-panel relative z-[1000] ml-auto flex h-[100dvh] w-full max-w-sm flex-col overflow-y-auto border-l border-[var(--theme-border)] p-6"
              style={{
                backgroundColor: "var(--theme-navbar-solid)",
                color: "var(--theme-text-primary)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <BrandLogo dark />
                </span>
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--theme-border)] text-[var(--theme-text-primary)]"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="mt-12 flex flex-col gap-2">
                {nav.map(([label, href], index) => (
                  <motion.div
                    key={href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-[var(--theme-border)] py-4 font-serif text-3xl text-[var(--theme-text-primary)]"
                      style={{ color: "var(--theme-text-primary)" }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <p className="mt-auto text-sm leading-6 text-[var(--theme-text-secondary)]">
                Strategy, partnerships, and performance campaigns for companies
                ready to make marketing easier to trust.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
