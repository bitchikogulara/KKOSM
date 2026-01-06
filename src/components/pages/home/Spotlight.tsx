"use client";
import Button from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import Link from "next/link";
const Spotlight = () => {
  const [images, setImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch("/api/media?type=image&limit=6")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // data is array of MediaItem {id, url, ...}
          const urls = data.map((item: any) => item.url);
          if (urls.length > 0) setImages(urls);
        }
      })
      .catch(err => console.error(err));
  }, []);

  // Use defaults if nothing from API yet (to prevent empty section)
  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <section className="w-full bg-yellow-lighter pt-6 md:pt-8 pb-12 md:pb-17.5 overflow-hidden">
      <div className="container-box">
        <div className="flex items-center justify-between w-full mb-8 md:mb-12 lg:mb-25">
          <h6 className="text-2xl md:text-4xl font-semibold text-yellow-darkest">
            Into the Spotlight
          </h6>
          <Link href="/news-and-media#media-gallery">
            <Button variant="outline">Explore more</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:hidden max-w-[420px] mx-auto">
          {displayImages.map((src, index) => (
            <SpotlightImage
              key={index}
              src={src}
              index={index}
              className={
                [0, 2, 4].includes(index)
                  ? "h-[248px] rounded-[30px]"
                  : "h-[376px] rounded-[30px]"
              }
            />
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          <div className="flex flex-col gap-6">
            {displayImages[0] && <SpotlightImage
              src={displayImages[0]}
              index={0}
              className="h-[248px] rounded-[30px]"
            />}
            {displayImages[3] && <SpotlightImage
              src={displayImages[3]}
              index={3}
              className="h-[376px] rounded-[30px]"
            />}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {displayImages[1] && <SpotlightImage
              src={displayImages[1]}
              index={1}
              className="h-[376px] rounded-[30px]"
            />}
            {displayImages[4] && <SpotlightImage
              src={displayImages[4]}
              index={4}
              className="h-[248px] rounded-[30px]"
            />}
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {displayImages[2] && <SpotlightImage
              src={displayImages[2]}
              index={2}
              className="h-[248px] rounded-[30px]"
            />}
            {displayImages[5] && <SpotlightImage
              src={displayImages[5]}
              index={5}
              className="h-[376px] rounded-[30px]"
            />}
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultImages = [
  "/images/homepage/spotlightSection/image1.webp",
  "/images/homepage/spotlightSection/image2.webp",
  "/images/homepage/spotlightSection/image3.webp",
  "/images/homepage/spotlightSection/image4.webp",
  "/images/homepage/spotlightSection/image5.webp",
  "/images/homepage/spotlightSection/image6.webp",
];

const SpotlightImage = ({
  src,
  index,
  className,
}: {
  src: string;
  index: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative w-full overflow-hidden rounded-2xl ${className}`}
    >
      <Image
        src={src}
        alt={`Spotlight image ${index + 1}`}
        fill
        className="object-cover hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </motion.div>
  );
};

export default Spotlight;
