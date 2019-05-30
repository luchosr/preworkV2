import React from "react";
import "./styles.css";

const RedditItem = props => (
  <li className="jsreddit__item">
    <h5 className="jsreddit__item__title">{props.title}</h5>
    <h4 className="jsreddit__item__author"> Posted by: {props.author}</h4>

    <span>
      Reddit Score: <span>{props.score} </span>
    </span>
    <a href={props.url} className="jsreddit__item__link">
      Link to Comments
    </a>
  </li>
);

export default RedditItem;
