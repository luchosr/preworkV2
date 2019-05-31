import React from "react";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faJsSquare);

const Item = props => (
  <li>
    <FontAwesomeIcon icon="js-square" />
    <a href="" className="item__link">
      {props.title}
    </a>

    <span className="time">{props.timeAgo}</span>
  </li>
);
export default Item;
