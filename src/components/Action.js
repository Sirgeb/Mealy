import React from 'react';

const Action = (props) => (
  <div>
    <button 
      disabled={props.hasItem}
      className="big-button" 
      onClick={props.getAnItem}>
    <span className="button__itemType-text"> <img src="./images/meal.png" /> </span> 
    Tell Me What To Eat  {props.status}</button>
  </div>
);

export default Action;