import "./Comments.css";
import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import EditCommentModal from "./EditCommentModal";
import ReactTimeAgo from 'react-time-ago';

const Comments = () => {

    const { queetId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user.users);
    const usersArr = Object.values(users);
    const comments = useSelector(state => state.comment);
    const commentsArr = Object.values(comments)
    const queetComments = commentsArr.filter(comment => Number(comment.queet.id) === Number(queetId))


    return (
        <div className="comments-wrap">
            {queetComments.map(comment => {
                return (
                    <div key={comment.id} className="all-comment-wrap">
                        <div className="feed-comment-username-and-edit-btn">
                            <Link className="comment-link" to={`/comments/${comment.id}`}>
                                <div className="comment-username">
                                    {usersArr[comment.userId - 1].display_name} @{usersArr[comment.userId - 1].username}
                                    <ReactTimeAgo
                                        className="timestamp"
                                        date={comment.created_at}
                                        locale='en-US'
                                        timeStyle="twitter-first-minute"
                                    />
                                </div>
                            </Link>
                            {
                                comment.userId === sessionUser.id &&
                                <EditCommentModal commentId={comment.id} className="all-comments-edit-btn" />
                            }
                        </div>
                        <Link className="comment-link" to={`/comments/${comment.id}`}>
                            <div className="comment">{comment.content}</div>
                        </Link>
                    </div>
                )
            })}
        </div >
    )
}

export default Comments
