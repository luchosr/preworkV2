import React from "react";
import Link from "./Link";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__links__section">
        <Link color="#8be9fd" text="settings" icon="wrench" />
      </div>
    </div>
  );
};

export default Sidebar;
