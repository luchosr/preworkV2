import React, { useState, useEffect } from 'react';
import './styles.css';
import RedditItem from './RedditItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';

library.add(faRedditAlien);

const JSReddit = () => {
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [redditPost, setredditPost] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setisLoading(true);
      const response = await fetch('https://www.reddit.com/r/javascript.json');
      const { data } = await response.json();
      const { children } = data;
      setredditPost(children);
    } catch (error) {
      setError(error);
      console.error('OOPPS!, you got an error: ', error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <section className="jsreddit">
      <h4 className="jsreddit__title">
        <FontAwesomeIcon icon={faRedditAlien} /> popular on r/javascript
      </h4>
      <ul className="jsreddit__ulist">
        {!error &&
          redditPost?.length > 0 &&
          redditPost.map((post) => (
            <RedditItem
              key={post.data.id}
              title={post.data.title}
              author={post.data.author}
              url={post.data.url}
              score={post.data.score}
            />
          ))}
        {error && (
          <h2 style={{ color: 'red' }}>
            Uh oh! there's an error here, please try again in a few minutes
          </h2>
        )}
        {isLoading && <h2 style={{ color: 'blue' }}>loading ....</h2>}
      </ul>
    </section>
  );
};

export default JSReddit;
