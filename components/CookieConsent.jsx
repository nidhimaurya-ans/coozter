"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "coozter-cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

function saveConsent(value) {
  localStorage.setItem(CONSENT_KEY, value);
  document.cookie = `${CONSENT_KEY}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
  window.coozterCookieConsent = value;
  window.dispatchEvent(new CustomEvent("coozter-cookie-consent", { detail: value }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    const cookie = document.cookie
      .split("; ")
      .find((item) => item.startsWith(`${CONSENT_KEY}=`));

    if (!stored && !cookie) {
      setVisible(true);
    } else {
      window.coozterCookieConsent = stored || cookie?.split("=")[1];
    }
  }, []);

  const handleChoice = (value) => {
    saveConsent(value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[1001] px-4 pb-4 sm:px-6 sm:pb-6">
      <section className="mx-auto grid max-w-2xl gap-5 rounded-[1.25rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 text-[var(--theme-text-primary)] shadow-[var(--shadow-lg)] md:grid-cols-[1fr_auto] md:items-center md:p-6">
        <div>
          <h2 className="text-xl font-bold">Cookie preferences</h2>
          <p className="mt-2 max-w-3xl text-md leading-6 text-[var(--theme-text-secondary)]">
            We use cookies to remember your preference and improve the site. Accept to allow optional data storage, or reject to keep only this choice.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row ">
          <button
            type="button"
            className="btn-secondary min-h-11 px-5 text-md font-semibold cursor-pointer"
            onClick={() => handleChoice("rejected")}
          >
            Reject
          </button>
          <button
            type="button"
            className="btn-primary min-h-11 px-5 text-md cursor-pointer font-semibold"
            onClick={() => handleChoice("accepted")}
          >
            Accept
          </button>
        </div>
      </section>
    </div>
  );
}
