import CTA from "@/components/pages/events/CTA";
import EventDetails from "@/components/pages/events/EventDetails";
import EventsHero from "@/components/pages/events/EventsHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Join our upcoming events, workshops, and camps.",
};

const EventsPage = () => {
  return (
    <main>
      <EventsHero />
      {/* Event Details Section */}
      <EventDetails />

      {/* CTA Section */}
      <CTA />
    </main>
  );
};

export default EventsPage;
