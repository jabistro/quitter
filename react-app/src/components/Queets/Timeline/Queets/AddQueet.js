import "./AddQueet.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQueet } from "../../../../store/queets";

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
        <div>
            <form onSubmit={handleSubmit} className="add-queet-form">
                <div>
                    <label>
                        <textarea
                            className="add-queet-input"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            placeholder="What's happening?"
                        />
                    </label>
                </div>
                <button type="submit" className="add-queet">Queet</button>
            </form>
        </div>
    )
}

export default AddQueet
