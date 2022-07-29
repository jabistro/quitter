import "./AddComment.css";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { addComment } from "../../../store/comments";
import { AiOutlinePicture } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

const AddComment = () => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const { queetId } = useParams();
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

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
        const newComment = {
            user_id: user.id,
            queet_id: queetId,
            content,
            image_url: image
        }

        const comment = await dispatch(addComment(newComment))

        if (comment) {
            reset();
            removeImage();
        }
    }

    const reset = () => {
        setContent('');
    }

    return (
        <div className="add-comment-wrap">
            <form onSubmit={handleSubmit} className="add-comment-form">
                <img className='add-comment-profile-pic' alt='' src={user.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : user.profile_pic} />
                <div className="add-comment-both-halves">
                    <div className="add-comment-first-half">
                        <textarea
                            className="add-comment-input"
                            type="text"
                            value={content}
                            onChange={contentHandler}
                            placeholder="Queet your reply."
                        />
                    </div>
                    <div className="add-comment-second-half">
                        <div className="add-comment-img-upload">
                            <div className={!image ? "add-comment-img-upload-container" : "add-comment-img-upload-container-off"}>
                                {!image &&
                                    <label className="add-comment-img-upload-label"><AiOutlinePicture className="add-comment-img-icon" />
                                        <input className="add-comment-img-input" type="file" name="file"
                                            accept="image/png, image/jpeg, image/jpg" onChange={updateImage} />
                                    </label>

                                }
                            </div>
                            {image &&
                                <div className="add-comment-img-standby">
                                    <ImCancelCircle className="add-comment-img-delete-btn" onClick={removeImage} />
                                    <p className="add-comment-img-name">{image.name}</p>
                                </div>
                            }
                        </div>
                        <div className="add-comment-progress-and-button">
                            <div className="add-comment-progress">
                                <span className={(content.length > 280 || (!image && content.length === 0)) ? "add-comment-char-total-red" : "add-comment-char-total"}>{content.length}</span>
                                <p className="add-comment-char-max">/280</p>
                            </div>
                            <button disabled={(!content && !image) || content.length > 280} type="submit" className="add-comment-btn">Reply</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddComment
