import './EditQueetModal.css';
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditQueet from './EditQueet';

const EditQueetModal = ({ queetId }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="queet-edit-btn" onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditQueet queet_id={queetId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditQueetModal
