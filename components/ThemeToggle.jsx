"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const storageKey = "coozter-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(storageKey);
  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  useEffect(() => {
    const preferred = getPreferredTheme();
    applyTheme(preferred);
    window.requestAnimationFrame(() => setTheme(preferred));
  }, []);

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem(storageKey, next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">
          {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
        </span>
      </span>
      <span className="sr-only">{isDark ? "Dark" : "Light"} mode</span>
    </button>
  );
}
