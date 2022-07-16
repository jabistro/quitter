import "./AddQueet.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQueet } from "../../../store/queets";
import ProgressBar from "@ramonak/react-progress-bar";
// import { AiOutlinePicture } from 'react-icons/ai';
// import { Link } from "react-router-dom";

const AddQueet = () => {

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    // const [imageBoxOpen, setImageBoxOpen] = useState(false);

    const contentHandler = (e) => {
        setContent(e.target.value)
    }

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
                <img className='add-queet-profile-pic' src={user.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : user.profile_pic} />
                <div className="add-queet-both-halves">
                    <div className="add-queet-first-half">
                        <textarea
                            className="add-queet-input"
                            type="text"
                            value={content}
                            onChange={contentHandler}
                            required
                            placeholder="What's on your mind? This is a safe space."
                        />
                    </div>
                    <div className="add-queet-second-half">
                        <div className="add-queet-progress-and-button">
                            <div className="add-queet-progress">
                                <span className={(content.length > 280 || content.length === 0) ? "add-queet-char-total-red" : "add-queet-char-total"}>{content.length}</span>
                                <p className="add-queet-char-max">/280</p>
                            </div>
                            <button disabled={!content || content.length > 280} type="submit" className="add-queet-btn">Queet</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddQueet





{/* <div className="queet-upload-img-wrap">
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
</div> */}
