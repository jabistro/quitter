import './SingleQueet.css';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import AddComment from '../Comments/AddComment';
import EditQueetModal from './EditQueetModal';
import { BiMessage } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { FiShare } from 'react-icons/fi';
import { MdKeyboardBackspace } from 'react-icons/md';

const SingleQueet = () => {

    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user.users);
    const usersArr = Object.values(users);
    const { queetId } = useParams();
    const queet = useSelector(state => state?.queet[queetId]);
    const comments = useSelector(state => state.comment);
    const commentsArr = Object.values(comments)
    const queetComments = commentsArr.filter(comment => Number(comment.queet.id) === Number(queetId))

    // <button className="single-queet-edit-btn" onClick={() => editHandler(queet)}>Edit</button>

    return (
        <div className='queet-comment-wrap'>
            <div className='thread-and-back-button'>
                <Link className='thread-back-link' to={"/"}>
                    <MdKeyboardBackspace className='back-button' />
                </Link>
                <h2 className='thread'>Queet</h2>
            </div>
            <div className="single-queet-block">
                <div className='single-username-and-edit-btn'>
                    <div className='single-queet-username'>@{usersArr[queet.userId - 1].username}</div>
                    {
                        queet.userId === sessionUser.id &&
                        <EditQueetModal className="single-queet-edit-btn" />
                    }
                </div>
                <div className='single-queet'>{queet.content}</div>
                <div className='single-queet-timestamp'>{queet.created_at}</div>
                <div className='single-queet-icons'>
                    <div className='single-queet-icon-and-stat'>
                        <BiMessage />
                        <p className='single-queet-icon-info'>{queetComments.length}</p>
                    </div>
                    <div className='single-queet-icon-and-stat'>
                        <FaRetweet />
                        <p className='single-queet-icon-info'></p>
                    </div>
                    <div className='single-queet-icon-and-stat'>
                        <FiHeart />
                        <p className='single-queet-icon-info'></p>
                    </div>
                    <div className='single-queet-icon-and-stat'>
                        <FiShare />
                        <p className='single-queet-icon-info'></p>
                    </div>
                </div>
            </div>
            <AddComment />
            <div className="all-comments-wrap">
                <Comments />
            </div>
        </div>
    )
}

export default SingleQueet
