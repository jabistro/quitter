import "./ProfilePage.css";
import React from 'react'
import Sidebar from "../Timeline/Sidebar/Sidebar";
import ProfileFeed from "./ProfileFeed/ProfileFeed";
import Widgets from "../Timeline/Widgets/Widgets";
import { useParams } from "react-router-dom";

const ProfilePage = () => {

    let { userId } = useParams();

    return (
        <div className="profile-all-wrap">
            <div className="profile-left">
                <Sidebar />
            </div>
            <div className="profile-center">
                <ProfileFeed userId={userId} />
            </div>
            <div className="profile-right">
                <Widgets />
            </div>
        </div>
    )
}

export default ProfilePage
