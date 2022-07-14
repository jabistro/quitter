import './EditProfile.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modifyUser } from '../../../../store/session';
import { AiOutlineClose } from 'react-icons/ai';
// import { useParams } from "react-router-dom";

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
        <div className='edit-profile-wrap'>
            <div className='edit-profile-header'>
                <div className='edit-profile-btn-and-title'>
                    <div onClick={() => setShowModal(false)} className='edit-close-btn-container'>
                        <AiOutlineClose className='edit-close-btn' />
                    </div>
                    <p className='edit-title-txt'>Edit profile</p>
                </div>
                <button onClick={onSubmit} type='submit' className='edit-profile-sumbit-btn'>Save</button>
            </div>
            <form className='edit-profile-form'>
                <div className='edit-profile-field-container'>
                    <label className='edit-label'>Name</label>
                    <input
                        className='edit-profile-input'
                        type="text"
                        name='display_name'
                        onChange={updateDisplayName}
                        value={displayName}
                        required
                    />
                </div>
                <div className='edit-profile-field-container'>
                    <label className='edit-label'>Username</label>
                    <input
                        className='edit-profile-input'
                        type="text"
                        name='username'
                        onChange={updateUsername}
                        value={username}
                        required
                    />
                </div>
                <div className='edit-profile-field-container'>
                    <label className='edit-label'>Email</label>
                    <input
                        className='edit-profile-input'
                        type="text"
                        name='email'
                        onChange={updateEmail}
                        value={email}
                        required
                    />
                </div>
                <div className='edit-profile-field-container'>
                    <label className='edit-label'>Header URL</label>
                    <input
                        className='edit-profile-input'
                        type="text"
                        name='header'
                        onChange={updateHeader}
                        value={header}
                    />
                </div>
                <div className='edit-profile-field-container'>
                    <label className='edit-label'>Profile Picture URL</label>
                    <input
                        className='edit-profile-input'
                        type="text"
                        name='profile-pic'
                        onChange={updateProfilePic}
                        value={profilePic}
                    />
                </div>
                <div className='edit-profile-field-container'>
                    <label className='edit-label'>Bio</label>
                    <textarea
                        className='edit-profile-input'
                        type="text"
                        name='bio'
                        onChange={updateBio}
                        value={bio}
                    />
                </div>
                <div className='edit-profile-field-container'>
                    <label className='edit-label'>Location</label>
                    <input
                        className='edit-profile-input'
                        type="text"
                        name='location'
                        onChange={updateLocation}
                        value={location}
                    />
                </div>
                <div className='edit-profile-field-container'>
                    <label className='edit-label'>Birthday</label>
                    <input
                        className='edit-profile-input'
                        type="text"
                        name='birthday'
                        onChange={updateBirthday}
                        value={birthday}
                    />
                </div>
            </form>
        </div>
    )
}

export default EditProfile
