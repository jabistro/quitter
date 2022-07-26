import "./Queets.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react'
import EditQueetModal from "./EditQueetModal";
import { BiMessage } from 'react-icons/bi';
// import { FaRetweet } from 'react-icons/fa';
// import { FiHeart } from 'react-icons/fi';
// import { FiShare } from 'react-icons/fi';
import ReactTimeAgo from 'react-time-ago';
import NumberOfComments from "../Comments/NumberOfComments/NumberOfComments";
// import { Provider, LikeButton } from "@lyket/react";


const Queets = () => {

    const users = useSelector(state => state.user);
    const sessionUser = useSelector(state => state.session?.user);
    const queets = useSelector(state => state.queet);
    const queetsArr = Object.values(queets);
    const latestQueets = queetsArr.reverse();
    // queetsArr.forEach(queet => {
    //     latestQueets.unshift(queet);
    // })
    // const comments = useSelector(state => state.comment);
    // const commentsArr = Object.values(comments);
    // const replies = latestQueets.map(queet => {
    //     commentsArr.filter(comment => (comment.queet.id === queet.id)
    //     )
    // })
    // console.log(replies)
    // const replies = latestQueets.map(queet => {
    //     comments
    // })


    return (
        <div className="queets-wrap">
            {latestQueets?.map(queet => {
                // console.log(queet)
                // commentsArr.forEach(comment => console.log(comment))
                // replies = commentsArr?.filter(comment => (comment.queet.id === queet.id))
                // console.log(replies)
                return (
                    <div key={queet.id} className="queets">
                        <Link className="all-queets-profile-pic-link" to={`/users/${queet.userId}`}>
                            <img className='all-queets-profile-pic' src={users[queet.userId]?.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : users[queet.userId]?.profile_pic} alt='' />
                        </Link>
                        <div className="all-queets-everything-minus-pic">
                            <div className="feed-queet-names-edit-and-content">
                                <div className="feed-queet-username-and-edit-btn">
                                    <Link className="queet-link" to={`/queets/${queet.id}`}>
                                        <div className="feed-queet-names">
                                            <p className="feed-queet-display-name">{users[queet.userId]?.display_name}</p>
                                            <div className="feed-queet-username">@{users[queet.userId]?.username}<p className="stupid-dot">·</p></div>
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
                                    {queet.userId === sessionUser.id &&
                                        <EditQueetModal queetId={queet.id} className="all-queets-edit-btn" />
                                    }
                                </div>
                                <div className="feed-queet-container">
                                    <Link className="queet-link" to={`/queets/${queet.id}`}>
                                        <div className="feed-queet">
                                            {queet.content.split('\n').map(line => (<div key={line.id} id={queet.id} className="feed-queet-content-lines">{line}</div>))}
                                        </div>
                                        {queet.image_url &&
                                            <div className='feed-queet-img-container'>
                                                <img className='feed-queet-img' src={queet.image_url} alt='' />
                                            </div>
                                        }
                                    </Link>
                                </div>
                            </div>
                            <Link className="queet-link" to={`/queets/${queet.id}`}>
                                <div className="feed-queet-icons">
                                    <div className='feed-queet-icon-and-stat'>
                                        <BiMessage />
                                        <p className='feed-queet-stat'>
                                            <NumberOfComments queetId={queet.id} />
                                        </p>
                                    </div>
                                    {/* <div>
                                        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
                                            <LikeButton
                                                namespace="my-blog-post"
                                                id="how-to-beat-me-at-chess"
                                                component={LikeButton.templates.Twitter}
                                            />
                                        </Provider>
                                    </div> */}
                                    {/* <div className='feed-queet-icon-and-stat'>
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

export default Queets
