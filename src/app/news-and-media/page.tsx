import NewsHero from "@/components/pages/news-and-media/NewsHero";
import LatestArticles from "@/components/pages/news-and-media/LatestArticles";
import MediaGallery from "@/components/pages/news-and-media/MediaGallery";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Media",
  description: "Latest news, articles, and media gallery from KKOSM.",
};

const page = () => {
  return (
    <main>
      <NewsHero />
      <LatestArticles />
      <MediaGallery />
    </main>
  );
};

export default page;
