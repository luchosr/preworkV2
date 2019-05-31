import React from "react";
import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);
const JShistory = () => (
  <div className="jshistory">
    <div className="jshistory__links">
      <h4 className="jshistory__title">
        <FontAwesomeIcon icon="clock" style={{ marginRight: "6px" }} />
        Relevant javascript history
      </h4>
    </div>
  </div>
);

export default JShistory;
