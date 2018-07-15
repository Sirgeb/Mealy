import React from 'react';

const Lunch = (props) => (
  <div>
    <ol className="viewItems-ol">
      {
        props.listOfLunch.length !== 0 ?
          props.listOfLunch.map((item) => {
            return <li key={item} className="viewItems-list"> {item}
              <button onClick={(e) => { props.setRemoveItem([item, 'lunch']) }}
                className="button button--delete"> remove </button> </li>
          })
          :
          <p className="viewItems-list viewItems-list--p"> Empty list ... add some of your lunch meal </p>
      }
    </ol>
    <center>
      <div>
        {
          props.listOfLunch.length !== 0 &&
          <button onClick={(e) => { props.setRemoveAllItem('lunch') }}
            className="button button--removeAll"> Remove All </button>
        }
      </div>
    </center>
  </div>
);

export default Lunch;