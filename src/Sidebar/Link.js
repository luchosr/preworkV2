import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Link = props => {
  return (
    <div>
      <a href="#" style={{ color: props.color }}>
        {" "}
        <FontAwesomeIcon icon={props.icon} />
        {props.text}{" "}
      </a>
    </div>
  );
};

export default Link;
