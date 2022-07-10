import "./AddQueet.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQueet } from "../../../../store/queets";
import { AiOutlinePicture } from 'react-icons/ai';

const AddQueet = () => {

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

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
                <div className="add-queet-first-half">
                    <img className='profile-pic' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/medical-recovery-2070639-1750321.png' alt='' />
                    <div>
                        <label>
                            <input
                                className="add-queet-input"
                                type="text"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                                placeholder="What's happening?"
                            />
                        </label>
                    </div>
                </div>
                <div className="add-queet-second-half">
                    <div className="icons-and-button">
                        <AiOutlinePicture className='add-img-btn' />
                        <button disabled={!content} type="submit" className="add-queet-btn">Queet</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddQueet
