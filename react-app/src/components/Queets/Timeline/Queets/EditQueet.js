import "./EditQueet.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { eraseQueet, modifyQueet } from "../../../../store/queets";
import { useHistory, useParams } from "react-router-dom";

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
            <h1 className="edit-queet-title">Edit Queet</h1>
            <form onSubmit={handleSubmit} className="edit-queet-form">
                <div>
                    <label>
                        <textarea
                            className="edit-queet-input"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            placeholder="What's on your mind? This is a safe space."
                        />
                    </label>
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
