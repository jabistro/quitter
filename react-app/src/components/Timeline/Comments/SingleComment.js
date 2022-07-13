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
                <Link className='comment-back-link' to={`/queets/${comment.queet.id}`}>
                    <MdKeyboardBackspace className='single-comment-back-button' />
                </Link>
                <h2 className='thread'>Comment</h2>
            </div>
            <div className="single-comment-block">
                <div className='single-comment-username-and-edit-btn'>
                    <div className='single-comment-username'>
                        {usersArr[comment.userId - 1].display_name}
                        @{usersArr[comment.userId - 1].username}
                    </div>
                    {
                        comment.userId === sessionUser.id &&
                        <EditCommentModal queetId={comment.queet.id} commentId={commentId} className="single-comment-edit-btn" />
                    }
                </div>
                <div className='single-comment'>{comment.content}</div>
                <div className='single-comment-timestamp'>{comment.created_at}</div>
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
            {/* <AddComment /> */}
        </div>
    )
}

export default SingleComment
