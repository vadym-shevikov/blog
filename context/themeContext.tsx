"use client";

import { createContext, useState } from "react";
import { setCookie } from "cookies-next";

import { THEMES, Theme } from "./themes";

export const sanitizeTheme = (theme: Theme | undefined) => {
  return theme && THEMES.includes(theme) ? theme : THEMES[0];
};

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: THEMES[0],
  setTheme: () => {},
});

export const ThemeProvider = ({
  initialTheme,
  children,
}: {
  initialTheme: string;
  children: React.ReactNode;
}) => {
  const [theme, setThemeState] = useState(initialTheme);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setCookie("theme", newTheme, { path: "/", maxAge: 7 * 24 * 60 * 60 });
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // @ts-ignore
  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeContext;
