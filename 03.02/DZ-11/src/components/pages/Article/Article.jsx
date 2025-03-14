import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Article.module.css';

export default function RandomArticle() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomArticle = () => {
    setLoading(true);
    axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary')
      .then(response => {
        setArticle(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching random article:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomArticle();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Random Wikipedia Article</h1>
      {loading ? (
        <p>Loading...</p>
      ) : article ? (
        <>
          <h2>{article.title}</h2>
          <p>{article.extract}</p>
          {article.thumbnail && article.thumbnail.source && (
            <img src={article.thumbnail.source} alt={article.title} />
          )}
          <a href={article.content_urls.desktop.page} target="_blank" rel="noopener noreferrer">
            Read full article
          </a>
        </>
      ) : (
        <p>Sorry, no article found.</p>
      )}
      <button onClick={fetchRandomArticle}>Get New Article</button>
    </div>
  );
}