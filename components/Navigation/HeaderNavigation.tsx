"use client";

import { usePathname } from "next/navigation";

import { Navigation } from "./Navigation";

const navItemClasses =
  "px-2 py-1 text-gray-500 dark:text-zinc-400 hover:text-teal-500 relative transition";
const navClasses =
  "flex items-center justify-center gap-3 col-span-10 col-start-2 col-end-5";

export function HeaderNavigation() {
  const pathname = usePathname();

  return (
    <Navigation
      navClasses={navClasses}
      navItemClasses={navItemClasses}
      pathname={pathname}
    />
  );
}
