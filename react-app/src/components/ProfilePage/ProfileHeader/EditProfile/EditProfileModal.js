import "./EditProfileModal.css";
import React, { useState } from 'react'
import { Modal } from "../../../../context/Modal";
import EditProfile from "./EditProfile";

const EditProfileModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="profile-edit-btn" onClick={() => setShowModal(true)}>Edit profile</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditProfile setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditProfileModal
