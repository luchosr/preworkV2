import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faReddit
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faTwitter, faReddit);

const SocialMedia = props => (
  <div>
    <a href="https://www.javascript.info" className="smIcon">
      <FontAwesomeIcon
        style={{
          backgroundColor: props.bckColor,
          padding: "5px",
          margin: "0",
          width: "12px",
          borderRadius: "15px"
        }}
        icon={props.icon}
      />
    </a>
  </div>
);
export default SocialMedia;
