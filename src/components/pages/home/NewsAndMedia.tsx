"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Arrow from "@/components/icons/Arrow";



const NewsCard = ({
  data,
  className,
  variant = "small",
  index = 0,
}: {
  data: { id: number; title: string; description: string; image: string; large?: boolean };
  className?: string;
  variant?: "large" | "small";
  index?: number;
}) => {
  const isLarge = variant === "large";

  return (
    <motion.div
      className={`relative shadow-md border overflow-hidden rounded-[30px] flex flex-col ${index === 0
        ? "bg-[#F3F4F6]/80 border-[#CCCED3]"
        : index === 1
          ? "bg-[#FFF4E5]/60 border-[#E5D5BF]"
          : "bg-[#E8F8F0] border-[#B1D8C5]"
        }  group cursor-pointer ${className}`}
      initial="initial"
      whileHover="hover"
    >
      <div
        className={`relative overflow-hidden w-full shrink-0 ${isLarge ? "h-[500px]" : "h-[160px]"
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

      <div className={`px-4 py-4 pb-5 flex flex-col justify-center ${isLarge ? "h-[170px]" : "h-[160px]"}`}>
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
  const [newsData, setNewsData] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("/api/news")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Map DB fields to component fields if necessary or ensure API returns correct shape
          // Our API returns title, description, image, large (boolean).
          // Component expects id, title, description, image, large.
          setNewsData(data);
        }
      })
      .catch(err => console.error(err));
  }, []);

  if (newsData.length === 0) return null; // or loading

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
          {newsData[0] && <NewsCard data={newsData[0]} variant="large" className="h-full" index={0} />}

          <div className="flex flex-col gap-8 h-full">
            {newsData[1] && <NewsCard data={newsData[1]} variant="small" className="flex-1" index={1} />}
            {newsData[2] && <NewsCard data={newsData[2]} variant="small" className="flex-1" index={2} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndMedia;
