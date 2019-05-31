import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faCode,
  faChartLine,
  faPencilAlt,
  faLightbulb,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

library.add(
  faWrench,
  faCode,
  faStackOverflow,
  faChartLine,
  faPencilAlt,
  faLightbulb,
  faQuestion
);

const Link = props => (
  <div className="sidebar__link">
    <FontAwesomeIcon
      icon={props.icon}
      style={{ backgroundColor: props.color }}
      className="sidebar__link__icon"
    />
    <a href="https://javascript.info" style={{ color: props.color }}>
      {props.text}
    </a>
  </div>
);

export default Link;
