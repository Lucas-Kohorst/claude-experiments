"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // In a real-world scenario, you'd fetch from an actual RSS feed URL
        // For this example, we'll use a placeholder API
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.a.dj.com%2Frss%2FRSSMarketsMain.xml');
        const data = await response.json();
        setNews(data.items.slice(0, 25));

        const uniqueCategories = [...new Set(data.flatMap(article => article.categories))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
      <header className="py-6 border-b border-gray-200">
        <h1 className="text-4xl font-serif font-bold text-gray-900">THE RSS JOURNAL.</h1>
        <p className="text-sm text-gray-500 mt-2">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
              {category}
            </span>
          ))}
        </div>
      </header>

      <main className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
        {news.map((article, index) => (
          <Card key={article.guid} className={index === 0 ? "md:col-span-2" : ""}>
            <CardHeader>
              <img 
                src={article.thumbnail || `https://source.boringavatars.com/marble/120/${encodeURIComponent(article.title)}?gradient=true&square`} 
                alt={article.title} 
                className="w-full h-48 object-cover mb-4" 
              />
              <CardTitle className="text-xl font-serif font-bold">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{article.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {article.categories.map((category, catIndex) => (
                  <span key={catIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {category}
                  </span>
                ))}
              </div>
              <a href={article.link} className="text-blue-600 hover:underline mt-2 inline-block">Read more</a>
            </CardContent>
          </Card>
        ))}
      </main>

      <footer className="mt-12 py-6 border-t border-gray-200">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} The RSS Journal. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;