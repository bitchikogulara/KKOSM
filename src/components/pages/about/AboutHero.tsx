"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

const AboutHero = () => {
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
    <section className="w-full h-full bg-[#FFF4E5] relative overflow-hidden">
      <motion.div
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-0 w-[40%] md:w-[30%] lg:w-auto z-0"
      >
        <Image
          src="/images/aboutpage/herosection/top-right.webp"
          alt=""
          role="presentation"
          height={350}
          width={350}
          className="w-full h-auto"
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row pb-50 lg:pb-0 lg:h-[100dvh] h-full">
        <motion.div
          className="absolute inset-0 z-0 h-full w-full lg:relative lg:flex-1 lg:h-auto lg:order-1"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/aboutpage/herosection/hero.webp"
            alt="hero image"
            height={1500}
            width={1500}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/15 backdrop-blur-xs lg:hidden" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-10 right-4 lg:top-20 lg:right-8 w-24 lg:w-[150px]"
          >
            <Image
              src="/images/aboutpage/herosection/top-left.webp"
              alt=""
              role="presentation"
              height={150}
              width={150}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        <div className="relative z-10 flex-1 flex flex-col lg:justify-center px-6 md:px-12 lg:px-0 lg:order-2">
          <div className="relative pt-40 lg:pt-50 h-full flex flex-col lg:block">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-0 lg:bottom-0 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0 w-48 lg:w-[300px] hidden lg:block"
            >
              <Image
                src="/images/aboutpage/herosection/bottom-right.webp"
                alt=""
                role="presentation"
                height={140}
                width={300}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
