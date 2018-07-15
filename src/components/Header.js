import React from 'react';

const Header = (props) => (

  <div className="header">
    <div className="container container--header">
    <h1 className="header__title"> {props.title} </h1>
    <span className="header__subtitle"> {props.subtitle} ...</span>
    <span className="header__date"> <strong>Date:</strong> { props.date } </span>
    </div>
  </div>
); 

Header.defaultProps = {
  title: "Mealy",
  subtitle: "Helping you have the right meal"
};

export default Header;