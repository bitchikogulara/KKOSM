"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

const EventsHero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    }),
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  const leftImageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-full bg-yellow-light  flex flex-col xl:flex-row overflow-hidden">
        {/* Text Container */}
        <div className="relative z-30 flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 xl:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] xl:pr-12 pt-32 pb-60 xl:pb-80 w-full xl:w-1/2">
          <div className="max-w-xl md:max-w-2xl">
            <motion.h1
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="uppercase text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-yellow-dark font-semibold leading-[1.1] tracking-tight relative z-20"
            >
              Power your own <br />
              Adventure
            </motion.h1>

            <motion.p
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg md:text-xl xl:text-2xl mt-4 sm:mt-6 mb-6 sm:mb-8 text-yellow-darkest max-w-md xl:max-w-lg leading-relaxed relative z-20"
            >
              Exploring nature builds courage, teamwork, and unforgettable
              memories.
            </motion.p>

            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="relative z-20"
            >
              <Button>Join the journey</Button>
            </motion.div>
          </div>
        </div>

        {/* Right Image Container */}
        <motion.div
          variants={rightImageVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-1 "
        >
          <Image
            src="/images/events/hero/hero1.webp"
            alt="hero"
            width={800}
            height={5000}
            className="object-cover object-center absolute right-0 bottom-0 h-full w-auto"
            priority
          />
        </motion.div>

        {/* Decorative Images */}
        <motion.div
          variants={leftImageVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 left-0 z-10 pointer-events-none w-[20%] sm:w-[150px]"
        >
          <Image
            src="/images/events/hero/bottom-left.webp"
            alt="bottom-left"
            className="w-full h-auto"
            width={150}
            height={620}
            loading="eager"
            priority
          />
        </motion.div>

        <motion.div
          variants={leftImageVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-[40%] sm:top-1/2 -translate-y-1/2 left-0 z-1 pointer-events-none w-[35%] sm:w-[300px]"
        >
          <Image
            src="/images/events/hero/left-middle.webp"
            alt="left-middle"
            className="w-full h-auto hidden xl:block"
            width={300}
            height={620}
            loading="eager"
            priority
          />
        </motion.div>

        {/* Overlay for mobile/tablet - Blurs ALL background layers (z-20 > z-10, z-1) but (z-20 < z-30 text) */}
        <div className="absolute inset-0 bg-white/25 backdrop-blur-xs xl:hidden z-20" />
      </section>
    </>
  );
};

export default EventsHero;
