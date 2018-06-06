import React from 'react';
import BreakFast from './BreakFast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Supper from './Supper';

class ViewItems extends React.Component {
  state = {
    breakFast: undefined,
    lunch: undefined,
    dinner: undefined,
    supper: undefined,
    listOfBreakFast: [],
    listOfLunch: [],
    listOfDinner: [],
    listOfSupper: [],
    visibility: false
  }

 componentWillReceiveProps(nextprops) {
    if (nextprops.breakFast !== this.props.breakFast) {
      this.setState(() => ({ listOfBreakFast: nextprops.breakFast }));
    } 

    if (nextprops.lunch !== this.props.lunch) {
      this.setState(() => ({ listOfLunch: nextprops.lunch }));
    }

    if (nextprops.dinner !== this.props.dinner) {
      this.setState(() => ({ listOfDinner: nextprops.dinner }));
    }

    if (nextprops.supper !== this.props.supper) {
      this.setState(() => ({ listOfSupper: nextprops.supper }));
    }

 }

  breakFastState = () => {
    return {
      breakFast: 'active',
      lunch: undefined,
      dinner: undefined,
      supper: undefined,
    }
  }

  lunchState = () => {
    return {
      breakFast: undefined,
      lunch: 'active',
      dinner: undefined,
      supper: undefined,
    }
  }

  dinnerState = () => {
    return {
      breakFast: undefined,
      lunch: undefined,
      dinner: 'active',
      supper: undefined,
    }
  }

  supperState = () => {
    return {
      breakFast: undefined,
      lunch: undefined,
      dinner: undefined,
      supper: 'active',
    }
  }

  currentMeal = () => {
    if (this.props.displayTypeOfMeal === 'BreakFast') {
      this.setState(() => (this.breakFastState()));

    } else if (this.props.displayTypeOfMeal === 'Lunch') {
      this.setState(() => (this.lunchState()));

    } else if (this.props.displayTypeOfMeal === 'Dinner') {
      this.setState(() => (this.dinnerState()));

    } else if (this.props.displayTypeOfMeal === 'Supper') {
      this.setState(() => (this.supperState()));
    }

  }

  tooggleVisibility = () => {
    this.setState( (prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });

    this.currentMeal();
  }

  switchList = (itemName) => {
    if (itemName === 'breakFast') {
      this.setState(() => (this.breakFastState()));

    } else if (itemName === 'lunch') {
      this.setState(() => (this.lunchState()));

    } else if (itemName === 'dinner') {
      this.setState(() => (this.dinnerState()));

    } else if (itemName === 'supper') {
      this.setState(() => (this.supperState()));
      
    }
  }
 

  render() {
    return (
      <div className="viewItems">
              <center>
              <button className="button button--addItem button--viewItem" onClick={this.tooggleVisibility}> {this.state.visibility ? 'Hide Meal' : 'View Meal'} </button>
              </center>

              {
                this.state.visibility &&
                  <div>
                      <div className="itemType">   
                      <button className={`button button--addItem button--Item ${this.state.breakFast}`} onClick={(e) => {this.switchList('breakFast')}}> Breakfast </button>
                      <button className={`button button--addItem button--Item ${this.state.lunch}`} onClick={(e) => {this.switchList('lunch')}}> Lunch </button>
                      <button className={`button button--addItem button--Item ${this.state.dinner}`} onClick={(e) => {this.switchList('dinner')}}> Dinner </button>
                      <button className={`button button--addItem button--Item ${this.state.supper}`} onClick={(e) => {this.switchList('supper')}}> Supper </button>
                    </div>
              
                        { 
                          
                         !!this.state.breakFast ? 
                         <BreakFast 
                          listOfBreakFast={this.state.listOfBreakFast}
                          setRemoveItem={this.props.setRemoveItem} 
                          setRemoveAllItem={this.props.setRemoveAllItem}
                         /> : 
                         
                         !!this.state.lunch ? 
                         <Lunch
                          listOfLunch={this.state.listOfLunch}
                          setRemoveItem={this.props.setRemoveItem}
                          setRemoveAllItem={this.props.setRemoveAllItem}
                         /> : 
                                                 
                         !!this.state.dinner ? 
                         <Dinner 
                          listOfDinner={this.state.listOfDinner}
                          setRemoveItem={this.props.setRemoveItem}
                          setRemoveAllItem={this.props.setRemoveAllItem}
                         /> : 
                         
                         <Supper 
                          listOfSupper={this.state.listOfSupper}
                          setRemoveItem={this.props.setRemoveItem}
                          setRemoveAllItem={this.props.setRemoveAllItem}
                         />
                        }
                </div>
              }

            </div>
    );
  }
}
      
export default ViewItems;