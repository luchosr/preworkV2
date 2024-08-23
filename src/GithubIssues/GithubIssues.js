import React from 'react';
import './styles.css';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IssuesData from './IssuesData';
import Issues from './Issues';

library.add(faGithubAlt);

const GithubIssues = () => {
  // const issues =
  return (
    <div className="githubIssues">
      <div className="issuesSection">
        <h4 className="title">
          <FontAwesomeIcon icon={faGithubAlt} /> Github Issues History
        </h4>
        <a href="https://github.com" className="subtitle">
          switch to gitlab
        </a>
        <div className="changeSub">
          Issues <span>Pull requests</span>
        </div>
        <ul className="issuesList">
          {IssuesData?.map((issue) => (
            <Issues
              repo={issue.repo}
              issueNumber={issue.issueNumber}
              issue={issue.issue}
              id={issue.index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default GithubIssues;
