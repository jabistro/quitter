import "./EditCommentModal.css";
import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal';
import EditComment from "./EditComment";

const EditCommentModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="comment-edit-btn" onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditComment setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditCommentModal
