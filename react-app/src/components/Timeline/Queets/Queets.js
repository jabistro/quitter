import "./Queets.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react'
import EditQueetModal from "./EditQueetModal";
import { BiMessage } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { FiShare } from 'react-icons/fi';
import ReactTimeAgo from 'react-time-ago';


const Queets = () => {

    const users = useSelector(state => state.user);
    const usersArr = Object.values(users);
    const sessionUser = useSelector(state => state.session.user);
    const queets = useSelector(state => state.queet);
    const queetsArr = Object.values(queets);
    const latestQueets = queetsArr.reverse();
    // queetsArr.forEach(queet => {
    //     latestQueets.unshift(queet);
    // })
    const comments = useSelector(state => state.comment);
    const commentsArr = Object.values(comments);
    const replies = [];
    console.log(replies)
    return (
        <div className="queets-wrap">
            {latestQueets.map(queet => {
                commentsArr.forEach(comment => { if (comment.queet.id === queet.id) replies.push(comment) })
                return (
                    <div key={queet.id} className="queets">
                        <Link className="all-queets-profile-pic-link" to={`/users/${queet.userId}`}>
                            <img className='all-queets-profile-pic' src={usersArr[queet.userId - 1]?.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : usersArr[queet.userId - 1].profile_pic} />
                        </Link>
                        <div className="all-queets-everything-minus-pic">
                            <div className="feed-queet-names-edit-and-content">
                                <div className="feed-queet-username-and-edit-btn">
                                    <Link className="queet-link" to={`/queets/${queet.id}`}>
                                        <div className="feed-queet-names">
                                            <p className="feed-queet-display-name">{usersArr[queet.userId - 1]?.display_name}</p>
                                            <p className="feed-queet-username">@{usersArr[queet.userId - 1].username}<div className="stupid-dot">·</div></p>
                                            <p className="timestamp-container">
                                                <ReactTimeAgo
                                                    className="timestamp"
                                                    date={queet.created_at}
                                                    locale='en-US'
                                                    timeStyle="twitter-first-minute"
                                                />
                                            </p>
                                        </div>
                                    </Link>
                                    {queet.userId === sessionUser.id &&
                                        <EditQueetModal queetId={queet.id} className="all-queets-edit-btn" />
                                    }
                                </div>
                                <div className="feed-queet-container">
                                    <Link className="queet-link" to={`/queets/${queet.id}`}>
                                        <div className="feed-queet">
                                            {queet.content.split('\n').map(line => (<p className="feed-queet-content-lines">{line}</p>))}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="feed-queet-icons">
                                <div className='feed-queet-icon-and-stat'>
                                    <BiMessage />
                                    <p className='feed-queet-stat'>{replies?.length}</p>
                                </div>
                                <div className='feed-queet-icon-and-stat'>
                                    <FaRetweet className="requeet-icon" />
                                    <p className='feed-queet-stat'></p>
                                </div>
                                <div className='feed-queet-icon-and-stat'>
                                    <FiHeart />
                                    <p className='feed-queet-stat'></p>
                                </div>
                                <div className='feed-queet-icon-and-stat'>
                                    <FiShare />
                                    <p className='feed-queet-stat'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Queets
