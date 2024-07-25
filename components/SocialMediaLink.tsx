import { CustomLink } from "./CustomLink";

interface SocialMediaLinkProps {
  href: string;
  icon: React.ReactNode;
  name: string;
  className?: string;
  self?: boolean;
}

export const SocialMediaLink = ({
  href,
  icon,
  name,
  className,
  self,
}: SocialMediaLinkProps) => {
  return (
    <CustomLink
      self={self}
      href={href}
      className={`leading-8 text-xl flex items-center p-3 lg:p-0 gap-4 ${className}`}
    >
      {icon}
      <span className="hidden lg:block">{name}</span>
    </CustomLink>
  );
};
