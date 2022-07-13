import './SingleComment.css'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import AddComment from '../Comments/AddComment';
import { BiMessage } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { FiShare } from 'react-icons/fi';
import EditCommentModal from './EditCommentModal';
import { MdKeyboardBackspace } from 'react-icons/md';
import moment from 'moment';

const SingleComment = () => {

    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user.users);
    const usersArr = Object.values(users);
    const { commentId } = useParams();
    const comment = useSelector(state => state?.comment[commentId]);


    // <button className="single-queet-edit-btn" onClick={() => editHandler(queet)}>Edit</button>

    return (
        <div className='single-comment-wrap'>
            <div className='comment-and-back-button'>
                <Link className='comment-back-link' to={"/"}>
                    <MdKeyboardBackspace className='single-comment-back-button' />
                </Link>
                <h2 className='comment'>Comment</h2>
            </div>
            <div className="single-comment-block">
                <div className='single-comment-pic-names-and-edit'>
                    <div className='single-comment-pic-and-names'>
                        <img className='single-comment-profile-pic' src={sessionUser.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : sessionUser.profile_pic} />
                        <div className='single-comment-names'>
                            <p className='single-comment-display-name'>{usersArr[comment.queet.userId - 1].display_name}</p>
                            <p className='single-comment-username'>@{usersArr[comment.queet.userId - 1].username}</p>
                        </div>
                    </div>
                    <div className="single-comment-edit-btn">
                        {
                            comment.queet.userId === sessionUser.id &&
                            <EditCommentModal commentId={commentId} />
                        }
                    </div>
                </div>
                <div className='single-comment'>{comment.content}</div>
                <div className='single-comment-timestamp'>{moment(comment.created_at).format('LT')}  ·  {moment(comment.created_at).format('ll')}</div>
                <div className='single-comment-icons'>
                    <div className='single-comment-icon-and-stat'>
                        <BiMessage />
                        <p className='single-comment-icon-info'></p>
                    </div>
                    <div className='single-comment-icon-and-stat'>
                        <FaRetweet />
                        <p className='single-comment-icon-info'></p>
                    </div>
                    <div className='single-comment-icon-and-stat'>
                        <FiHeart />
                        <p className='single-comment-icon-info'></p>
                    </div>
                    <div className='single-comment-icon-and-stat'>
                        <FiShare />
                        <p className='single-comment-icon-info'></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComment
