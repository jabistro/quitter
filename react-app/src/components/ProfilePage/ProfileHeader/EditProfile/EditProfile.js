import './EditProfile.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modifyUser } from '../../../../store/session';

const EditProfile = ({ setShowModal }) => {

    const user = useSelector(state => state.session.user);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [header, setHeader] = useState(user.header);
    const [profilePic, setProfilePic] = useState(user.profile_pic);
    const [displayName, setDisplayName] = useState(user.display_name);
    const [bio, setBio] = useState(user.bio);
    const [location, setLocation] = useState(user.location);
    const [birthday, setBirthday] = useState(user.birthday);
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        const editingUser = {
            id: user.id,
            bio,
            birthday,
            display_name: displayName,
            email,
            header,
            location,
            profile_pic: profilePic,
            username
        }
        await dispatch(modifyUser(editingUser))
        setShowModal(false)
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updateHeader = (e) => {
        setHeader(e.target.value);
    };

    const updateProfilePic = (e) => {
        setProfilePic(e.target.value);
    };

    const updateDisplayName = (e) => {
        setDisplayName(e.target.value);
    };

    const updateBio = (e) => {
        setBio(e.target.value);
    };

    const updateLocation = (e) => {
        setLocation(e.target.value);
    };

    const updateBirthday = (e) => {
        setBirthday(e.target.value);
    };

    return (
        <div>
            <div>close button/edit profile/save button</div>
            <form className='edit-profile-form' onSubmit={onSubmit}>
                <div>
                    <label>display name
                        <input
                            className='edit-profile-display-name-input'
                            type="text"
                            name='display_name'
                            onChange={updateDisplayName}
                            value={displayName}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>username
                        <input
                            className='edit-profile-username-input'
                            type="text"
                            name='username'
                            onChange={updateUsername}
                            value={username}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>email
                        <input
                            className='edit-profile-email-input'
                            type="text"
                            name='email'
                            onChange={updateEmail}
                            value={email}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>header
                        <input
                            className='edit-profile-header-input'
                            type="text"
                            name='header'
                            onChange={updateHeader}
                            value={header}
                        />
                    </label>
                </div>
                <div>
                    <label>profile pic
                        <input
                            className='edit-profile-profile-pic-input'
                            type="text"
                            name='profile-pic'
                            onChange={updateProfilePic}
                            value={profilePic}
                        />
                    </label>
                </div>
                <div>
                    <label>bio
                        <textarea
                            className='edit-profile-bio-input'
                            type="text"
                            name='bio'
                            onChange={updateBio}
                            value={bio}
                        />
                    </label>
                </div>
                <div>
                    <label>location
                        <input
                            className='edit-profile-location-input'
                            type="text"
                            name='location'
                            onChange={updateLocation}
                            value={location}
                        />
                    </label>
                </div>
                <div>
                    <label>birthday
                        <input
                            className='edit-profile-birthday-input'
                            type="text"
                            name='birthday'
                            onChange={updateBirthday}
                            value={birthday}
                        />
                    </label>
                </div>
                <button type='submit' className='edit-profile-sumbit-btn'>Save</button>
            </form>
        </div>
    )
}

export default EditProfile
