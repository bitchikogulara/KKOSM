"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Arrow from "@/components/icons/Arrow";

const newsData = [
  {
    id: 1,
    title: "Scouts Clean Local Park",
    description:
      "Our team gathered to restore nature and keep our community green.",
    image: "/images/homepage/news&media/image1.webp",
    large: true,
  },
  {
    id: 2,
    title: "Summer Camp 2025 Opens",
    description:
      "Registrations are now live — join us for adventure and friendship.",
    image: "/images/homepage/news&media/image2.webp",
    large: false,
  },
  {
    id: 3,
    title: "Leadership Workshop Held",
    description:
      "Young scouts learned skills in teamwork, responsibility, and service.",
    image: "/images/homepage/news&media/image3.webp",
    large: false,
  },
];

const NewsCard = ({
  data,
  className,
}: {
  data: (typeof newsData)[0];
  className?: string;
}) => {
  return (
    <motion.div
      className={`relative shadow-md border overflow-hidden rounded-[30px] flex flex-col ${
        data.id === 1
          ? "bg-[#F3F4F6]/80 border-[#CCCED3]"
          : data.id === 2
          ? "bg-[#FFF4E5]/60 border-[#E5D5BF]"
          : "bg-[#E8F8F0] border-[#B1D8C5]"
      }  group cursor-pointer ${className}`}
      initial="initial"
      whileHover="hover"
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden w-full shrink-0 ${
          data.large ? "h-[65%] md:h-[75%]" : "h-[60%] md:h-[50%]"
        }`}
      >
        <motion.div
          className="w-full h-full"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Arrow Icon */}
        <div className="absolute top-5 right-5 w-10 h-10 bg-dark-slate-cyan rounded-full flex items-center justify-center z-20 overflow-hidden">
          <div className="relative flex items-center justify-center w-full h-full">
            <motion.div
              className="flex items-center justify-center"
              variants={{
                initial: { y: 0, opacity: 1 },
                hover: {
                  y: -34,
                  x: 30,
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeInOut" },
                },
              }}
            >
              <Arrow />
            </motion.div>

            <motion.div
              className="absolute top-[44px] left-[-19px] flex items-center justify-center"
              variants={{
                initial: { opacity: 0, y: 12, x: -31 },
                hover: {
                  opacity: 1,
                  y: -40,
                  x: 20,
                  transition: {
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                },
              }}
            >
              <Arrow />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="px-4 py-4 pb-5 flex flex-col justify-center flex-1">
        <h6 className="text-xl md:text-2xl font-medium text-yellow-darkest-active mb-3">
          {data.title}
        </h6>
        <p className="text-base md:text-lg max-w-[406px] font-normal text-yellow-darkest">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
};

const NewsAndMedia = () => {
  return (
    <section className="bg-white w-full h-full pb-20 lg:pb-35">
      <div className="container-box">
        <p className="text-yellow-darkest text-sm md:text-base font-light lg:mb-5 mb-2">
          News & Media
        </p>
        <h6 className="text-2xl md:text-4xl font-semibold text-yellow-darkest mb-10 md:mb-16">
          Stories That Inspire
        </h6>

        <div className="grid grid-cols-1 md:max-w-2xl md:mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-8 h-auto">
          {/* Large Card (Left) */}
          <NewsCard data={newsData[0]} className="h-full min-h-[400px]" />

          {/* Small Cards (Right) */}
          <div className="flex flex-col gap-8 h-full">
            <NewsCard data={newsData[1]} className="flex-1 min-h-[280px]" />
            <NewsCard data={newsData[2]} className="flex-1 min-h-[280px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndMedia;
