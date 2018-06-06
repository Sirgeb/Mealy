import React from 'react';
import Modal from 'react-modal';

const RemoveAllItemModal = (props) => (
  <Modal
    isOpen={ props.removeAllItemState }
    contentLabel="Remove Meal"
    ariaHideApp={false}
    onRequestClose={props.clearRemoveAllItem}
    closeTimeoutMS={1000}
    className="modal"
    >
     <h3 className="modal__title"> Do you want to remove all meals from this list? </h3>
     <button className="button" onClick={props.removeAllItem}> Yes </button> &nbsp; &nbsp; &nbsp;
     <button className="button" onClick={props.clearRemoveAllItem}> No </button>
  </Modal>
);

export default RemoveAllItemModal;