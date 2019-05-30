import React from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import JSReddit from "./RedditSection/JSReddit";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <JSReddit />
    </div>
  );
}

export default App;
