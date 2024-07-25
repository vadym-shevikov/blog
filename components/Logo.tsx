"use client";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

const MIN_SCALE = 0.25;
const MAX_SCALE = 1;

export const Logo = () => {
  useEffect(() => {
    const updateScale = () => {
      const scrollY = window.scrollY;

      const maxScroll = window.innerWidth > 1024 ? 280 : 240;

      let scale = MAX_SCALE - (scrollY / maxScroll) * (MAX_SCALE - MIN_SCALE);
      scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale));

      const imageScale =
        document.documentElement.style.getPropertyValue("--image-scale");

      if (imageScale === scale.toString()) {
        return;
      }

      document.documentElement.style.setProperty(
        "--image-scale",
        scale.toString()
      );
    };

    updateScale();

    window.addEventListener("scroll", updateScale);

    return () => window.removeEventListener("scroll", updateScale);
  }, []);

  return (
    <Link
      href="/"
      className="sticky resize-image w-48 h-48 block rounded-full overflow-hidden opacity-0 animate-fadeIn"
    >
      <Image
        src="/me.jpg"
        alt="me"
        width={192}
        height={192}
        className="w-full h-full block absolute"
      />
    </Link>
  );
};
