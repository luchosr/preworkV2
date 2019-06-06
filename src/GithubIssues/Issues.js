import React from "react";

const Issues = props => {
  return (
    <li className="issues">
      <a href="" className="repoLink">
        <h5 className="repo">Repo: {props.repo}</h5>
      </a>
      <h6 className="issueNumber">Issue #{props.issueNumber}</h6>
      <p className="issueTitle">{props.issue}</p>
    </li>
  );
};

export default Issues;
