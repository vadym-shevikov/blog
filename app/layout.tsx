import type { Metadata } from "next";
import { cookies } from "next/headers";

import "./globals.css";

import { ThemeToggleButton } from "../components/ThemeToggleButton";
import { ThemeProvider } from "../context/themeContext";
import { THEMES } from "../context/themes";
import { HeaderNavigation } from "../components/Navigation/HeaderNavigation";
import { FooterNavigation } from "../components/Navigation/FooterNavigation";

export const metadata: Metadata = {
  title: "Vadym Shevikov",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value;
  const initialTheme = theme ?? THEMES[0];

  return (
    <html lang="en" suppressHydrationWarning data-theme={initialTheme}>
      <body className="flex flex-col min-h-screen text-gray-700 dark:text-zinc-400 dark:bg-zinc-900">
        <ThemeProvider initialTheme={initialTheme}>
          <header className="sticky h-18 top-0 border-b border-gray-200 py-4 bg-gray-100 bg-opacity-80 backdrop-blur-md font-medium z-10 dark:bg-zinc-800/50 dark:text-zinc-200 dark:border-zinc-700">
            <div className="px-5 max-w-6xl mx-auto grid grid-cols-5 items-center justify-center gap-5">
              <HeaderNavigation />
              <ThemeToggleButton />
            </div>
          </header>
          <main className="px-5 max-w-6xl mx-auto my-10 lg:my-20 flex-grow">
            {children}
          </main>
          <footer className="py-10 font-medium  border-t dark:border-zinc-700 ">
            <div className="px-5 max-w-6xl mx-auto flex flex-col gap-5 lg:flex-row lg:justify-between overflow-hidden">
              <FooterNavigation />
              <p className="flex items-center mx-auto lg:mx-0 text-center flex-shrink-0 text-gray-500 dark:text-zinc-500">
                © 2024 Vadym Shevikov
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
