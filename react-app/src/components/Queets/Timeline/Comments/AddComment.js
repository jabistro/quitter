import "./AddComment.css";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { addComment } from "../../../../store/comments";

const AddComment = () => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const { queetId } = useParams();
    const [content, setContent] = useState();

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
        <div>
            <form onSubmit={handleSubmit} className="add-comment-form">
                <div>
                    <label>
                        <textarea
                            className="add-comment-input"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            placeholder="Queet your reply"
                        />
                    </label>
                </div>
                <button type="submit" className="add-comment">Reply</button>
            </form>
        </div>
    )
}

export default AddComment
