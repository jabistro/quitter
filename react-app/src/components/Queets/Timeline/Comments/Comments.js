import "./Comments.css";
import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Comments = () => {

    const history = useHistory();
    const { queetId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user.users);
    const usersArr = Object.values(users);
    const comments = useSelector(state => state.comment);
    const commentsArr = Object.values(comments)
    const queetComments = commentsArr.filter(comment => Number(comment.queet.id) === Number(queetId))

    const editHandler = comment => {
        history.push(`/comments/edit/${comment.id}`)
    }

    return (
        <div className="comments-wrap">
            {queetComments.map(comment => {
                return (
                    <div key={comment.id} className="comment-wrap">
                        <div className="comment-username-and-edit-btn">
                            <div className="comment-username">@{usersArr[comment.userId - 1].username}</div>
                            {
                                comment.userId === sessionUser.id &&
                                <button className="edit-comment-btn" onClick={() => editHandler(comment)}>Edit</button>
                            }
                        </div>
                        <div className="comment">{comment.content}</div>
                    </div>
                )
            })}
        </div >
    )
}

export default Comments
