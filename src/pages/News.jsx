import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Search } from "lucide-react";

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pb-12">
      <div className="pt-24 pb-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">News & Publications</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest articles, success stories, and announcements about our ongoing projects and initiatives.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12">
        {filteredArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link key={article.id} to={`/articles/${article.id}`} className="hover:no-underline">
                  <ArticleCard
                    image={article.image}
                    date={article.date}
                    title={article.title}
                    excerpt={article.excerpt}
                  />
                </Link>
              ))}
            </div>
            
            {/* Add some dummy articles to fill out the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {[1, 2, 3].map((index) => (
                <div key={`dummy-${index}`} className="opacity-70">
                  <ArticleCard
                    image="/assets/water.jpg"
                    date={`May ${index + 10}, 2023`}
                    title={`Water Conservation Initiative Phase ${index}`}
                    excerpt="Community-driven water conservation efforts achieving significant progress in rural areas with sustainable practices."
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No articles match your search</h3>
            <p className="text-gray-500">Try different keywords or browse our recent posts</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Show All Articles
            </button>
          </div>
        )}
        
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex">
            <a href="#" className="px-3 py-2 border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-blue-50 text-blue-600 font-medium">
              1
            </a>
            <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="px-3 py-2 border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-50">
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
