import { Navigation } from "./Navigation";

const navItemClasses =
  "py-1 text-gray-900 dark:text-zinc-400 hover:text-teal-500 relative inline-block relative transition";
const navClasses =
  "flex items-center justify-center lg:justify-start gap-3 w-full";

export function FooterNavigation() {
  return <Navigation navClasses={navClasses} navItemClasses={navItemClasses} />;
}
