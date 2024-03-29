import './EditProfile.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modifyUser } from '../../../../store/users';
import { AiOutlineClose } from 'react-icons/ai';
// import UploadPicture from '../../../ImageUpload/UploadPicture';
// import { useParams } from "react-router-dom";

const EditProfile = ({ setShowModal }) => {

    const [errors, setErrors] = useState([]);
    const userId = useSelector(state => state.session.user.id);
    const users = useSelector(state => state.user)
    const user = users[userId]
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    let [header, setHeader] = useState(user.header);
    let [profilePic, setProfilePic] = useState(user.profile_pic);
    const [displayName, setDisplayName] = useState(user.display_name);
    const [bio, setBio] = useState(user.bio);
    const [location, setLocation] = useState(user.location);
    const [birthday, setBirthday] = useState(new Date(user.birthday) || new Date());
    const dispatch = useDispatch();
    const today = new Date();
    const day = 60 * 60 * 24 * 1000;
    const yesterday = new Date(today.getTime() - day)





    const onSubmit = async (e) => {
        e.preventDefault();

        // if (profilePic && !profilePic.startsWith('https://')) {
        //     setErrors(['Profile picture url must start with https:// and end with either .png, .jpg, .jpeg, or .gif'])
        //     return
        // } else if (profilePic && !profilePic.endsWith('.png')) {
        //     setErrors(['Profile picture url must start with https:// and end with either .png, .jpg, .jpeg, or .gif'])
        //     return
        // } else if (profilePic && !profilePic.endsWith('.jpg')) {
        //     setErrors(['Profile picture url must start with https:// and end with either .png, .jpg, .jpeg, or .gif'])
        //     return
        // } else if (profilePic && !profilePic.endsWith('.jpeg')) {
        //     setErrors(['Profile picture url must start with https:// and end with either .png, .jpg, .jpeg, or .gif'])
        //     return
        // } else if (profilePic && !profilePic.endsWith('.gif')) {
        //     setErrors(['Profile picture url must start with https:// and end with either .png, .jpg, .jpeg, or .gif'])
        //     return
        // }

        // const picArr = ['png', 'jpg', 'jpeg', 'gif'];

        // if (profilePic) {
        //     if (!profilePic.startsWith('https://')) {
        //         setErrors(['Profile picture url must start with https:// and end with either .png, .jpg, .jpeg, or .gif'])
        //         return
        //     } else {
        //         let splitProfile = profilePic.split('.')
        //         if (!picArr.includes(splitProfile[splitProfile.length - 1])) {
        //             setErrors(['Profile picture url must end with either .png, .jpg, .jpeg, or .gif'])
        //             return
        //         }
        //     }
        // }


        //         if (profilePic) {
        //             (!profilePic.startsWith('https://')
        //         }
        //         !profilePic.endsWith('.png') ||
        //             !profilePic.endsWith('.jpg') ||
        //             !profilePic.endsWith('.jpeg') ||
        //             !profilePic.endsWith('.gif'))
        //         ) {
        //     setErrors(['Profile picture url must start with https:// and end with either .png, .jpg, .jpeg, or .gif'])
        //     return
        // }

        // if (header) {
        //     if (!header.startsWith('https://')) {
        //         setErrors(['Header url must start with https:// and end with either .png, .jpg, .jpeg, or .gif'])
        //         return
        //     } else {
        //         let splitHeader = header.split('.')
        //         if (!picArr.includes(splitHeader[splitHeader.length - 1])) {
        //             setErrors(['Header url must end with either .png, .jpg, .jpeg, or .gif'])
        //             return
        //         }
        //     }
        // }


        // if (!profilePic) {
        //     profilePic = "https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg"
        // }
        // if (header &&
        //     (!header.startsWith('https://') ||
        //         !header.endsWith('.png') ||
        //         !header.endsWith('.jpg') ||
        //         !header.endsWith('.jpeg') ||
        //         !header.endsWith('.gif'))
        // ) {
        //     setErrors(['Header url must start with https:// and end with either .png, .jpg, .jpeg, or .gif'])
        //     return
        // }
        // if (!header) {
        //     header = "https://p.favim.com/orig/2019/04/12/blue-solid-color-header-Favim.com-7052292.jpg"
        // }

        const editingUser = {
            id: user.id,
            bio,
            birthday: birthday?.toISOString().split('T')[0],
            display_name: displayName,
            email,
            header,
            location,
            profile_pic: profilePic,
            username
        }

        const data = await dispatch(modifyUser(editingUser))
        if (data) {
            setErrors(data)
        } else {
            setShowModal(false)
        }
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updateHeader = (e) => {
        const file = e.target.files[0];
        setHeader(file);
    };

    // const removeHeader = (e) => setHeader(null);

    const updateProfilePic = (e) => {
        const file = e.target.files[0];
        setProfilePic(file);
    };

    // const removeProfilePic = (e) => setProfilePic(null);

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
        if (e.target.value) {
            setBirthday(new Date(e.target.value));
        }
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
                <div>
                    {errors?.map((error, ind) => (
                        <div className='edit-profile-errors' key={ind}>{error}</div>
                    ))}
                </div>
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
                        type="file"
                        name='header'
                        accept='image/png, image/jpeg, image/jpg'
                        onChange={updateHeader}
                    />
                </div>
                <div className='edit-profile-field-container'>
                    <label className='edit-label'>Profile Picture URL</label>
                    {/* <UploadPicture /> */}
                    <input
                        className='edit-profile-input'
                        type="file"
                        name='profile-pic'
                        accept='image/png, image/jpeg, image/jpg'
                        onChange={updateProfilePic}
                    // value={profilePic}
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
                        className='edit-profile-birthday-input'
                        type="date"
                        name='birthday'
                        max={yesterday.toISOString().split('T')[0]}
                        onChange={updateBirthday}
                        value={birthday?.toISOString().split('T')[0]}
                    />
                </div>
            </form>
        </div>
    )
}

export default EditProfile
