import "./ProfilePage.css";
import React from 'react'
import Sidebar from "../Timeline/Sidebar/Sidebar";
import ProfileFeed from "./ProfileFeed/ProfileFeed";
// import Widgets from "../Timeline/Widgets/Widgets";
import { useParams } from "react-router-dom";
import Motivations from "../Timeline/Widgets/Motivations/Motivations";
import Community from "../Timeline/Widgets/Community/Community";

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
                <Motivations />
                <Community />
            </div>
        </div>
    )
}

export default ProfilePage
