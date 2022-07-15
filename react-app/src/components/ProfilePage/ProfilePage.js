import "./ProfilePage.css";
import React from 'react'
import Sidebar from "../Timeline/Sidebar/Sidebar";
import ProfileFeed from "./ProfileFeed/ProfileFeed";
import Widgets from "../Timeline/Widgets/Widgets";
import { useParams } from "react-router-dom";

const ProfilePage = () => {

    const { userId } = useParams();

    return (
        <div className="profile-all-wrap">
            <div className='profile-all-left'>
                <Sidebar />
            </div>
            <div className='profile-all-center'>
                <ProfileFeed userId={userId} className='profile-all-feed' />
            </div>
            <div className='profile-all-right'>
                {/* <Widgets /> */}
            </div>
        </div>
    )
}

export default ProfilePage
