import React, { Fragment } from 'react';
import Action from './Action';
import AddItem from './AddItem';
import Header from './Header';
import Status from './Status';
import ViewItems from './ViewItems';
import moment from 'moment';
import SelectedItemModal from './SelectedItemModal';
import RemoveItemModal from './DeleteItemModal';
import RemoveAllItemModal from './RemoveAllItemModal';
import ListMessageModal from './ListMessageModal';
import { withAlert } from "react-alert";

class Mealy extends React.Component {

  state = {
    time: undefined,
    lunch: [],
    dinner: [],
    supper: [],
    breakFast: [],
    selectedItem: undefined,
    removeItem: {
      itemName: undefined,
      itemType: undefined
    },
    removeAllItem: {
      listOfBreakFast: false,
      listOfLunch: false,
      listOfDinner: false,
      listOfSupper: false
    },
    removeAllFromAList: false,
    listMsg: undefined

  }

  displayDate = () => {
    const now = moment();
    return now.format("dddd, Do MMMM YYYY");
  };

  componentDidMount() {

    try {
      const getTime = localStorage.getItem('time');
      const time = JSON.parse(getTime);

      const getBreakFast = localStorage.getItem('breakFast');
      const breakFast = JSON.parse(getBreakFast);

      const getLunch = localStorage.getItem('lunch');
      const lunch = JSON.parse(getLunch);

      const getDinner = localStorage.getItem('dinner');
      const dinner = JSON.parse(getDinner);

      const getSupper = localStorage.getItem('supper');
      const supper = JSON.parse(getSupper);

      if (breakFast.length !== 0) {
        this.setState(() => ({ breakFast }));
      }

      if (lunch.length !== 0) {
        this.setState(() => ({ lunch }))
      }

      if (dinner.length !== 0) {
        this.setState(() => ({ dinner }));
      }

      if (supper.length !== 0) {
        this.setState(() => ({ supper }));
      }

      setInterval(() => {
        this.setState(() => ({ time }));
        this.time();
      }, 1000);

    } catch (e) {
      //console.log(e);
    }

  }

  componentDidUpdate(prevState) {

    if (prevState.breakFast !== this.state.breakFast) {
      localStorage.setItem('breakFast', JSON.stringify(this.state.breakFast));
    }

    if (prevState.lunch !== this.state.lunch) {
      localStorage.setItem('lunch', JSON.stringify(this.state.lunch));
    }

    if (prevState.dinner !== this.state.dinner) {
      localStorage.setItem('dinner', JSON.stringify(this.state.dinner));
    }

    if (prevState.supper !== this.state.supper) {
      localStorage.setItem('supper', JSON.stringify(this.state.supper));
    }
  }

  timeOfDay = () => {
    let hour = new Date().getHours();
    if (hour >= 4 && hour <= 11) return 'Morning';
    if (hour >= 12 && hour <= 16) return 'Afternoon';
    if (hour >= 17 && hour <= 20) return 'Evening';
    if (hour >= 21 || hour <= 3) return 'Night';
  }

  checkList = (meal) => {
    if (meal.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  clearListMsg = () => {
    this.setState(() => ({ listMsg: undefined }))
  }

  getAnItem = () => {

    if (this.timeOfDay() === 'Morning') {
      if (this.checkList(this.state.breakFast)) {
        const randomNum = Math.floor(Math.random() * this.state.breakFast.length);
        const item = this.state.breakFast[randomNum];
        this.setState(() => ({ selectedItem: item }));
      } else {
        this.setState(() => ({ listMsg: "Sorry, You have to add some breakfast meal" }));
      }


    } else if (this.timeOfDay() === 'Afternoon') {
      if (this.checkList(this.state.lunch)) {
        const randomNum = Math.floor(Math.random() * this.state.lunch.length);
        const item = this.state.lunch[randomNum];
        this.setState(() => ({ selectedItem: item }));
      } else {
        this.setState(() => ({ listMsg: "Sorry, You have to add some lunch meal" }));
      }

    } else if (this.timeOfDay() === 'Evening') {
      if (this.checkList(this.state.dinner)) {
        const randomNum = Math.floor(Math.random() * this.state.dinner.length);
        const item = this.state.dinner[randomNum];
        this.setState(() => ({ selectedItem: item }));
      } else {
        this.setState(() => ({ listMsg: "Sorry, You have to add some dinner meal" }));
      }

    } else if (this.timeOfDay() === 'Night') {
      if (this.checkList(this.state.supper)) {
        const randomNum = Math.floor(Math.random() * this.state.supper.length);
        const item = this.state.supper[randomNum];
        this.setState(() => ({ selectedItem: item }));
      } else {
        this.setState(() => ({ listMsg: "Sorry, You have to add some supper meal" }));
      }
    }

  }



  displayTypeOfMeal = () => {
    if (this.timeOfDay() === 'Morning') return 'BreakFast';
    if (this.timeOfDay() === 'Afternoon') return 'Lunch';
    if (this.timeOfDay() === 'Evening') return 'Dinner';
    if (this.timeOfDay() === 'Night') return 'Supper';
  }

  verifyItem = (item, itemState, itemObject) => {
    try {

      if (itemState === []) {
        let listOfItems = item;
        listOfitems = _.uniq(listOfitems);
        this.setState(() => (itemObject(listOfItems)));

      } else if (itemState !== []) {

        const arrayOfItems = item.split(',');
        const trimmedItems = arrayOfItems.map((Item) => {
          return Item.trim().toLowerCase();
        });
        let listOfItems = itemState.concat(trimmedItems);
        listOfItems = _.uniq(listOfItems);
        this.setState(() => (itemObject(listOfItems)));

      }

    } catch (e) {
      // console.log(e);
    }

  }

  addItem = (e) => {
    e.preventDefault();
    let item = e.target.elements.input.value.trim();
    let itemType = e.target.elements.itemType.selectedIndex;

    if (item && itemType === 0) {
      const itemObject = (listOfItems) => ({ breakFast: listOfItems });
      const itemState = this.state.breakFast;
      this.verifyItem(item, itemState, itemObject);
      e.target.elements.input.value = '';
      this.props.alert.success("Added Successfully");

    } else if (item && itemType === 1) {

      const itemObject = (listOfItems) => ({ lunch: listOfItems });
      const itemState = this.state.lunch;
      this.verifyItem(item, itemState, itemObject);
      e.target.elements.input.value = '';
      this.props.alert.success("Added Successfully");

    } else if (item && itemType === 2) {

      const itemObject = (listOfItems) => ({ dinner: listOfItems });
      const itemState = this.state.dinner;
      this.verifyItem(item, itemState, itemObject);
      e.target.elements.input.value = '';
      this.props.alert.success("Added Successfully");

    } else if (item && itemType === 3) {

      const itemObject = (listOfItems) => ({ supper: listOfItems });
      const itemState = this.state.supper;
      this.verifyItem(item, itemState, itemObject);
      e.target.elements.input.value = '';
      this.props.alert.success("Added Successfully");
    }

  };


  clearSelectedItem = () => {
    this.setState(() => ({ selectedItem: undefined }));
  }

  setRemoveItem = (item) => {
    const [itemName, itemType] = item;
    this.setState(() => ({
      removeItem: {
        itemName,
        itemType
      }
    }));
  };

  clearRemoveItem = () => {
    this.setState(() => ({
      removeItem: {
        itemName: undefined,
        itemType: undefined
      }
    }));
  }

  removeItem = () => {
    this.setState((prevState) => {
      if (this.state.removeItem.itemType === 'breakFast') {
        return {
          breakFast: prevState.breakFast.filter(meal => meal !== this.state.removeItem.itemName),
          removeItem: {
            itemName: undefined,
            itemType: undefined
          }
        }
      } else if (this.state.removeItem.itemType === 'lunch') {
        return {
          lunch: prevState.lunch.filter(meal => meal !== this.state.removeItem.itemName),
          removeItem: {
            itemName: undefined,
            itemType: undefined
          }
        }
      } else if (this.state.removeItem.itemType === 'dinner') {
        return {
          dinner: prevState.dinner.filter(meal => meal !== this.state.removeItem.itemName),
          removeItem: {
            itemName: undefined,
            itemType: undefined
          }
        }
      } else if (this.state.removeItem.itemType === 'supper') {
        return {
          supper: prevState.supper.filter(meal => meal !== this.state.removeItem.itemName),
          removeItem: {
            itemName: undefined,
            itemType: undefined
          }
        }
      }

    });
  }

  removeAllItem = () => {
    if (this.state.removeAllItem.listOfBreakFast === true) {
      this.setState(() => ({
        breakFast: [],
        removeAllItem: {
          listOfBreakFast: false
        },
        removeAllFromAList: false
      }));

    } else if (this.state.removeAllItem.listOfLunch === true) {
      this.setState(() => ({
        lunch: [],
        removeAllItem: {
          listOfLunch: false
        },
        removeAllFromAList: false
      }));

    } else if (this.state.removeAllItem.listOfDinner === true) {
      this.setState(() => ({
        dinner: [],
        removeAllItem: {
          listOfDinner: false
        },
        removeAllFromAList: false
      }));
    } else if (this.state.removeAllItem.listOfSupper === true) {
      this.setState(() => ({
        supper: [],
        removeAllItem: {
          listOfSupper: false
        },
        removeAllFromAList: false
      }));
    }
  };

  setRemoveAllItem = (itemType) => {
    if (itemType === 'breakFast') {
      this.setState(() => ({
        removeAllItem: {
          listOfBreakFast: true
        },
        removeAllFromAList: true
      }));

    } else if (itemType === 'lunch') {
      this.setState(() => ({
        removeAllItem: {
          listOfLunch: true
        },
        removeAllFromAList: true
      }));

    } else if (itemType === 'dinner') {
      this.setState(() => ({
        removeAllItem: {
          listOfDinner: true
        },
        removeAllFromAList: true
      }));

    } else if (itemType === 'supper') {
      this.setState(() => ({
        removeAllItem: {
          listOfSupper: true
        },
        removeAllFromAList: true
      }));
    }
  }

  clearRemoveAllItem = () => {
    this.setState(() => ({
      removeAllFromAList: false
    }));
  }


  render() {

    return (
      <Fragment>
        <Header date={this.displayDate()} />
        <div className="container">
          <Status
            timeOfDay={this.timeOfDay()}
            displayMeal={this.displayTypeOfMeal()}
          />
          <Action
            selectedItem={this.state.selectedItem}
            getAnItem={this.getAnItem}
            hasItem={this.state.selectedItem} />

          <AddItem addItem={this.addItem} />

          <ViewItems
            breakFast={this.state.breakFast}
            lunch={this.state.lunch}
            dinner={this.state.dinner}
            supper={this.state.supper}
            setRemoveItem={this.setRemoveItem}
            setRemoveAllItem={this.setRemoveAllItem}
            displayTypeOfMeal={this.displayTypeOfMeal()}
          />

          <SelectedItemModal
            selectedItem={this.state.selectedItem}
            clearSelectedItem={this.clearSelectedItem}
          />

          <ListMessageModal
            listMsg={this.state.listMsg}
            clearListMsg={this.clearListMsg}
          />

          <RemoveItemModal
            removeItemState={this.state.removeItem.itemName}
            clearRemoveItem={this.clearRemoveItem}
            removeItem={this.removeItem}
          />

          <RemoveAllItemModal
            removeAllItemState={this.state.removeAllFromAList}
            removeAllItem={this.removeAllItem}
            clearRemoveAllItem={this.clearRemoveAllItem} />
        </div>
      </Fragment>
    );
  }
}

export default withAlert(Mealy);