import React, { useEffect } from 'react';
import './styles.css';
import Item from './Item';
import HistoryData from './HistoryData';
import Clock from './Clock';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faClock, faJsSquare);

const JShistory = () => {
  const listItems = HistoryData.map((data) => (
    <Item
      id={data.id}
      timeAgo={data.timeAgo}
      title={data.title}
      key={data.id}
    />
  ));
  return (
    <div className="jshistory">
      <div className="jshistory__links">
        <h4 className="jshistory__title">
          <FontAwesomeIcon icon="clock" style={{ marginRight: '6px' }} />
          Relevant javascript history
        </h4>
        <ul className="jshistory__links__list">{listItems}</ul>
      </div>
      <div className="jshistory__clock">
        <Clock />
      </div>
    </div>
  );
};

export default JShistory;
