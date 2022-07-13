import './ProfileHeader.css';
import React from 'react'
import EditProfileModal from './EditProfile/EditProfileModal';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaBirthdayCake } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';

const ProfileHeader = () => {

    const user = useSelector(state => state.session.user);

    return (
        <div className='profile-header-wrap'>
            <div className='profile-header-pic-and-profile-pic'>
                <div className='profile-header-container'>
                    {/* <img className='profile-header' src='https://pbs.twimg.com/profile_banners/326835342/1559881342/600x200' /> */}
                </div>
                <div className='profile-prof-pic-and-edit-btn'>
                    <img className='profile-prof-pic' src={user.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : user.profile_pic} />
                    <div className='profile-edit-profile-btn-div'>
                        <EditProfileModal />
                    </div>
                </div>
            </div>
            <div className='profile-info'>

                <div className='profile-names'>
                    <p className='profile-display-name'>{user.display_name}</p>
                    <p className='profile-username'>@{user.username}</p>
                </div>
                <div className='profile-stats'>
                    <p className='profile-bio'>
                        {user.bio}
                    </p>
                    <div className='profile-stat-and-icon'>
                        <HiOutlineLocationMarker className='profile-icons' />
                        <p className='profile-location'>{user.location}</p>
                    </div>
                    <div className='profile-stat-and-icon'>
                        <FaBirthdayCake className='profile-icons' />
                        <p className='profile-birthday'>Born {user.birthday}</p>
                    </div>
                    <div className='profile-stat-and-icon'>
                        <BsCalendar3 className='profile-icons' />
                        <p className='profile-joined'>Joined {moment(user.joined).format('MMMM YYYY')}</p>
                    </div>
                </div>
                <div className='profile-relationships'>
                    <div className='profile-following-wrap'>
                        <p className='profile-following-amount'>3,234</p>
                        <p className='profile-following-txt'>Following</p>
                    </div>
                    <div className='profile-followers-wrap'>
                        <p className='profile-followers-amount'>2,323</p>
                        <p className='profile-followers-txt'>Followers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
