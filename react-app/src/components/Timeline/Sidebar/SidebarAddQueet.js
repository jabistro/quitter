import './SidebarAddQueet.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQueet } from "../../../store/queets";
import { AiOutlinePicture } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const SidebarAddQueet = ({ setShowModal }) => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [imageBoxOpen, setImageBoxOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newQueet = {
            user_id: user.id,
            content
        }

        const queet = await dispatch(addQueet(newQueet))

        if (queet) reset();
    }

    const reset = () => {
        setContent('');
        setShowModal(false);
    }

    return (
        <div className="sidebar-add-queet-wrap">
            <form onSubmit={handleSubmit} className="sidebar-add-queet-form">
                <div className="sidebar-add-queet-first-half">
                    <div onClick={() => setShowModal(false)} className='sidebar-queet-close-btn-container'>
                        <AiOutlineClose className='sidebar-add-queet-close-btn' />
                    </div>
                    <img className='sidebar-profile-pic' src={user.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : user.profile_pic} alt='' />
                </div>
                <div className="sidebar-add-queet-second-half">
                    <div></div>
                    <textarea
                        className="sidebar-add-queet-input"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="What's on your mind? This is a safe space."
                    />
                    <div className="sidebar-icons-and-button">
                        <button disabled={!content} type="submit" className="sidebar-add-queet-btn">Queet</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SidebarAddQueet




{/* <AiOutlinePicture onClick={() => setImageBoxOpen(!imageBoxOpen)} className='sidebar-add-img-btn' /> */ }
{/* <div className="sidebar-queet-upload-img-wrap">
    {imageBoxOpen && (
        <form className="sidebar-queet-upload-img-form">
            <input
                className="sidebar-queet-upload-img-input"
                type="text"
                placeholder="Enter Image URL..."
            >
            </input>
            <button className="sidebar-queet-upload-img-btn">Add Image</button>
        </form>
    )}
</div> */}
