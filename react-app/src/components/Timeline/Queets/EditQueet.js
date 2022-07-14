import "./EditQueet.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { eraseQueet, modifyQueet } from "../../../store/queets";
import { useHistory } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';

const EditQueet = ({ setShowModal, queet_id }) => {

    const allQueets = useSelector(state => state.queet);
    const editedQueet = allQueets[queet_id] || {};
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState(editedQueet.content);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editingQueet = {
            id: editedQueet.id,
            user_id: user.id,
            content
        }
        await dispatch(modifyQueet(editingQueet))
        setShowModal(false)
    }

    const deleteHandler = (e, queet) => {
        e.preventDefault();
        dispatch(eraseQueet(editedQueet))
        setShowModal(false)
        history.push("/")
    }

    return (
        <div className="edit-queet-wrap">
            <div className="edit-queet-btn-and-title">
                <div onClick={() => setShowModal(false)} className='edit-queet-close-btn-container'>
                    <AiOutlineClose className='edit-queet-close-btn' />
                </div>
                <h3 className="edit-queet-title">Edit Queet</h3>
            </div>
            <form onSubmit={handleSubmit} className="edit-queet-form">
                <div>
                    <textarea
                        className="edit-queet-input"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="What's on your mind? This is a safe space."
                    />
                </div>
                <div className="edit-and-delete-queet-btn">
                    <button type="submit" className="submit-edit-queet-btn">Submit</button>
                    <button className="delete-queet-btn" onClick={(e) => deleteHandler(e, editedQueet)}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditQueet
