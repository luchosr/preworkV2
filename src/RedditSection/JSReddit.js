import React from "react";
import "./styles.css";
import RedditItem from "./RedditItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";

library.add(faRedditAlien);

class JSReddit extends React.Component {
  state = {
    error: null,
    isLoading: false,
    redditPost: []
  };
  componentDidMount() {
    this.fetchRedditPosts();
  }

  fetchRedditPosts = () => {
    this.setState({ isLoading: true });
    fetch("https://www.reddit.com/r/javascript.json")
      .then(response => response.json())
      .then(response => {
        const { children } = response.data;
        this.setState({
          redditPost: children
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  render() {
    const { error, isLoading, redditPost } = this.state;
    return (
      <div className="jsreddit">
        <h4 className="jsreddit__title">
          <FontAwesomeIcon icon={faRedditAlien} /> popular on r/javascript
        </h4>
        <ul className="jsreddit__ulist">
          {redditPost.length > 0 &&
            redditPost.map(post => (
              <RedditItem
                key={post.data.id}
                title={post.data.title}
                author={post.data.author}
                url={post.data.url}
                score={post.data.score}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default JSReddit;
