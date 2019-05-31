import React from "react";
import Link from "./Link";
import "./styles.css";
import { ReactComponent as InitabLogo } from "./logo.svg";
import SocialMedia from "./SocialMedia.js";
import {
  faFacebookF,
  faTwitter,
  faRedditAlien,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__links__section">
      <Link color="#8be9fd" text="settings" icon="wrench" />
      <Link color="#50FA7B" text="gists" icon="code" />
      <Link color="#FFB86C" text="stack overflow" icon="wrench" />
      <Link color="#FF79C5" text="trending" icon="chart-line" />
      <Link color="#BD93F9" text="scratch pad" icon="pencil-alt" />
      <Link color="#F8F8F2" text="playground" icon="lightbulb" />
      <Link color="#E6DA74" text="help/intro" icon="question" />
    </div>
    <div className="sidebar__logo">
      <div className="logoImage">
        <InitabLogo className="logo" />
      </div>
      <div className="socialmedia">
        <SocialMedia bckColor="#3C5A99" icon={faFacebookF} />
        <SocialMedia bckColor="#3C5A99" icon={faLinkedinIn} />
        <SocialMedia bckColor="#1DA1F2" icon={faTwitter} />
        <SocialMedia bckColor="#cee3f8" icon={faRedditAlien} />
      </div>
    </div>
  </div>
);

export default Sidebar;
