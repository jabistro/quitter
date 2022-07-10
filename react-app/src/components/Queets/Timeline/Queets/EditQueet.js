import "./EditQueet.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { eraseQueet, modifyQueet } from "../../../../store/queets";
import { useHistory, useParams } from "react-router-dom";

const EditQueet = () => {

    const allQueets = useSelector(state => state.queet);
    const editedQueetId = useParams().queetId;
    const editedQueet = allQueets[editedQueetId] || {};
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState(editedQueet.content || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editingQueet = {
            id: editedQueet.id,
            user_id: user.id,
            content
        }
        await dispatch(modifyQueet(editingQueet))
            .then(() => history.push(`/queets/${editedQueet.id}`))
    }

    const deleteHandler = (e, queet) => {
        e.preventDefault();
        dispatch(eraseQueet(editedQueet))
            .then(() => history.push(""))
    }

    return (
        <div className="edit-queet-wrap">
            <h1>Edit Queet</h1>
            <form onSubmit={handleSubmit} className="edit-queet-form">
                <div>
                    <label>
                        <input
                            className="edit-queet-input"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="edit-and-delete-queet-btn">
                    <button type="submit" className="edit-queet-btn">Submit</button>
                    <button className="delete-queet-btn" onClick={(e) => deleteHandler(e, editedQueet)}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditQueet
