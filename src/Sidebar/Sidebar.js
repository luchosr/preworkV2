import React from "react";
import Link from "./Link";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link color="blue" text="hola que tal" icon="FontAwesomeIcon" />
    </div>
  );
};

export default Sidebar;
