import React, { useState, useEffect } from 'react';
import Paragraph from './Paragraph';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faQuestionCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

library.add(faQuestionCircle, faTimesCircle);

const Clock = () => {
  const [date, setdate] = useState(new Date());
  const [hideParagraph, sethideParagraph] = useState(
    localStorage.getItem('hideParagraph')
  );

  useEffect(() => {
    const clockInterval = setInterval(() => tick(), 60000);
    return function cleanup() {
      clearInterval(clockInterval);
    };
  }, []);

  const tick = () => {
    setdate(new Date());
  };

  const hideParagraphFn = () => {
    sethideParagraph('hideParagraph');
    localStorage.setItem('hideParagraph', 'true');
  };

  const setHour = () => {
    let hour = parseInt(
      date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
      }),
      10
    );

    return hour <= 12 ? hour : hour - 12;
  };

  let minutes = date.toLocaleTimeString(navigator.language, {
    minute: '2-digit',
  });

  return (
    <div className="timer">
      <h2 className="timer__hour">
        {setHour()}:{parseInt(minutes) < 10 ? 0 + minutes : minutes}
        <span className="timer__hour__zone">
          {setHour() > 12 ? 'AM' : 'PM'}
        </span>
      </h2>
      <h5 className="timer__date"> {date.toDateString()}</h5>

      {!hideParagraph && <Paragraph onClose={hideParagraphFn} />}
    </div>
  );
};
export default Clock;
