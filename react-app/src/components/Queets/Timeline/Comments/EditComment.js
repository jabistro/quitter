import "./EditComment.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { eraseComment, modifyComment } from "../../../../store/comments";

const EditComment = () => {

    const allComments = useSelector(state => state.comment);
    const editedCommentId = useParams().commentId;
    const editedComment = allComments[editedCommentId] || {};
    const queetId = editedComment.queet.id
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState(editedComment.content || '');
    console.log(queetId)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editingComment = {
            id: editedComment.id,
            user_id: user.id,
            queet_id: queetId,
            content
        }
        await dispatch(modifyComment(editingComment))
            .then(() => history.push(`/queets/${queetId}`))
    }

    const deleteHandler = (e, comment) => {
        e.preventDefault();
        dispatch(eraseComment(editedComment))
            .then(() => history.push(`/queets/${queetId}`))
    }

    return (
        <div>
            <h1>Edit Comment</h1>
            <form onSubmit={handleSubmit} className="edit-comment-form">
                <div>
                    <label>
                        <textarea
                            className="edit-comment-input"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="edit-delete-comment-btn">
                    <button type="submit" className="edit-comment-btn">Submit</button>
                    <button className="delete-comment-btn" onClick={(e) => deleteHandler(e, editedComment)}>Delete</button>
                </div>
            </form>
        </div>
    )

    return (
        <div>EditComment</div>
    )
}

export default EditComment
