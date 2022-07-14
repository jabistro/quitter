import "./AddComment.css";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { addComment } from "../../../store/comments";

const AddComment = () => {
    const user = useSelector(state => state.session.user);
    const users = useSelector(state => state.user);
    const usersArr = Object.values(users);
    const dispatch = useDispatch();
    const queets = useSelector(state => state.queet)
    const queetsArr = Object.values(queets)
    const { queetId } = useParams();
    const queet = queetsArr[queetId];
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
        <div className="add-comment-wrap">
            <form onSubmit={handleSubmit} className="add-comment-form">
                <Link className="add-comment-profile-pic-link" to={`/users/${user.id}`}>
                    <img className='add-comment-profile-pic' src={user.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : user.profile_pic} />
                </Link>
                <div className="add-comment-input-btn-and-reply-to">
                    {/* <div className="add-comment-replying-to-container">
                        <p className="add-comment-replying-to-txt">Replying to</p>
                        <a className="add-comment-replying-to-user">@{usersArr[0][queet.userId - 1].username}</a>
                    </div> */}
                    <div className="add-comment-input-and-btn">
                        <textarea
                            className="add-comment-input"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            placeholder="Queet your reply"
                        />
                        <button disabled={!content} type="submit" className="add-comment-btn">Reply</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddComment
