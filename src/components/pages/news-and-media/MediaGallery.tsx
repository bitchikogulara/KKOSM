"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/news&media/media/image${i + 1}.webp`,
  alt: `Gallery Photo ${i + 1}`,
}));

const videos = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  src: `/videos/video${i + 1}.mp4`,
  title: `Gallery Video ${i + 1}`,
}));

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  return (
    <section className="w-full bg-white py-20 lg:py-25">
      <div className="container-box">
        <div className="mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-darkest mb-8">
            Media
          </h2>

          {/* Toggle */}
          <div className="flex justify-center">
            <div className="bg-[#FFF4E5] p-1 rounded-[10px] flex items-center relative">
              <button
                onClick={() => setActiveTab("photos")}
                className={`relative px-8 py-2 rounded-[10px] text-sm md:text-base font-medium transition-colors duration-300 z-10 ${
                  activeTab === "photos"
                    ? "text-yellow-darkest"
                    : "text-yellow-darkest/60 hover:text-yellow-darkest"
                }`}
              >
                Photos
                {activeTab === "photos" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#FFD4A1] rounded-[10px] -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`relative px-8 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 z-10 ${
                  activeTab === "videos"
                    ? "text-yellow-darkest"
                    : "text-yellow-darkest/60 hover:text-yellow-darkest"
                }`}
              >
                Videos
                {activeTab === "videos" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#FFD4A1] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "photos" ? (
              <motion.div
                key="photos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative aspect-square rounded-[20px] overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="relative aspect-video rounded-[20px] overflow-hidden bg-black"
                  >
                    <video
                      src={video.src}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
