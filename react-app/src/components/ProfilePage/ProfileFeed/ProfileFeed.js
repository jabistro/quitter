import "./ProfileFeed.css";
import { MdKeyboardBackspace } from 'react-icons/md';
import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileQueets from "../ProfileQueets/ProfileQueets";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const ProfileFeed = ({ userId }) => {

    // const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user);
    const userInfo = users[userId]
    const queets = useSelector(state => state.queet);
    const queetsArr = Object.values(queets);
    const userQueets = queetsArr?.filter(queet => queet.userId === Number(userId))

    return (
        <div className="profile-feed-wrap">
            <div className="profile-title-wrap">
                {/* <Link className='profile-back-link' to={"/"}>
                    <div className="profile-feed-back-button-container">
                        <MdKeyboardBackspace className='profile-feed-back-button' />
                    </div>
                </Link> */}
                <div className="profile-title-and-tweet-ammount">
                    <p className="profile-title">{userInfo?.display_name === '' ? '' : userInfo?.display_name}</p>
                    <p className="profile-amount-of-tweets">{userQueets.length} Tweets</p>
                </div>
            </div>
            <ProfileHeader userId={userId} />
            <ProfileQueets userId={userId} />
        </div>
    )
}

export default ProfileFeed
