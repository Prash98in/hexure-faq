import React from 'react';
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import InputTag from "../components/Tag-Input/TagInput";

// Styles for the articles container
const tilesClass = 'relative px-2 container mx-auto divide-y-2 divide-solid shadow-2xl shadow-blue-900/20';

/**
 * Represents a single article item.
 * @param {Object} article - The article data.
 * @param {Function} onClick - Click handler for when an article is clicked.
 */
const ArticleItem = ({ article, onClick }) => (
  <div className="flex flex-wrap lg:flex-nowrap items-center py-2 hover:shadow-lg shadow-purple-500/40 cursor-pointer" onClick={() => onClick(article)}>
    <div className="w-full lg:w-9/12 mb-10 lg:mb-0">
      <h3 className="font-semibold font-heading mb-1">{article.title}</h3>
      <p className="text-xs overflow-hidden px-5">{article.content.replace(/(<img\s+[^>]*src="'["'][^>]*>|&lt;|&gt;|&nbsp;|<([^>]+)>)/gi, "").substring(0,200)}...</p>
    </div>
    <div className="w-full lg:w-auto px-4 ml-auto text-right">
      <span className="inline-flex items-center text-xl font-semibold text-orange-900 hover:text-gray-900">
        <InputTag 
          toChild={article.inputTags ? JSON.parse(article.inputTags) : []} 
          deleteTag='' 
          addTag='' 
          readOnly={true}
        />
      </span>
    </div>
  </div>
);

/**
 * Component for listing and updating articles.
 * @param {Array} articles - Array of article objects.
 */
const ArticlesListUpdate = ({ articles }) => {
  const navigate = useNavigate();

  // Handles the click event on an article, navigating to the update page.
  const handleArticleClick = (article) => {
    navigate(`/update-article`, { state: { articleToUpdate: article } });
  };

  return (
    <div className={tilesClass}>
      {articles.map(article => (
        <ArticleItem key={article.name} article={article} onClick={handleArticleClick} />
      ))}
    </div>
  );
}

export default ArticlesListUpdate;