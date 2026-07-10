"use client";

import { FiCopy } from "react-icons/fi";

export default function CopyLinkButton({ label }) {
  async function copyLink() {
    if (typeof window === "undefined" || !navigator?.clipboard) return;
    await navigator.clipboard.writeText(window.location.href);
  }

  return (
    <button
      type="button"
      onClick={copyLink}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-ink/70 transition hover:border-[#0d5ee8] hover:text-[#0d5ee8]"
    >
      <FiCopy size={14} />
      {label}
    </button>
  );
}
