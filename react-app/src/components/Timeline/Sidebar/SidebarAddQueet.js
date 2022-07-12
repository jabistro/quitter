import './SidebarAddQueet.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQueet } from "../../../store/queets";
import { AiOutlinePicture } from 'react-icons/ai';

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
                    <img className='profile-pic' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/medical-recovery-2070639-1750321.png' alt='' />
                    <div>
                        <label>
                            <textarea
                                className="sidebar-add-queet-input"
                                type="text"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                                placeholder="What's on your mind? This is a safe space."
                            />
                        </label>
                    </div>
                </div>
                <div className="sidebar-add-queet-second-half">
                    <div className="sidebar-icons-and-button">
                        <AiOutlinePicture onClick={() => setImageBoxOpen(!imageBoxOpen)} className='sidebar-add-img-btn' />
                        <button disabled={!content} type="submit" className="sidebar-add-queet-btn">Queet</button>
                    </div>
                </div>
                <div className="sidebar-queet-upload-img-wrap">
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
                </div>
            </form>
        </div>
    )
}

export default SidebarAddQueet
