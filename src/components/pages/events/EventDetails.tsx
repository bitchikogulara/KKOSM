"use client";

import { motion } from "motion/react";
import EventCard from "./EventCard";
import { EventCardProps } from "./types";

const EventDetails = () => {
  const events: EventCardProps[] = [
    {
      theme: "gold",
      category: "Our next adventure",
      date: "September 30-31",
      title: "Spring Camping Adventure",
      location: "Pine Ridge National Park",
      ageGroup: "Ages 11-17",
      price: "$45 per person",
      specialDescription: `This isn't just camping – it's a journey into the heart of nature where friendships are forged around crackling campfires and everyone discovers their inner explorer. We'll spend three magical days in the beautiful Pine Ridge Mountains, where towering pines whisper ancient secrets and crystal-clear streams sing lullabies.

Our experienced leaders will guide you through outdoor skills, from setting up the perfect campsite to reading nature's signs. But the real magic happens in the quiet moments – sharing stories under a blanket of stars, learning that courage grows when we step outside our comfort zones together.`,
      timeline: [
        {
          time: "6 AM",
          title: "Arrival & Camp Setup",
          description: "Welcome circle, tent setup, dinner prep",
        },
        {
          time: "6 AM",
          title: "Arrival & Camp Setup",
          description: "Welcome circle, tent setup, dinner prep",
        },
        {
          time: "6 AM",
          title: "Arrival & Camp Setup",
          description: "Welcome circle, tent setup, dinner prep",
        },
        {
          time: "6 AM",
          title: "Arrival & Camp Setup",
          description: "Welcome circle, tent setup, dinner prep",
        },
        {
          time: "6 AM",
          title: "Arrival & Camp Setup",
          description: "Welcome circle, tent setup, dinner prep",
        },
      ],
      sections: [
        { title: "Adventure timeline" },
        {
          title: "What to bring",
          items: [
            "Sleeping bag & pillow",
            "Weather-appropriate clothing",
            "Personal water bottle",
            "Flashlight/headlamp",
            "Personal medications",
            "Positive attitude & open heart!",
          ],
        },
        {
          title: "Meals included",
          items: [
            "Friday dinner (campfire cooking)",
            "Saturday breakfast & lunch",
            "Saturday dinner (Dutch oven feast)",
            "Sunday breakfast",
            "All snacks & hot chocolate",
            "Dietary needs accommodated",
          ],
        },
        {
          title: "What we provide",
          items: [
            "Tents & camping equipment",
            "All cooking gear & utensils",
            "First aid & safety equipment",
            "Activity supplies",
            "Transportation to/from site",
            "Experienced adult supervision",
          ],
        },
      ],
    },
    {
      theme: "green",
      category: "Community Love",
      date: "September 30-31",
      title: "Community Garden Day",
      location: "Riverside Community Garden",
      ageGroup: "Ages 11-17",
      price: "$45 per person",
      specialDescription: `There's something magical about getting your hands dirty for a good cause! We'll spend the day at the Riverside Community Garden, planting seeds of hope and nurturing growth that will feed families throughout the season.

This isn't just about gardening – it's about learning that small actions create big changes, that working together makes everything possible, and that the earth gives back when we give to it first.`,
      timeline: [
        {
          time: "9:00 AM",
          title: "Arrival & Camp Setup",
          description: "",
        },
        {
          time: "9:30 AM",
          title: "Arrival & Camp Setup",
          description: "",
        },
        {
          time: "11:00 AM",
          title: "Arrival & Camp Setup",
          description: "",
        },
        {
          time: "12:30 PM",
          title: "Arrival & Camp Setup",
          description: "",
        },
        {
          time: "2:00 PM",
          title: "Arrival & Camp Setup",
          description: "",
        },
        {
          time: "3:30 PM",
          title: "Arrival & Camp Setup",
          description: "",
        },
      ],
      sections: [
        { title: "Day Schedule" },
        {
          title: "Meals included",
          items: [
            "Old clothes you don't mind getting dirty",
            "Closed-toe shoes (no sandals)",
            "Hat and sunscreen",
            "Bring a change of clothes if needed",
          ],
        },
        {
          title: "What You will gain",
          items: [
            "Hands-on gardening experience",
            "Understanding of sustainable living",
            "Connection with community volunteers",
            "Fresh vegetables to take home",
          ],
        },
      ],
    },
    {
      theme: "red",
      category: "Leadership Training",
      date: "September 30-31",
      title: "Future Leaders Retreat",
      location: "Pine Ridge National Park",
      ageGroup: "Ages 11-17",
      price: "$45 per person",
      specialDescription: `Leadership isn't about being the loudest voice in the room – it's about inspiring others to find their own voice. Over two transformative days, you'll discover that true leadership comes from courage, compassion, and the willingness to serve others.

Through interactive workshops, team challenges, and meaningful conversations with current youth leaders, you'll learn practical skills while exploring what leadership means to you personally.`,
      timeline: [
        {
          time: "6 AM",
          title: "Arrival & Camp Setup",
          description: "",
        },
      ],
      sections: [
        { title: "Leadership Development Program" },
        {
          title: "Meals included",
          items: [
            "Communication That Connects - Active listening and clear expression",
            "Building Trust - Creating safe spaces for everyone",
            "Conflict Resolution - Turning challenges into opportunities",
            "Team Dynamics - Bringing out the best in others",
            "Personal Leadership Style - Discovering your unique approach",
            "Goal Setting & Achievement - Making dreams reality",
          ],
        },
        {
          title: "What You will gain",
          items: [
            "Mentorship from current troop leaders",
            "Real-world leadership scenarios",
            "Personal leadership plan development",
            "Peer feedback and support circles",
            "Certificate of completion",
            "Optional follow-up mentoring program",
          ],
        },
      ],
    },
  ];

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
