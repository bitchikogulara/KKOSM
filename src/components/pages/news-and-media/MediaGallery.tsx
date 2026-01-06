"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MediaItem {
  id: number;
  url: string;
  type: "image" | "video";
  title?: string;
}

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [photos, setPhotos] = useState<MediaItem[]>([]);
  const [videos, setVideos] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/media")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPhotos(data.filter((item: MediaItem) => item.type === "image"));
          setVideos(data.filter((item: MediaItem) => item.type === "video"));
        }
      })
      .catch((err) => console.error("Failed to load media", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="media-gallery" className="w-full bg-white py-20 lg:py-25">
      <div className="container-box">
        <div className="mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-darkest mb-8">
            Media
          </h2>

          <div className="flex justify-center">
            <div className="bg-[#FFF4E5] p-1 rounded-[10px] flex items-center relative">
              <button
                onClick={() => setActiveTab("photos")}
                className={`relative px-8 py-2 rounded-[10px] text-sm md:text-base font-medium transition-colors duration-300 z-10 ${activeTab === "photos"
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
                className={`relative px-8 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 z-10 ${activeTab === "videos"
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
          {loading ? (
            <div className="text-center text-gray-500 py-20">Loading gallery...</div>
          ) : (
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
                  {photos.length === 0 && <p className="text-gray-500 col-span-full text-center">No photos yet.</p>}
                  {photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="relative aspect-square rounded-[20px] overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={photo.url}
                        alt={photo.title || "Gallery Photo"}
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
                  {videos.length === 0 && <p className="text-gray-500 col-span-full text-center">No videos yet.</p>}
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="relative aspect-video rounded-[20px] overflow-hidden bg-black"
                    >
                      <video
                        src={video.url}
                        controls
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
