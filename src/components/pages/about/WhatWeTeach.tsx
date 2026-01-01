"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const accordionData = [
  {
    title: "Character Development",
    content:
      "Building integrity, honesty, and ethical decision-making through real-world experiences.",
  },
  {
    title: "Outdoor Skills",
    content:
      "Mastering essential survival techniques, navigation, and campcraft to thrive in nature.",
  },
  {
    title: "Citizenship",
    content:
      "Fostering a sense of community, responsibility, and service to others in society.",
  },
  {
    title: "Physical Fitness",
    content:
      "Promoting a healthy lifestyle through active engagement in outdoor activities and challenges.",
  },
];

const WhatWeTeach = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FFF9F0] pt-12.5 pb-20 lg:pb-25 overflow-hidden relative">
      <div className="container-box">
        <h2 className="text-3xl md:text-4xl font-semibold text-yellow-darkest mb-16 lg:mb-25">
          What we teach
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div>
            <div className="flex flex-col gap-4">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-lg md:text-2xl font-bold text-yellow-dark">
                      {item.title}
                    </span>
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-yellow-dark"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6">
                          <div className="w-full h-px bg-[#FDDEB9] mb-4"></div>
                        </div>
                        <div className="px-6 pb-6 text-yellow-dark text-lg font-normal">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full w-full flex items-center justify-center">
            <div className="relative w-[90%] h-[80%] md:w-[80%] md:h-[80%] z-10">
              <Image
                src="/images/aboutpage/whatWeTeach/hero.webp"
                alt="Group around campfire"
                fill
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/aboutpage/whatWeTeach/background.webp"
        alt=""
        width={600}
        height={600}
        className="absolute bottom-0 w-1/2 right-0 z-0 hidden lg:block"
      />
    </section>
  );
};

export default WhatWeTeach;
