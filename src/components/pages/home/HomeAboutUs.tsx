"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Arrow from "@/components/icons/Arrow";

const cardData = [
  {
    id: 1,
    title: "Adventure Together",
    description:
      "Exploring nature builds courage, teamwork, and unforgettable memories.",
    image: "/images/homepage/aboutSection/image1.webp",
  },
  {
    id: 2,
    title: "Growing Leaders",
    description:
      "Scouting teaches responsibility, respect, and leadership through action.",
    image: "/images/homepage/aboutSection/image2.webp",
  },
  {
    id: 3,
    title: "Community Spirit",
    description: "Friendship and service unite us, shaping a brighter future.",
    image: "/images/homepage/aboutSection/image3.webp",
  },
];

const HomeAboutUs = () => {
  return (
    <section className="bg-white pt-16 lg:pt-25 pb-20 lg:pb-35">
      <div className="container-box">
        <p className="text-yellow-darkest text-sm md:text-base font-light lg:mb-5 mb-2">
          About Us
        </p>
        <h6 className="text-2xl md:text-4xl font-semibold text-yellow-darkest">
          Values in Action
        </h6>
        {/* Card list */}
        <div className="pt-16 lg:pt-25">
          <div className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            {cardData.map((card) => (
              <motion.div
                className="relative overflow-hidden mx-auto rounded-[30px] min-h-[435px] min-w-[85vw] sm:min-w-[45%] lg:min-w-0 shrink-0 snap-center lg:snap-align-none w-full max-w-[400px] group cursor-pointer"
                key={card.id}
                initial="initial"
                whileHover="hover"
              >
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

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

                <div className="absolute bottom-0 left-0 w-full p-8 z-10 bg-linear-to-t from-black/60 to-transparent">
                  <h6 className="text-xl md:text-2xl font-medium text-yellow-lighter mb-2">
                    {card.title}
                  </h6>
                  <p className="text-base md:text-lg font-normal text-[#FEF4E9]">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="underline mt-2 text-sm md:text-base font-light text-yellow-darkest cursor-pointer flex w-full justify-end">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
