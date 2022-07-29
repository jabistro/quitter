import "./EditComment.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { eraseComment, modifyComment } from "../../../store/comments";
import { AiOutlineClose } from 'react-icons/ai';

const EditComment = ({ setShowModal, comment_id }) => {

    const allComments = useSelector(state => state.comment);
    const editedComment = allComments[comment_id] || {};
    const queetId = editedComment?.queet?.id
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState(editedComment.content);
    const [image, setImage] = useState(editedComment.image_url);

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const removeImage = (e) => setImage(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editingComment = {
            id: editedComment.id,
            user_id: user.id,
            queet_id: queetId,
            content,
            image_url: image
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
            <div className="edit-comment-btn-and-title">
                <div onClick={() => setShowModal(false)} className='edit-comment-close-btn-container'>
                    <AiOutlineClose className='edit-comment-close-btn' />
                </div>
                <h3 className="edit-comment-title">Edit reply</h3>
            </div>
            <form onSubmit={handleSubmit} className="edit-comment-form">
                <div>
                    <textarea
                        className="edit-comment-input"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="Reply to queet."
                    />
                </div>
                <div className="edit-and-delete-comment-btn">
                    <div className="edit-comment-progress-and-submit-btn">
                        <button disabled={!content || content.length > 280} type="submit" className="submit-edit-comment-btn">Submit</button>
                        <div className="edit-comment-progress">
                            <span className={(content.length > 280 || content.length === 0) ? "edit-comment-char-total-red" : "edit-comment-char-total"}>{content.length}</span>
                            <p className="edit-comment-char-max">/280</p>
                        </div>
                    </div>
                    <button className="delete-comment-btn" onClick={(e) => deleteHandler(e, editedComment)}>Delete</button>
                </div>

            </form>
        </div>
    )
}

export default EditComment
