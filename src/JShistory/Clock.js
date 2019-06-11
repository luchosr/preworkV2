import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faQuestionCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faQuestionCircle, faTimesCircle);

class Clock extends Component {
  state = {
    date: new Date(),
    hideParagraph: localStorage.getItem("hideParagraph")
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 60000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  hideParagraph = () => {
    this.setState({
      hideParagraph: true
    });
    localStorage.setItem("hideParagraph", "true");
  };

  render() {
    const setHour = () => {
      let hour = parseInt(
        this.state.date.toLocaleTimeString(navigator.language, {
          hour: "2-digit"
        }),
        10
      );
      return hour <= 12 ? hour : hour - 12;
    };

    let minutes = this.state.date.toLocaleTimeString(navigator.language, {
      minute: "2-digit"
    });

    let amPm = () =>
      parseInt(
        this.state.date.toLocaleTimeString(navigator.language, {
          hour: "2-digit"
        })
      );
    return (
      <div className="timer">
        <h2 className="timer__hour">
          4:26<span className="timer__hour__zone">PM</span>{" "}
        </h2>
        <h5 className="timer__date">June 4, 2019</h5>
        <p className="timer__messaje">
          <span>
            <FontAwesomeIcon icon="question-circle" />
          </span>
          Did you know you can add CUSTOM LINKS to display in this section? Open
          the SETTINGS panel and add the URLs of your favorites sites to the
          'CUSTOM LINKS' textarea.
          <div className="timer__messaje__hider">
            <span>
              <FontAwesomeIcon icon="times-circle" />
            </span>
            Got it! Don't show me this again
          </div>
        </p>
      </div>
    );
  }
}
export default Clock;
