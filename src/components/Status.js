import React from 'react';

const status = (props) => (
  <div className="status-bar">
    <h3 className="status-bar__title">
      Good {props.timeOfDay}! It's time to take your {props.displayMeal}
    </h3>
    <div className="time"> {props.time} </div>
  </div>
);

export default status;