import React from 'react'
import "./SignOutModal.css"
import Modal from '../Modal/Modal'
import { warning } from '../../assets/assets_frontend/assets'
export default function SignOutModal({ isModalOpen, onClose, onLogout }) {
    return (
        <div className='signOutModal'>
            <Modal isOpen={isModalOpen} onClose={onClose}>
                <div className="modal-content">
                    <div className='imgContainer'>
                        <img src={warning} alt="" />
                    </div>
                    <h2 className='Title'>Are You Sure You Want To Log Out ?</h2>
                    <div className="buttonsContainer">
                        <button className='YesButton' onClick={onLogout}>Yes</button>
                        <button className='NoButton' onClick={onClose}>No</button>
                    </div>
                </div>


            </Modal>
        </div>
    )
}
