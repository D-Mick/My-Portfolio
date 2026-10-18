"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const themeColors: Record<Theme, string> = {
  light: "#f3efe6",
  dark: "#141210",
};

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function paintTheme(theme: Theme, persist: boolean) {
  document.documentElement.dataset.theme = theme;
  if (persist) localStorage.setItem("theme", theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColors[theme]);
  window.dispatchEvent(new Event("themechange"));
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = initial;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColors[initial]);
    setTheme(initial);

    const onTheme = () => setTheme(currentTheme());
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystem = () => {
      if (localStorage.getItem("theme")) return;
      paintTheme(media.matches ? "dark" : "light", false);
    };

    window.addEventListener("themechange", onTheme);
    media.addEventListener("change", onSystem);
    return () => {
      window.removeEventListener("themechange", onTheme);
      media.removeEventListener("change", onSystem);
    };
  }, []);

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={`inline-flex border border-line ${className}`}
    >
      {(["light", "dark"] as const).map((value) => (
        <button
          key={value}
          type="button"
          data-theme-value={value}
          aria-pressed={theme === value}
          onClick={() => paintTheme(value, true)}
          className="theme-option px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.14em] uppercase"
        >
          {value}
        </button>
      ))}
    </div>
  );
}
