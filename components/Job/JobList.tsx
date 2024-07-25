import { FaDownload } from "react-icons/fa6";

import { JobItem } from "./JobItem";

const cvUrl = process.env.NEXT_PUBLIC_CV_URL ?? "";

const jobs: Parameters<typeof JobItem>[0][] = [
  {
    company: "Evoplay",
    companyLogo: "/job/evo.jpeg",
    position: "Frontend Developer",
    dateStart: "2024",
    dateEnd: "present",
    description:
      "Development and implementation of projects for a billing platform for electronic payments with high throughput, using modern technologies and approaches.",
  },
  {
    company: "NDA",
    companyLogo: "/job/nda.jpg",
    position: "Full Stack Java Engineer",
    dateStart: "2023",
    dateEnd: "2024",
    description:
      "Developed a Java-based architecture with Spring, implemented static templates to achieve a 99% score on Google's Web Vitals for mobile devices, and maintained robust backend services integrating complex business logic for high-performance data handling.",
  },
  {
    company: "NDA",
    companyLogo: "/job/nda.jpg",
    position: "Frontend Developer",
    dateStart: "2021",
    dateEnd: "2023",
    description:
      "Developed frontend for platform dedicated to e-sports statistics using Next.js, GraphQL, Typescript, React Query, crafting robust and scalable web application.",
  },
  {
    company: "GoIT LMS",
    companyLogo: "/job/goit.jpeg",
    position: "Frontend Developer",
    dateStart: "2021",
    dateEnd: "2024",
    description:
      "Developed a user interface for an educational platform with Next.js, Styled Components, TypeScript, and React, ensuring responsive design across devices and implementing features for both mobile and web platforms.",
  },
  {
    company: "Aoza Technologies",
    companyLogo: "/job/aoza.jpeg",
    position: "Frontend Developer",
    dateStart: "2018",
    dateEnd: "2021",
    description:
      "Developed user-friendly web applications using HTML, CSS, and JavaScript, including static sites, SPAs, PWAs, SSR applications, and a real-time web application with the WebSocket API.",
  },
];
const downloadClassNames =
  "inline-flex items-center gap-4 justify-center rounded-md p-5 text-xl leading-8 transition font-medium bg-gray-50 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 hover:bg-gray-100 hover:text-teal-500 active:bg-gray-100 dark:active:bg-zinc-800/50 active:text-teal-500 mt-12 w-full";

export const JobList = () => {
  return (
    <>
      <ul className="space-y-8">
        {jobs.map((job) => (
          <JobItem key={job.company + job.position} {...job} />
        ))}
      </ul>
      <a href={cvUrl} download={cvUrl} className={downloadClassNames}>
        Download CV
        <FaDownload className="text-lg" />
      </a>
    </>
  );
};
