import './ProfileHeader.css';
import React, { useState } from 'react'
import EditProfileModal from './EditProfile/EditProfileModal';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaBirthdayCake } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import { ProfilePicModal } from './ProfileImages/ProfilePicModal';
import ProfilePicZoom from './ProfileImages/ProfilePicZoom';
import { Modal } from '../../../context/Modal';
import ProfileHeaderZoom from './ProfileImages/ProfileHeaderZoom';

const ProfileHeader = ({ userId }) => {

    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user);
    const userInfo = users[userId]
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showHeaderModal, setShowHeaderModal] = useState(false);

    return (
        <div className='profile-header-wrap'>
            <div className='profile-header-pic-and-profile-pic'>
                <div className='profile-header-container'>
                    <img onClick={() => setShowHeaderModal(true)} className='profile-header' alt='' src={userInfo?.header === '' ? 'https://p.favim.com/orig/2019/04/12/blue-solid-color-header-Favim.com-7052292.jpg' : userInfo?.header} />
                    {showHeaderModal && (
                        <Modal onClose={() => setShowHeaderModal(false)}>
                            <ProfileHeaderZoom userInfo={userInfo} setShowModal={setShowHeaderModal} />
                        </Modal>
                    )}
                </div>
                <div className='profile-prof-pic-and-edit-btn'>
                    <img onClick={() => setShowProfileModal(true)} className='profile-prof-pic' alt='' src={userInfo?.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : userInfo?.profile_pic} />
                    {showProfileModal && (
                        <ProfilePicModal onClose={() => setShowProfileModal(false)}>
                            <ProfilePicZoom className="profile-pic-zoom-modal" userInfo={userInfo} setShowModal={setShowProfileModal} />
                        </ProfilePicModal>
                    )}
                    <div className='profile-edit-profile-btn-div'>
                        {sessionUser.id === Number(userId) && <EditProfileModal />}
                    </div>
                </div>
            </div>
            <div className='profile-info'>

                <div className='profile-names'>
                    <p className='profile-display-name'>{userInfo?.display_name}</p>
                    <p className='profile-username'>@{userInfo?.username}</p>
                </div>
                <div className='profile-stats'>
                    <p className='profile-bio'>
                        {userInfo?.bio}
                    </p>
                    <div className='profile-stat-and-icon'>
                        <HiOutlineLocationMarker className='profile-icons' />
                        <p className='profile-location'>{userInfo?.location}</p>
                    </div>
                    <div className='profile-stat-and-icon'>
                        <FaBirthdayCake className='profile-icons' />
                        <p className='profile-birthday'>Born {moment(userInfo?.birthday).format('MMMM Do YYYY')}</p>
                    </div>
                    <div className='profile-stat-and-icon'>
                        <BsCalendar3 className='profile-icons' />
                        <p className='profile-joined'>Joined {moment(userInfo?.joined).format('MMMM YYYY')}</p>
                    </div>
                </div>
                {/* <div className='profile-relationships'>
                    <div className='profile-following-wrap'>
                        <p className='profile-following-amount'>3,234</p>
                        <p className='profile-following-txt'>Following</p>
                    </div>
                    <div className='profile-followers-wrap'>
                        <p className='profile-followers-amount'>2,323</p>
                        <p className='profile-followers-txt'>Followers</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ProfileHeader
