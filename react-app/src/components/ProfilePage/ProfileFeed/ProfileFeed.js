import "./ProfileFeed.css";
import { MdKeyboardBackspace } from 'react-icons/md';
import React from 'react'
import { Link } from "react-router-dom";
import AddQueet from "../../Timeline/Queets/AddQueet";
import { useSelector } from "react-redux";
import ProfileQueets from "../ProfileQueets/ProfileQueets";

const ProfileFeed = () => {

    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="profile-feed-wrap">
            <div className="profile-header-wrap">
                <Link className='profile-back-link' to={"/"}>
                    <MdKeyboardBackspace className='back-button' />
                </Link>
                <h2 className="profile-title">@{sessionUser.username}</h2>
            </div>
            <div className="profile-add-queet">
                <AddQueet />
            </div>
            <div>
                <ProfileQueets />
            </div>
        </div>
    )
}

export default ProfileFeed
