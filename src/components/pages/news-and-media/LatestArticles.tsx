"use client";
import React, { useState, useEffect } from "react";
import ArticleCard from "@/components/reusable/ArticleCard";
import Button from "@/components/ui/button";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
}

const LatestArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 6;

  const fetchArticles = async (skip: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/news?skip=${skip}&take=${itemsPerPage}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      if (data.length < itemsPerPage) {
        setHasMore(false);
      }

      setArticles((prev) => {
        if (skip === 0) return data;
        return [...prev, ...data];
      });
      setPage((prev) => (skip === 0 ? 1 : prev + 1));
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(0);
  }, []);

  const handleLoadMore = () => {
    fetchArticles(page * itemsPerPage);
  };

  return (
    <section className="w-full bg-white py-25 lg:py-38">
      <div className="container-box">
        <div className="mb-16 lg:mb-25">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-darkest">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
            />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <Button
              className="px-8 py-3 bg-white border border-yellow-darkest text-yellow-darkest hover:bg-gray-50 transition-colors rounded-full"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestArticles;
