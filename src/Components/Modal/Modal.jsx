import React from 'react';
import './Modal.css'; // Import CSS for styling

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">

            {children}

        </div>
    );
};

export default Modal;
