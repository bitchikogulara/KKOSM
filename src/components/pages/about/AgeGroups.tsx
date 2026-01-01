"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Arrow from "@/components/icons/Arrow";

const ageGroupsData = [
  {
    id: 1,
    image: "/images/aboutpage/ages/image1.webp",
  },
  {
    id: 2,
    image: "/images/aboutpage/ages/image2.webp",
  },
  {
    id: 3,
    image: "/images/aboutpage/ages/image3.webp",
  },
  {
    id: 4,
    image: "/images/aboutpage/ages/image4.webp",
  },
];

const AgeGroups = () => {
  return (
    <section className="w-full bg-white pb-20 lg:pb-38">
      <div className="container-box">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-darkest">
            Age groups
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroupsData.map((item) => (
            <motion.div
              key={item.id}
              className="relative w-full max-w-[400px] mx-auto aspect-3/4 rounded-[30px] overflow-hidden cursor-pointer group"
              initial="initial"
              whileHover="hover"
            >
              {/* Image with Scale Effect */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Image
                  src={item.image}
                  alt="Age group"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Arrow Icon Animation */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroups;
