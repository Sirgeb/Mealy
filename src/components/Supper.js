import React from 'react';

const Supper = (props) => (
  <div>
    <ol className="viewItems-ol">
      {
        props.listOfSupper.length !== 0 ?
          props.listOfSupper.map((item) => {
            return <li key={item} className="viewItems-list"> {item}
              <button onClick={(e) => { props.setRemoveItem([item, 'supper']) }}
                className="button button--delete"> remove </button> </li>
          })
          :
          <p className="viewItems-list viewItems-list--p"> Empty list ... add some of your supper meal </p>
      }
    </ol>
    <center>
      {
        props.listOfSupper.length !== 0 &&
        <button onClick={(e) => { props.setRemoveAllItem('supper') }}
          className="button button--removeAll"> Remove All </button>
      }
    </center>
  </div>
);

export default Supper;