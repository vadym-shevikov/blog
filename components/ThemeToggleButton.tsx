"use client";

import { use } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

import ThemeContext, { Theme } from "../context/themeContext";
import { THEMES } from "../context/themes";

const Icons: Record<Theme, React.ReactNode> = {
  light: <MdOutlineLightMode />,
  dark: <MdOutlineNightlight />,
};

const classNames =
  "group rounded-full bg-white/90 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:ring-white/10 dark:hover:ring-white/20 dark:bg-zinc-600/90";

export const ThemeToggleButton = () => {
  const { theme: selectedTheme = THEMES[0], setTheme } = use(ThemeContext);

  const handleThemeChange = () => {
    const nextTheme =
      THEMES[THEMES.findIndex((t) => t === selectedTheme) + 1] ?? THEMES[0];
    setTheme(nextTheme);
  };

  return (
    <div className="flex space-x-2 col-start-5 ml-auto">
      <button type="button" onClick={handleThemeChange} className={classNames}>
        {Icons[selectedTheme]}
      </button>
    </div>
  );
};
