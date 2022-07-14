import "./AddQueet.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQueet } from "../../../store/queets";
import { AiOutlinePicture } from 'react-icons/ai';
import { Link } from "react-router-dom";

const AddQueet = () => {

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
    }

    return (
        <div className="add-queet-wrap">
            <form onSubmit={handleSubmit} className="add-queet-form">
                <Link className="add-queet-profile-pic-link" to={`/users/${user.id}`}>
                    <img className='add-queet-profile-pic' src={user.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : user.profile_pic} />
                </Link>
                <div className="both-halves">
                    <div className="add-queet-first-half">
                        <div>
                            <label>
                                <textarea
                                    className="add-queet-input"
                                    type="text"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                    placeholder="What's on your mind? This is a safe space."
                                />
                            </label>
                        </div>
                    </div>
                    <div className="add-queet-second-half">
                        <div className="icons-and-button">
                            <AiOutlinePicture onClick={() => setImageBoxOpen(!imageBoxOpen)} className='add-img-btn' />
                            <button disabled={!content} type="submit" className="add-queet-btn">Queet</button>
                        </div>
                    </div>
                    <div className="queet-upload-img-wrap">
                        {imageBoxOpen && (
                            <form className="queet-upload-img-form">
                                <input
                                    className="queet-upload-img-input"
                                    type="text"
                                    placeholder="Enter Image URL..."
                                >
                                </input>
                                <button className="queet-upload-img-btn">Add Image</button>
                            </form>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddQueet
