import React from "react";

const Clock = () => (
  <div className="timer">
    <h2 className="timer__hour">
      4:26 <span className="timer__hour__zone">PM</span>{" "}
    </h2>
    <h5 className="timer__date" />
    <p className="timer__messaje">
      Did you know you can add CUSTOM LINKS to display in this section? Open the
      SETTINGS panel and add the URLs of your favorites sites to the 'CUSTOM
      LINKS' textarea.
    </p>
  </div>
);
export default Clock;
