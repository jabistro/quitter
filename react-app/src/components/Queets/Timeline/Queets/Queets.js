import "./Queets.css";
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import React from 'react'
import EditQueetModal from "./EditQueetModal";
import { BiMessage } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { FiShare } from 'react-icons/fi';
import ReactTimeAgo from 'react-time-ago'


const Queets = () => {

    const users = useSelector(state => state.user.users);
    const usersArr = Object.values(users);
    const sessionUser = useSelector(state => state.session.user);
    const queets = useSelector(state => state.queet);
    const queetsArr = Object.values(queets);
    const latestQueets = [];
    queetsArr.map(queet => {
        latestQueets.unshift(queet);
    })
    const comments = useSelector(state => state.comment);
    const commentsArr = Object.values(comments);

    return (
        <div className="queets-wrap">
            {latestQueets.map(queet => {
                return (
                    <div key={queet.id} className="queets">
                        <div className="feed-queet-username-and-edit-btn">
                            <Link className="queet-link" to={`/queets/${queet.id}`}>
                                <div className="feed-queet-username">
                                    @{usersArr[queet.userId - 1].username}
                                    <ReactTimeAgo
                                        className="timestamp"
                                        date={queet.created_at}
                                        locale='en-US'
                                        timeStyle="twitter"
                                    />
                                </div>
                            </Link>
                            {queet.userId === sessionUser.id &&
                                <EditQueetModal className="all-queets-edit-btn" />
                            }
                        </div>
                        <Link className="queet-link" to={`/queets/${queet.id}`}>
                            <div className="feed-queet">{queet.content}</div>
                        </Link>
                        <div className="feed-queet-icons">
                            <div className='feed-queet-icon-and-stat'>
                                <BiMessage />

                                <p className='feed-queet-icon-info'></p>
                            </div>
                            <div className='feed-queet-icon-and-stat'>
                                <FaRetweet />
                                <p className='feed-queet-icon-info'></p>
                            </div>
                            <div className='feed-queet-icon-and-stat'>
                                <FiHeart />
                                <p className='feed-queet-icon-info'></p>
                            </div>
                            <div className='feed-queet-icon-and-stat'>
                                <FiShare />
                                <p className='feed-queet-icon-info'></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Queets
