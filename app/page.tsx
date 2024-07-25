import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

import { Logo } from "../components/Logo";
import { SocialMediaLink } from "../components/SocialMediaLink";
import { JobList } from "../components/Job/JobList";

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "";
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "";
const emailUrl = process.env.NEXT_PUBLIC_EMAIL_URL ?? "";

export default function Home() {
  return (
    <>
      <Logo />
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 overflow-hidden my-10 items-center">
        <section className="col-span-full lg:col-span-4">
          <h1 className="text-5xl font-extrabold leading-12 mb-2 dark:text-zinc-300">
            <p>Hello! 👋</p>
            <p className="pb-4">
              My name is <span className="text-teal-500">Vadym</span>
            </p>
          </h1>
          <p className="leading-8 text-xl mb-5">
            I&apos;m an experienced Frontend Developer from Ukraine with six
            years of experience, complemented by some backend expertise. My
            technical journey includes working with a range of technologies such
            as React, Next.js, TypeScript, Java, and Spring. I&apos;ve been
            fortunate to develop robust and scalable web applications, earning
            recognitions like Product Hunt&apos;s Product of the Week. My
            diverse work experience spans product company, outsourcing firm, and
            startup.
          </p>
          <p className="leading-8 text-xl mb-5">
            I&apos;m dedicated to continuous learning, enhancing both my soft
            and hard skills through various methods. I&apos;m also actively
            working on improving my English. Beyond the technical realm, I
            strive to grow by reading books on psychology, history, and other
            intriguing subjects.
          </p>
          <p className="leading-8 text-xl">
            Outside the world of programming, I have a passion for football,
            cycling, snowboarding, and swimming. When inspiration strikes, I
            enjoy cooking exotic dishes 😊
          </p>
        </section>
        <section className="col-span-full lg:col-span-2 lg:justify-self-end text-gray-500 dark:text-zinc-500">
          <div className="flex lg:flex-col items-start gap-4 leading-8 text-xl">
            <SocialMediaLink
              href={githubUrl}
              icon={<FaGithub className="text-4xl lg:text-3xl" />}
              name="Follow on GitHub"
            />
            <SocialMediaLink
              href={linkedinUrl}
              icon={<FaLinkedin className="text-4xl lg:text-3xl" />}
              name="Follow on LinkedIn"
              className="lg:pb-4"
            />
            <SocialMediaLink
              self
              href={`mailto:${emailUrl}`}
              icon={<FaEnvelope className="text-4xl lg:text-3xl" />}
              name="vadim.shevikov03@gmail.com"
              className="lg:border-t lg:pt-8 lg:dark:border-zinc-700"
            />
          </div>
        </section>
        <section className="col-span-full border rounded-xl py-10 px-5 md:p-10 lg:mt-20 leading-8 text-xl  dark:dark:border-zinc-700">
          <h2 className="mb-8 text-3xl font-extrabold flex items-center gap-4 dark:text-zinc-300">
            Experience
          </h2>
          <JobList />
        </section>
      </div>
    </>
  );
}
