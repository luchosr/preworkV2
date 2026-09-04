import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import {
  faQuestionCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faRedditAlien, faQuestionCircle, faTimesCircle);

const Paragraph = ({ onClose }) => (
  <div>
    <p className="explText" style={{ fontSize: "14px", marginTop: "15px" }}>
      <span style={{ color: "#ffb86c", margin: "5px" }}>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </span>
      Did you know you can add CUSTOM LINKS to display in this section?
      <br /> Open the SETTINGS panel and add the URLs of your favorites sites to
      the 'CUSTOM LINKS' textarea.
    </p>
    <a role="button" style={{ color: "#ffb86c" }} onClick={onClose}>
      <FontAwesomeIcon icon={faTimesCircle} /> Got it! Don't show me this again.
    </a>
  </div>
);
export default Paragraph;
