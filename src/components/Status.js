import React from 'react';

const status = (props) => (
  <div className="status-bar">
    <h3 className="status-bar__title">
      Good { props.timeOfDay }! It's time to take your { props.displayMeal } 
    </h3>
    <button className="button button--notLaunch"> { props.time } </button>
  </div>
);

export default status;