import React from 'react';
import Time from './Time';

const status = (props) => (
  <div className="status-bar">
    <h3 className="status-bar__title">
      Good {props.timeOfDay}! It's time to take your {props.displayMeal}
    </h3>
    <Time />
  </div>
);
export default status;