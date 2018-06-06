import React from 'react';

const BreakFast = (props) => (
  <div>
    <ol className="viewItems-ol">
      {
        props.listOfBreakFast.length !== 0 ? 
        props.listOfBreakFast.map((item) => {
        return <li key={item} className="viewItems-list"> {item} 
        <button onClick={(e) => {props.setRemoveItem([item, 'breakFast'])}} 
        className="button button--delete"> remove </button> </li>
        }) 
         : 
        <p className="viewItems-list viewItems-list--p"> Empty list ... add any of your breakFast meal </p>
      }
    </ol>
    <center>
      <div>
        {
          props.listOfBreakFast.length !== 0 &&
          <button onClick={(e) => {props.setRemoveAllItem('breakFast')}} 
          className="button button--removeAll"> Remove All </button>
        }
      </div>
    </center>
  </div>
);

export default BreakFast;