import './SidebarAddQueet.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQueet } from "../../../store/queets";
import { AiOutlinePicture } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

const SidebarAddQueet = ({ setShowModal }) => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    // const [imageBoxOpen, setImageBoxOpen] = useState(false);

    const contentHandler = (e) => {
        setContent(e.target.value)
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const removeImage = (e) => setImage(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newQueet = {
            user_id: user.id,
            content,
            image_url: image
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
            <div className='sidebar-add-queet-close-btn-and-title'>
                <div onClick={() => setShowModal(false)} className='sidebar-add-queet-close-btn-container'>
                    <AiOutlineClose className='sidebar-add-queet-close-btn' />
                </div>
                <p className='sidebar-add-queet-title'>Add queet</p>
            </div>
            <form onSubmit={handleSubmit} className="sidebar-add-queet-form">
                <img className='sidebar-add-queet-profile-pic' src={user.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : user.profile_pic} alt="" />
                <div className="sidebar-add-queet-both-halves">
                    <div className="sidebar-add-queet-first-half">
                        <textarea
                            className="sidebar-add-queet-input"
                            type="text"
                            value={content}
                            onChange={contentHandler}
                            placeholder="What's on your mind? This is a safe space."
                        />
                    </div>
                    <div className="sidebar-add-queet-second-half">
                        <div className="sidebar-add-queet-img-upload">
                            <div className={!image ? "sidebar-add-queet-img-upload-container" : "sidebar-add-queet-img-upload-container-off"}>
                                {!image &&
                                    <label className="sidebar-add-queet-img-upload-label"><AiOutlinePicture className="sidebar-add-queet-img-icon" />
                                        <input className="sidebar-add-queet-img-input" type="file" name="file"
                                            accept="image/png, image/jpeg, image/jpg" onChange={updateImage} />
                                    </label>

                                }
                            </div>
                            {image &&
                                <div className="sidebar-add-queet-img-standby">
                                    <ImCancelCircle className="sidebar-add-queet-img-delete-btn" onClick={removeImage} />
                                    <p className="sidebar-add-queet-img-name">{image.name}</p>
                                </div>
                            }
                        </div>
                        <div className="sidebar-add-queet-progress-and-button">
                            <div className="sidebar-add-queet-progress">
                                <span className={(content.length > 280 || (!image && content.length === 0)) ? "sidebar-add-queet-char-total-red" : "sidebar-add-queet-char-total"}>{content.length}</span>
                                <p className="sidebar-add-queet-char-max">/280</p>
                            </div>
                            <button disabled={(!content && !image) || content.length > 280} type="submit" className="sidebar-add-queet-btn">Queet</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SidebarAddQueet




/* <AiOutlinePicture onClick={() => setImageBoxOpen(!imageBoxOpen)} className='sidebar-add-img-btn' /> */
/* <div className="sidebar-queet-upload-img-wrap">
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
</div> */
