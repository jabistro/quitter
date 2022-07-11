import "./ProfilePage.css";
import React from 'react'
import Sidebar from "../Timeline/Sidebar/Sidebar";
import ProfileFeed from "./ProfileFeed/ProfileFeed";
import Widgets from "../Timeline/Widgets/Widgets";

const ProfilePage = () => {
    return (
        <div className="profile-all-wrap">
            <Sidebar />
            <ProfileFeed />
            <Widgets />
        </div>
    )
}

export default ProfilePage
