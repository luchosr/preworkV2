import React from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import JSReddit from "./RedditSection/JSReddit";
import JShistory from "./JShistory/JShistory";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <JSReddit />
      <JShistory />
    </div>
  );
}

export default App;
