import React from "react";
import "./styles.css";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faGithubAlt);

const GithubIssues = () => (
  <div className="githubIssues">
    <div className="issuesSection">
      {" "}
      <h4 className="title">
        {" "}
        <FontAwesomeIcon icon={faGithubAlt} /> Github Issues History
      </h4>
      <a href="https://github.com" className="subtitle">
        {" "}
        switch to gitlab
      </a>
      <div className="changeSub">
        Issues <span>Pull requests</span>
      </div>
      <ul className="issuesList">
        <li className="issues">
          <a href="" className="repoLink">
            <h5 className="repo">Repo: luchosr/Product-Landing-Page</h5>
          </a>
          <h6 className="issueNumber">Issue #2</h6>
          <p className="issueTitle">Make fakeForEach method page</p>
        </li>
      </ul>
    </div>
  </div>
);
export default GithubIssues;
