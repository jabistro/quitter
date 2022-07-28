import './ProfileQueets.css';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import EditQueetModal from '../../Timeline/Queets/EditQueetModal';
import { BiMessage } from 'react-icons/bi';
// import { FaRetweet } from 'react-icons/fa';
// import { FiHeart, FiShare } from 'react-icons/fi';
import NumberOfComments from '../../Timeline/Comments/NumberOfComments/NumberOfComments';

const ProfileQueets = ({ userId }) => {

    // const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user);
    const usersArr = Object.values(users);
    const userInfo = usersArr[userId - 1]
    const queets = useSelector(state => state.queet);
    const queetsArr = Object.values(queets);
    const userQueets = queetsArr.filter(queet => queet.userId === Number(userId))
    const latestUserQueets = [];
    userQueets.forEach(queet => {
        latestUserQueets.unshift(queet);
    });

    return (
        <div className="profile-queets-wrap">
            {latestUserQueets?.map(queet => {
                // commentsArr.forEach(comment => { { comment.queetId === queet.id && replies.push(comment) } })
                return (
                    <div key={queet.id} className="profile-queets">
                        <img className='profile-queets-profile-pic' alt='' src={userInfo?.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : userInfo?.profile_pic} />
                        <div className='profile-queets-everything-minus-pic'>
                            <div className="profile-feed-queet-username-and-edit-btn">
                                <Link className="profile-queet-link" to={`/queets/${queet.id}`}>
                                    <div className="profile-feed-queet-names">
                                        <div className="feed-queet-display-name">{userInfo?.display_name}</div>
                                        <div className="feed-queet-username">@{userInfo?.username}<p className="stupid-dot">·</p></div>
                                        <div className="timestamp-container">
                                            <ReactTimeAgo
                                                className="timestamp"
                                                date={queet.created_at}
                                                locale='en-US'
                                                timeStyle="twitter-first-minute"
                                            />
                                        </div>
                                    </div>
                                </Link>
                                {queet.userId === userInfo.id &&
                                    <EditQueetModal queetId={queet.id} className="profile-page-queets-edit-btn" />
                                }
                            </div>
                            <div className="profile-feed-queet-container">
                                <Link className="queet-link" to={`/queets/${queet.id}`}>
                                    <div className="profile-feed-queet">
                                        {queet.content.split('\n').map(line => (<p className="profile-feed-queet-content-lines">{line}</p>))}
                                    </div>
                                    {queet.image_url &&
                                        <div className='profile-feed-queet-img-container'>
                                            <img className='profile-feed-queet-img' src={queet.image_url} alt='' />
                                        </div>
                                    }
                                </Link>
                            </div>
                            <Link className="queet-link" to={`/queets/${queet.id}`}>
                                <div className="profile-feed-queet-icons">
                                    <div className='profile-feed-queet-icon-and-stat'>
                                        <BiMessage />
                                        <p className='profile-feed-queet-stat'><NumberOfComments queetId={queet.id} /></p>
                                    </div>
                                    {/* <div className='profile-feed-queet-icon-and-stat'>
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
                                </div> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default ProfileQueets
