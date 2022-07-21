import './SingleQueet.css';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import AddComment from '../Comments/AddComment';
import EditQueetModal from './EditQueetModal';
import { BiMessage } from 'react-icons/bi';
// import { FaRetweet } from 'react-icons/fa';
// import { FiHeart } from 'react-icons/fi';
// import { FiShare } from 'react-icons/fi';
import { MdKeyboardBackspace } from 'react-icons/md';
import moment from 'moment';

const SingleQueet = () => {

    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user);
    const usersArr = Object.values(users);
    const { queetId } = useParams();
    const queet = useSelector(state => state?.queet[queetId]);
    const comments = useSelector(state => state.comment);
    const commentsArr = Object.values(comments)
    const queetComments = commentsArr.filter(comment => Number(comment.queet.id) === Number(queetId))
    // const image = queet.images[0];

    // <button className="single-queet-edit-btn" onClick={() => editHandler(queet)}>Edit</button>

    return (
        <div className='queet-comment-wrap'>
            <div className='thread-and-back-button'>
                <Link className='thread-back-link' to={"/"}>
                    <div className='single-queet-back-btn-container'>
                        <MdKeyboardBackspace className='single-queet-back-button' />
                    </div>
                </Link>
                <h2 className='thread'>Queet</h2>
            </div>
            <div className="single-queet-block">
                <div className='single-queet-pic-names-and-edit'>
                    <div className='single-queet-pic-and-names'>
                        <img className='single-queet-profile-pic' src={usersArr[queet.userId - 1]?.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : usersArr[queet.userId - 1]?.profile_pic} />
                        <div className='single-queet-names'>
                            <p className='single-queet-display-name'>{usersArr[queet.userId - 1]?.display_name}</p>
                            <p className='single-queet-username'>@{usersArr[queet.userId - 1]?.username}</p>
                        </div>
                    </div>
                    <div className="single-queet-edit-btn">
                        {
                            queet.userId === sessionUser.id &&
                            <EditQueetModal queetId={queetId} />
                        }
                    </div>
                </div>
                <div className="single-queet-container">
                    <div className="single-queet">
                        {queet.content.split('\n').map(line => (<p className="single-queet-content-lines">{line}</p>))}
                    </div>
                </div>
                <img className='single-queet-img' src={queet.image_url} alt='image' />
                <div className='single-queet-timestamp'>{moment(queet?.created_at).format('LT')}  ·  {moment(queet?.created_at).format('ll')}</div>
                <div className='single-queet-icons'>
                    <div className='single-queet-icon-and-stat'>
                        <BiMessage />
                        <p className='single-queet-icon-info'>{queetComments.length}</p>
                    </div>
                    {/* <div className='single-queet-icon-and-stat'>
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
                    </div> */}
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
