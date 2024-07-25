import { classes } from "../utils/styles";

interface CustomLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  self?: boolean;
}

export const CustomLink = ({
  children,
  href,
  className,
  self,
}: CustomLinkProps) => {
  return (
    <a
      href={href}
      target={self ? "_self" : "_blank"}
      rel="noreferrer noopener"
      className={classes(
        "inline-block transition hover:text-teal-500",
        className
      )}
    >
      {children}
    </a>
  );
};
