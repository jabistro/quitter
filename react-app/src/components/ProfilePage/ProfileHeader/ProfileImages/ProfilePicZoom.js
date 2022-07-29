import './ProfilePicZoom.css';
import React from 'react'

const ProfilePicZoom = ({ userInfo }) => {
    return (
        <div className='profile-pic-zoom-img-container'>
            <img className='profile-pic-zoom-img' alt='' src={userInfo?.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : userInfo?.profile_pic} />
        </div>
    )
}

export default ProfilePicZoom
