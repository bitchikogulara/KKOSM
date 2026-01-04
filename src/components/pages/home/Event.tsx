"use client";
import Button from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Search from "@/components/icons/Search";
import PersonGroup from "@/components/icons/PersonGroup";
import DollerBag from "@/components/icons/DollerBag";

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="w-full bg-white py-20 md:py-35">
      <div className="container-box">
        <p className="text-yellow-darkest text-sm md:text-base font-light lg:mb-5 mb-2">
          About Us
        </p>
        <h6 className="text-2xl md:text-4xl font-semibold text-yellow-darkest mb-8 md:mb-12">
          Values in Action
        </h6>

        <div className="relative w-full">
          <div className="bg-[#FEF4E9] rounded-[30px] p-6 md:p-10 lg:py-15.5 lg:px-12.5 overflow-hidden min-h-[500px] md:min-h-[400px] flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full"
              >
                <div className="lg:w-[65%] w-full space-y-6.5">
                  <div className="flex items-center gap-5 flex-wrap">
                    <Button variant="outline">
                      {events[currentIndex].tag}
                    </Button>
                    <span className="text-yellow-darkest font-medium">
                      {events[currentIndex].date}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl mb-4 font-medium text-yellow-darkest">
                      {events[currentIndex].title}
                    </h3>

                    <p className="text-yellow-darkest text-lg md:text-xl font-normal  max-w-[690px]">
                      {events[currentIndex].description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-6 text-yellow-darkest/90 text-sm md:text-base font-medium">
                    <div className="flex items-center gap-2">
                      <Search />
                      {events[currentIndex].location}
                    </div>
                    <div className="flex items-center gap-2">
                      <PersonGroup />
                      {events[currentIndex].age}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollerBag />
                      {events[currentIndex].price}
                    </div>
                  </div>

                  <Button>Register now</Button>
                </div>


                <div className="lg:w-[35%] w-full relative aspect-4/3 md:aspect-auto md:h-[350px] rounded-2xl overflow-hidden">
                  <Image
                    src={events[currentIndex].image}
                    alt={events[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent hover:border-yellow-darkest text-yellow-darkest transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent hover:border-yellow-darkest text-yellow-darkest transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const events = [
  {
    id: 1,
    tag: "Our next adventure",
    date: "September 30-31",
    title: "Spring Camping Adventure",
    description:
      "Three-day camping experience with hiking, campfire cooking, and team-building activities in the beautiful mountain wilderness.",
    location: "Pine Ridge National Park",
    age: "Ages 11-17",
    price: "$45 per person",
    image: "/images/homepage/event/image1.webp",
  },
  {
    id: 2,
    tag: "Our next adventure",
    date: "October 15-16",
    title: "Autumn Hiking Expedition",
    description:
      "Explore the changing colors of the forest with guided hikes, nature photography workshops, and evening storytelling sessions.",
    location: "Maplewood Forest Reserve",
    age: "Ages 12-18",
    price: "$50 per person",
    image: "/images/homepage/event/image2.webp",
  },
  {
    id: 3,
    tag: "Our next adventure",
    date: "November 5-6",
    title: "Wilderness Survival Camp",
    description:
      "Learn essential survival skills including shelter building, fire starting, and navigation in a safe and supervised environment.",
    location: "Bear Creek Valley",
    age: "Ages 13-19",
    price: "$60 per person",
    image: "/images/homepage/event/image3.webp",
  },
];

export default Event;
