import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { navigation } from "../../utils/navigation";
import { classes } from "../../utils/styles";

interface NavigationProps {
  navClasses: string;
  navItemClasses: string;
  pathname?: string | undefined;
}

export const Navigation: FC<NavigationProps> = ({
  navClasses,
  navItemClasses,
  pathname,
}) => {
  return (
    <>
      {pathname && pathname !== "/" && (
        <Link
          href="/"
          className="fixed z-10 w-12 h-12 inline-block top-2 rounded-full overflow-hidden"
        >
          <Image src="/me.jpg" alt="me" layout="fill" />
        </Link>
      )}
      <nav className={navClasses}>
        {navigation.map((item) => {
          if (item.soon) {
            return (
              <a className="cursor-not-allowed" key={item.href}>
                <p className={classes(navItemClasses, "pointer-events-none")}>
                  {item.name}
                  <span className="absolute -top-1 right-0 text-teal-500 text-xs">
                    soon
                  </span>
                </p>
              </a>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={classes(
                navItemClasses,
                pathname && pathname === item.href
                  ? "text-teal-500 dark:text-teal-500"
                  : ""
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};
