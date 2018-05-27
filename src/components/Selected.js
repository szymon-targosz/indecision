import React from 'react';
import Modal from 'react-modal';

const Selected = (props) => (
    <Modal
        ariaHideApp={false}
        contentLabel='Selected Option'
        closeTimeoutMS={250}
        isOpen={!!props.selected}
        onRequestClose={props.handleClearSelected}
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        <p className='modal__selected-option'>{props.selected}</p>
        <button className='button' onClick={props.handleClearSelected}>Ok</button>
    </Modal> 
);

export default Selected;