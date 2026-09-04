import React from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import JSReddit from "./RedditSection/JSReddit";
import JShistory from "./JShistory/JShistory";
import GithubIssues from "./GithubIssues/GithubIssues";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <JSReddit />
      <JShistory />
      <GithubIssues />
    </div>
  );
}

export default App;
