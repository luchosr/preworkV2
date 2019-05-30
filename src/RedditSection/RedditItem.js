import React from "react";
import "./styles.css";

const RedditItem = props => (
  <li className="jsreddit__item">
    <h5 className="jsreddit__item__title">{props.title}</h5>
    <h4 className="jsreddit__item__author" style={{ color: "#66d9ef" }}>
      Posted by: <span style={{ color: "#f1fa8c" }}>{props.author}</span>{" "}
    </h4>
    <span style={{ color: "#6272a4" }}>
      Reddit Score: <span>{props.score} </span>
    </span>{" "}
    <br />
    <a
      href={props.url}
      className="jsreddit__item__link"
      style={{ color: "#ff79c6" }}
    >
      Link to Comments
    </a>
  </li>
);

export default RedditItem;
