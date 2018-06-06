import React from 'react';
import Modal from 'react-modal';

const SelectedItemModal = (props) => (
  <Modal
    isOpen={!!props.selectedItem }
    contentLabel="Selected Meal"
    ariaHideApp={false}
    onRequestClose={props.clearSelectedItem}
    closeTimeoutMS={1000}
    className="modal"
    >
     <h3 className="modal__title"> I would like you to take </h3>
     { props.selectedItem && <p className="modal__body"> {props.selectedItem} </p>}
     <button className="button" onClick={props.clearSelectedItem}> Okay </button>
  </Modal>
);

export default SelectedItemModal;