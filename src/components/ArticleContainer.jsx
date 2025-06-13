import React from 'react';
import '../styles/ArticleContainer.css';

const ArticleContainer = ({ article }) => {
  return (
    <div className="article-container">
      {article.image && (
        <div className="article-image-wrapper">
          <img 
            src={article.image} 
            alt={article.title || "Article image"} 
            loading="lazy"
          />
        </div>
      )}
      {/* ...existing code for article content... */}
    </div>
  );
};

export default ArticleContainer;