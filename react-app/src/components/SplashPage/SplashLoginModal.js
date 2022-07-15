import './SplashLoginModal.css';
import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';

const SplashLoginModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="splash-user-login-btn" onClick={() => setShowModal(true)}>Sign in</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default SplashLoginModal
