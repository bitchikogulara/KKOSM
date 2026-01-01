import Event from "@/components/pages/home/Event";
import HomeAboutUs from "@/components/pages/home/HomeAboutUs";
import Hero from "@/components/pages/home/HomeHero";
import NewsAndMedia from "@/components/pages/home/NewsAndMedia";
import OurMission from "@/components/pages/home/OurMission";
import PartOfJourney from "@/components/pages/home/PartOfJourney";
import Spotlight from "@/components/pages/home/Spotlight";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to KKOSM - Power your own adventure.",
};

export default function Home() {
  return (
    <main className="w-full">
      {/* <Header /> */}
      <Hero />
      <HomeAboutUs />
      <NewsAndMedia />
      <Spotlight />
      <Event />
      <PartOfJourney />
      <OurMission />
    </main>
  );
}
