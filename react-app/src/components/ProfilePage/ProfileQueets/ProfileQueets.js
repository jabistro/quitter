import './ProfileQueets.css';

import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import EditQueetModal from '../../Timeline/Queets/EditQueetModal';
import { BiMessage } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { FiHeart, FiShare } from 'react-icons/fi';

const ProfileQueets = () => {

    const sessionUser = useSelector(state => state.session.user);
    const queets = useSelector(state => state.queet);
    const queetsArr = Object.values(queets);
    const userQueets = queetsArr.filter(queet => queet.userId === sessionUser.id)
    const latestUserQueets = [];
    userQueets.forEach(queet => {
        latestUserQueets.unshift(queet);
    });
    console.log(latestUserQueets)

    return (
        <div className="profile-queets-wrap">
            {latestUserQueets.map(queet => {
                // commentsArr.forEach(comment => { { comment.queetId === queet.id && replies.push(comment) } })
                return (
                    <div key={queet.id} className="profile-queets">
                        <div className="profile-feed-queet-username-and-edit-btn">
                            <Link className="profile-queet-link" to={`/queets/${queet.id}`}>
                                <div className="profile-feed-queet-username">
                                    @{sessionUser.username}
                                    <ReactTimeAgo
                                        className="timestamp"
                                        date={queet.created_at}
                                        locale='en-US'
                                        timeStyle="twitter-first-minute"
                                    />
                                </div>
                            </Link>
                            {queet.userId === sessionUser.id &&
                                <EditQueetModal queetId={queet.id} className="profile-queets-edit-btn" />
                            }
                        </div>
                        <Link className="profile-queet-link" to={`/queets/${queet.id}`}>
                            <div className="profile-feed-queet">{queet.content}</div>
                        </Link>
                        <div className="profile-feed-queet-icons">
                            <div className='profile-feed-queet-icon-and-stat'>
                                <BiMessage />
                                <p className='profile-feed-queet-stat'></p>
                            </div>
                            <div className='profile-feed-queet-icon-and-stat'>
                                <FaRetweet className="requeet-icon" />
                                <p className='profile-feed-queet-stat'></p>
                            </div>
                            <div className='profile-feed-queet-icon-and-stat'>
                                <FiHeart />
                                <p className='profile-feed-queet-stat'></p>
                            </div>
                            <div className='profile-feed-queet-icon-and-stat'>
                                <FiShare />
                                <p className='profile-feed-queet-stat'></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default ProfileQueets
