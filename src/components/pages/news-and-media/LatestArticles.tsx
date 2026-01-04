import React from "react";
import ArticleCard from "@/components/reusable/ArticleCard";

const articlesData = [
  {
    id: 1,
    title: "Summer Camp 2024 Recap",
    description:
      "An incredible week of adventure, learning, and friendship building at our annual summer camp. Read about all the exciting activities and achievements...",
    image: "/images/news&media/latest/image1.webp",
  },
  {
    id: 2,
    title: "Community Service Project Success",
    description:
      "Our scouts made a real difference in the community with their latest service project. Over 100 hours of volunteer work contributed to local environmental cleanup...",
    image: "/images/news&media/latest/image2.webp",
  },
  {
    id: 3,
    title: "New Leadership Program Launch",
    description:
      "Exciting announcement about our new advanced leadership development program for senior scouts. This innovative curriculum focuses on real-world leadership challenges...",
    image: "/images/news&media/latest/image3.webp",
  },
  {
    id: 4,
    title: "Hiking Expedition Highlights",
    description:
      "A look back at our challenging mountain hiking expedition. See how our scouts overcame obstacles and worked together to reach the summit...",
    image: "/images/news&media/latest/image4.webp",
  },
  {
    id: 5,
    title: "Scout Skills Competition Winners",
    description:
      "Congratulations to all the winners of this year's regional scout skills competition. Our troop performed exceptionally well in knot tying and navigation...",
    image: "/images/news&media/latest/image5.webp",
  },
  {
    id: 6,
    title: "Upcoming Charity Fundraiser",
    description:
      "Join us for our annual charity fundraiser event. All proceeds will go towards supporting local youth programs and providing equipment for underprivileged scouts...",
    image: "/images/news&media/latest/image6.webp",
  },
];

const LatestArticles = () => {
  return (
    <section className="w-full bg-white py-25 lg:py-38">
      <div className="container-box">
        <div className="mb-16 lg:mb-25">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-darkest">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
