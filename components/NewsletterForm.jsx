"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function NewsletterForm({ dark = false }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Use a valid work email.");
      return;
    }
    setError("");
    setDone(true);
    setEmail("");
  }

  return (
    <form onSubmit={submit} className="mt-5">
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <div className={`flex overflow-hidden rounded-full border ${dark ? "border-warm/18 bg-warm/8" : "border-ink/15 bg-warm"}`}>
        <input
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="work@email.com"
          className={`min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none ${dark ? "text-warm placeholder:text-warm/35" : "text-ink placeholder:text-ink/35"}`}
        />
        <button type="submit" className="grid w-12 place-items-center bg-coral text-ink" aria-label="Subscribe">
          <FiSend size={16} />
        </button>
      </div>
      <AnimatePresence>
        {(error || done) && (
          <motion.p className={`mt-2 text-sm ${error ? "text-coral" : dark ? "text-warm/70" : "text-ink/65"}`} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {error || "You are on the list."}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
