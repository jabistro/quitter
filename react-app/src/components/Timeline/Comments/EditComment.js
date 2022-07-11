import "./EditComment.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { eraseComment, modifyComment } from "../../../store/comments";

const EditComment = ({ setShowModal, comment_id }) => {

    const allComments = useSelector(state => state.comment);
    const editedComment = allComments[comment_id] || {};
    const queetId = editedComment?.queet?.id
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState(editedComment.content);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editingComment = {
            id: editedComment.id,
            user_id: user.id,
            queet_id: queetId,
            content
        }
        await dispatch(modifyComment(editingComment))
        setShowModal(false)
    }

    const deleteHandler = (e, comment) => {
        e.preventDefault();
        dispatch(eraseComment(editedComment))
        history.push(`/queets/${queetId}`)
    }

    return (
        <div className="edit-comment-wrap">
            <h1 className="edit-comment-title">Edit Comment</h1>
            <form onSubmit={handleSubmit} className="edit-comment-form">
                <div>
                    <label>
                        <textarea
                            className="edit-comment-input"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            placeholder="What's on your mind? This is a safe space."
                        />
                    </label>
                </div>
                <div className="edit-and-delete-comment-btn">
                    <button type="submit" className="submit-edit-comment-btn">Submit</button>
                    <button className="delete-comment-btn" onClick={(e) => deleteHandler(e, editedComment)}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditComment
