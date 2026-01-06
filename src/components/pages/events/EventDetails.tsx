"use client";

import { motion } from "motion/react";
import EventCard from "./EventCard";
import { EventCardProps } from "./types";
import React, { useState, useEffect } from "react";

const EventDetails = () => {
  const [events, setEvents] = useState<EventCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Transform API data to match EventCardProps
          const formattedEvents = data.map((item: any) => ({
            theme: item.theme || "gold", // Default theme or from DB if added
            category: item.category || "Event",
            date: item.date,
            title: item.title,
            location: item.location,
            ageGroup: item.age,
            price: item.price,
            specialDescription: item.specialDescription || item.description,
            timeline: item.timeline || [],
            sections: item.sections || [],
            image: item.image
          }));
          setEvents(formattedEvents);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="py-20 text-center">Loading events...</div>;

  return (
    <section className="bg-white py-12 lg:pt-20 xl:pt-25">
      <div className="container-box">
        <div className="mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  font-semibold text-yellow-darkest">
            Event Details & Mission Briefings
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
