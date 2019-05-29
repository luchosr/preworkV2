import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faWrench, faCode } from "@fortawesome/free-solid-svg-icons";

library.add(faWrench, faCode);

const Link = props => {
  return (
    <div className="sidebar__link">
      <FontAwesomeIcon
        icon="wrench"
        style={{ backgroundColor: props.color }}
        className="sidebar__link__icon"
      />
      <a href="#" style={{ color: props.color }}>
        {props.text}
      </a>
    </div>
  );
};

export default Link;
