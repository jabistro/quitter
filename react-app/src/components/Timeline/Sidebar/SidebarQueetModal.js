import './SidebarQueetModal.css';
import React, { useState } from 'react'
import SidebarAddQueet from './SidebarAddQueet';
import { Modal } from '../../../context/Modal';

const SidebarQueetModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="sidebar-queet-modal-main-btn" onClick={() => setShowModal(true)}>Queet</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SidebarAddQueet setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default SidebarQueetModal
