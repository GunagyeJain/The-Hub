import { useState, useEffect } from "react";

export const THEMES = ["light", "dark", "ocean"];

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return THEMES.includes(saved) ? saved : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme, themes: THEMES };
}
