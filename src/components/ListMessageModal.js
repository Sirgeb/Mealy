import React from 'react';
import Modal from 'react-modal';

const ListMessageModal = (props) => (
    <Modal
        isOpen={!!props.listMsg}
        contentLabel="Message"
        ariaHideApp={false}
        onRequestClose={props.clearSelectedItem}
        closeTimeoutMS={1000}
        className="modal"
    >
        <h3 className="modal__title"> Message </h3>
        <div className="msg"> {props.listMsg} </div> <br /> <br />
        <button className="button" onClick={props.clearListMsg}> Okay </button>
    </Modal>
);

export default ListMessageModal;