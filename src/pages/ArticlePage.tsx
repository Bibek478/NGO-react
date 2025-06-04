import React from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-700">Article not found</h1>
          <Link to="/news" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/news" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to News
        </Link>
        
        <article>
          <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <p className="text-gray-500 mb-8">{article.date}</p>
          
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
