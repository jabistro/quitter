import "./Comments.css";
import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Comments = () => {

    const history = useHistory();
    const { queetId } = useParams();
    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comment);
    const commentsArr = Object.values(comments)
    const queetComments = commentsArr.filter(comment => Number(comment.queet.id) === Number(queetId))

    const editHandler = comment => {
        history.push(`/comments/edit/${comment.id}`)
    }

    return (
        <div>
            {queetComments.map(comment => {
                return (
                    <div key={comment.id} className="comment">
                        <div>User: {comment.userId}</div>
                        <div>{comment.content}</div>
                        {
                            comment.userId === user.id &&
                            <button className="edit-comment-btn" onClick={() => editHandler(comment)}>Edit</button>
                        }
                    </div>
                )
            })}
        </div >
    )
}

export default Comments
