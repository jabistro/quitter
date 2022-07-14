import "./Comments.css";
import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import EditCommentModal from "./EditCommentModal";
import ReactTimeAgo from 'react-time-ago';
import { BiMessage } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { FiHeart, FiShare } from "react-icons/fi";

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
                    <div key={comment.id} className="comments">
                        <img className='all-comments-profile-pic' src={usersArr[comment.userId - 1].profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : usersArr[comment.userId - 1].profile_pic} />
                        <div className="all-comments-everything-minus-pic">
                            <div className="feed-comment-names-edit-and-content">
                                <div className="feed-comment-username-and-edit-btn">
                                    <Link className="comment-link" to={`/comments/${comment.id}`}>
                                        <div className="feed-comment-names">
                                            <p className="feed-comment-display-name">{usersArr[comment.userId - 1].display_name}</p>
                                            <p className="feed-comment-username">@{usersArr[comment.userId - 1].username}<div className="stupid-dot">·</div></p>
                                            <p className="timestamp-container">
                                                <ReactTimeAgo
                                                    className="timestamp"
                                                    date={comment.created_at}
                                                    locale='en-US'
                                                    timeStyle="twitter-first-minute"
                                                />
                                            </p>
                                        </div>
                                    </Link>
                                    {comment.queet.userId === sessionUser.id &&
                                        <EditCommentModal commentId={comment.id} className="all-comments-edit-btn" />
                                    }
                                </div>
                                <Link className="comment-link" to={`/comments/${comment.id}`}>
                                    <div className="feed-comment">{comment.content}</div>
                                </Link>
                            </div>
                            <div className="feed-comment-icons">
                                <div className='feed-comment-icon-and-stat'>
                                    <BiMessage />
                                    <p className='feed-comment-stat'></p>
                                </div>
                                <div className='feed-comment-icon-and-stat'>
                                    <FaRetweet className="requeet-icon" />
                                    <p className='feed-comment-stat'></p>
                                </div>
                                <div className='feed-comment-icon-and-stat'>
                                    <FiHeart />
                                    <p className='feed-comment-stat'></p>
                                </div>
                                <div className='feed-comment-icon-and-stat'>
                                    <FiShare />
                                    <p className='feed-comment-stat'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Comments
