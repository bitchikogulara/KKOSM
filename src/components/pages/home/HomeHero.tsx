"use client";

import Image from "next/image";
import Button from "../../ui/button";
import { motion } from "motion/react";

const Hero = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, x: 50, y: -50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="min-h-screen w-full bg-yellow-light relative overflow-hidden">
      {/* Top Shape */}
      <motion.div
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-0 w-[40%] md:w-[30%] lg:w-auto z-0"
      >
        <Image
          src="/images/homepage/heroSection/hero-top-shape.webp"
          alt="Hero Shape"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
          priority
        />
      </motion.div>

      {/* Hero Image */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute pointer-events-none bottom-0 left-0 w-full sm:w-[90%] md:w-[65%] lg:w-[60%] xl:w-auto z-0"
      >
        <Image
          src="/images/homepage/heroSection/hero.webp"
          alt="Hero Person"
          width={1000}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 xl:px-0 h-full w-full relative z-10 pt-60 lg:pt-50">
        <div className="h-full w-full md:w-[80%] lg:w-[70%] xl:w-[60%] ml-auto">
          <div className="relative">
            <motion.h1
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-dark font-semibold leading-[1.1] tracking-tight"
            >
              Power your own <br />
              Adventure
            </motion.h1>

            <motion.p
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl md:text-2xl mt-4 mb-8 text-yellow-darkest max-w-lg leading-relaxed"
            >
              Exploring nature builds courage, teamwork,
              <br className="hidden sm:block" /> and unforgettable memories.
            </motion.p>

            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <Button>Join the journey</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
