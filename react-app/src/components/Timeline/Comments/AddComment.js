import "./AddComment.css";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { addComment } from "../../../store/comments";

const AddComment = () => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const { queetId } = useParams();
    const [content, setContent] = useState('');

    const contentHandler = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            user_id: user.id,
            queet_id: queetId,
            content
        }

        const comment = await dispatch(addComment(newComment))

        if (comment) reset();
    }

    const reset = () => {
        setContent('');
    }

    return (
        <div className="add-comment-wrap">
            <form onSubmit={handleSubmit} className="add-comment-form">
                <img className='add-comment-profile-pic' src={user.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : user.profile_pic} />
                <div className="add-comment-both-halves">
                    <div className="add-comment-first-half">
                        <textarea
                            className="add-comment-input"
                            type="text"
                            value={content}
                            onChange={contentHandler}
                            required
                            placeholder="Queet your reply."
                        />
                    </div>
                    <div className="add-comment-second-half">
                        <div className="add-comment-progress-and-button">
                            <div className="add-comment-progress">
                                <span className={content.length <= 280 ? "add-comment-char-total" : "add-comment-char-total-red"}>{content.length}</span>
                                <p className="add-comment-char-max">/280</p>
                            </div>
                            <button disabled={!content || content.length > 280} type="submit" className="add-comment-btn">Reply</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddComment
