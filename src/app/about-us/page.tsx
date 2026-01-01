import AboutHero from "@/components/pages/about/AboutHero";
import OurStory from "@/components/pages/about/OurStory";
import WhatWeTeach from "@/components/pages/about/WhatWeTeach";
import Programs from "@/components/pages/about/Programs";
import AgeGroups from "@/components/pages/about/AgeGroups";
import SupportMission from "@/components/pages/about/SupportMission";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about KKOSM's story, mission, and the programs we offer.",
};

const AboutUs = () => {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <WhatWeTeach />
      <Programs />
      <AgeGroups />
      <SupportMission />
    </main>
  );
};

export default AboutUs;
