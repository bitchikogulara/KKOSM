"use client";
import Button from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

const NewsHero = () => {
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
    <section className="w-full lg:min-h-screen relative overflow-hidden bg-[#FFF4E5]">
      <div className="container-box h-full">
        <div className="relative pt-40 pb-60 lg:pb-0 lg:pt-48 h-full flex flex-col lg:block z-10">
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-dark font-semibold leading-[1.1] tracking-tight relative z-20"
          >
            Power your own <br />
            Adventure
          </motion.h1>

          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl mt-4 mb-8 text-yellow-darkest max-w-lg leading-relaxed relative z-20"
          >
            Exploring nature builds courage, teamwork,
            <br className="hidden sm:block" /> and unforgettable memories.
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


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-40 lg:translate-x-0 z-10"
      >
        <Image
          src="/images/news&media/hero/bottom-left.webp"
          alt=""
          role="presentation"
          height={140}
          width={300}
          className="w-40 hidden lg:block lg:w-[300px] h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 z-0"
      >
        <Image
          src="/images/news&media/hero/top-left.webp"
          alt=""
          role="presentation"
          height={140}
          width={300}
          className="w-50 lg:w-[300px] h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 right-0 z-0 w-[80%] md:w-[60%] lg:w-auto"
      >
        <Image
          src="/images/news&media/hero/hero.webp"
          alt=""
          role="presentation"
          height={500}
          width={800}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
};

export default NewsHero;
