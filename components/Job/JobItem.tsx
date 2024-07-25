import Image from "next/image";

interface JobItemProps {
  company: string;
  companyLogo: string;
  position: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}

export const JobItem = ({
  company,
  companyLogo,
  position,
  dateStart,
  dateEnd,
  description,
}: JobItemProps) => {
  return (
    <li className="flex gap-5 items-start">
      <Image
        src={companyLogo}
        alt={company}
        width={56}
        height={56}
        className="hidden md:block rounded-full flex-shrink-0"
      />
      <div className="flex flex-auto flex-wrap gap-x-2 leading-6">
        <p className="w-full flex-none text-xl font-semibold  dark:text-zinc-300">
          {position}
        </p>
        <p className="w-full text-base font-medium">{company}</p>
        <div className="mb-2 w-full text-base text-gray-500">
          <time dateTime={dateStart}>{dateStart}</time>
          <span> — </span>
          <time dateTime={dateEnd}>{dateEnd}</time>
        </div>
        <p className="w-full text-xl">{description}</p>
      </div>
    </li>
  );
};
