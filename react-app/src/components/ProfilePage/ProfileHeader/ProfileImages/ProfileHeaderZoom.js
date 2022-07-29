import './ProfileHeaderZoom.css';
import React from 'react'

const ProfileHeaderZoom = ({ userInfo }) => {
    return (
        <div className='profile-header-zoom-img-container'>
            <img className='profile-header-zoom-img' alt='' src={userInfo?.header === '' ? 'https://p.favim.com/orig/2019/04/12/blue-solid-color-header-Favim.com-7052292.jpg' : userInfo?.header} />
        </div>
    )
}

export default ProfileHeaderZoom
