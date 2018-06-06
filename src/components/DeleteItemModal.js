import React from 'react';
import Modal from 'react-modal';

const DeleteItemModal = (props) => (
  <Modal
    isOpen={ !!props.removeItemState }
    contentLabel="Remove Meal"
    ariaHideApp={false}
    onRequestClose={props.clearRemoveItem}
    closeTimeoutMS={1000}
    className="modal"
    >
     <h3 className="modal__title"> Do you really want to remove</h3>
     { props.removeItemState && <p className="modal__body"> {props.removeItemState} </p>}
     <button className="button" onClick={props.removeItem}> Yes </button> &nbsp; &nbsp; &nbsp;
     <button className="button" onClick={props.clearRemoveItem}> No </button>
  </Modal>
);

export default DeleteItemModal;