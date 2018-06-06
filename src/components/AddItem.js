import React from 'react';

const AddItem = (props) => (
      <div className="addItem">
        <form className="addItem" onSubmit={props.addItem}>
        <select className="addItem__dropDown" name="itemType">
          <option className="addItem__dropDown-option" value="1">Breakfast </option>
          <option className="addItem__dropDown-option" value="2"> Lunch </option>
          <option className="addItem__dropDown-option" value="3"> Dinner </option>
          <option className="addItem__dropDown-option" value="4"> Supper </option>
        </select>
        <input className="addItem__input" type="text" name="input" placeholder="eg. Tea, Rice, Indomie" autoComplete="off" />
        <button className="button button--addItem"> Add Meal </button>
        </form>
      </div>
);

export default AddItem;