import React from 'react';

const Dinner = (props) => (
  <div>
    <ol className="viewItems-ol">
      {
        props.listOfDinner.length !== 0 ?
        props.listOfDinner.map((item) => {
        return <li key={item} className="viewItems-list"> {item} 
        <button onClick={(e) => {props.setRemoveItem([item, 'dinner'])}} 
        className="button button--delete"> remove </button> </li>
        })
         :
        <p className="viewItems-list viewItems-list--p"> Empty list ... add any of your dinner meal </p>
      }
    </ol>
      <center>
        <div>
          {
            props.listOfDinner.length !== 0 &&
            <button onClick={(e) => {props.setRemoveAllItem('dinner')}} 
            className="button button--removeAll"> Remove All </button>
          }
        </div>
      </center>
  </div>
);

export default Dinner;