import "./AddQueet.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQueet } from "../../../store/queets";
// import { useHistory } from "react-router-dom";
// import ProgressBar from "@ramonak/react-progress-bar";
import { AiOutlinePicture } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
// import { Link } from "react-router-dom";
// import EmojiPicker from "../Emojis/EmojiPicker";

const AddQueet = () => {

    // const history = useHistory();
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    // const [hasSubmitted, setHasSubmitted] = useState(false);
    const [content, setContent] = useState('');
    // const [errors, setErrors] = useState([]);
    // const [imageBoxOpen, setImageBoxOpen] = useState(false);

    const contentHandler = (e) => setContent(e.target.value);

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const removeImage = (e) => setImage(null);

    const reset = () => setContent('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setHasSubmitted(true);

        const newQueet = {
            user_id: user.id,
            content,
            image_url: image
        }
        const queet = await dispatch(addQueet(newQueet))

        // const newImage = {
        //     image,
        //     queetId: newQueet.id
        // }
        // const picture = await dispatch(uploadImage(newImage));

        if (queet) {
            reset();
            removeImage();
        }
    }


    return (
        <div className="add-queet-wrap">
            <form onSubmit={handleSubmit} className="add-queet-form">
                <img className='add-queet-profile-pic' src={user.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : user.profile_pic} alt="" />
                <div className="add-queet-both-halves">
                    <div className="add-queet-first-half">
                        <textarea
                            className="add-queet-input"
                            type="text"
                            value={content}
                            onChange={contentHandler}
                            placeholder="What's on your mind? This is a safe space."
                        />
                    </div>
                    <div className="add-queet-second-half">
                        <div className="add-queet-img-upload">
                            <div className={!image ? "add-queet-img-upload-container" : "add-queet-img-upload-container-off"}>
                                {!image &&
                                    <label className="add-queet-img-upload-label"><AiOutlinePicture className="add-queet-img-icon" />
                                        <input className="add-queet-img-input" type="file" name="file"
                                            accept="image/png, image/jpeg, image/jpg" onChange={updateImage} />
                                    </label>

                                }
                            </div>
                            {image &&
                                <div className="add-queet-img-standby">
                                    <ImCancelCircle className="add-queet-img-delete-btn" onClick={removeImage} />
                                    <p className="add-queet-img-name">{image.name}</p>
                                </div>
                            }
                            {/* <EmojiPicker /> */}
                        </div>
                        <div className="add-queet-progress-and-button">
                            <div className="add-queet-progress">
                                <span className={(content.length > 280 || (!image && content.length === 0)) ? "add-queet-char-total-red" : "add-queet-char-total"}>{content.length}</span>
                                <p className="add-queet-char-max">/280</p>
                            </div>
                            <button disabled={(!content && !image) || content.length > 280} type="submit" className="add-queet-btn">Queet</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddQueet





/* <div className="queet-upload-img-wrap">
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
</div> */
