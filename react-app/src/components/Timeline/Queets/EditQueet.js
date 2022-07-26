import "./EditQueet.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { eraseQueet, modifyQueet } from "../../../store/queets";
import { useHistory } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { AiOutlinePicture } from 'react-icons/ai';

const EditQueet = ({ setShowModal, queet_id }) => {

    const allQueets = useSelector(state => state.queet);
    const editedQueet = allQueets[queet_id] || {};
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState(editedQueet.content);
    const [image, setImage] = useState(editedQueet.image_url);

    const updateImage = (e) => {
        const file = e.target.files[0];
        // console.log(file)
        setImage(file);
    }

    const removeImage = (e) => setImage(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editingQueet = {
            id: editedQueet.id,
            user_id: user.id,
            content,
            image_url: image
        }
        await dispatch(modifyQueet(editingQueet))
        setShowModal(false)
    }

    const deleteHandler = (e, queet) => {
        e.preventDefault();
        dispatch(eraseQueet(editedQueet))
        setShowModal(false)
        if (history.location.pathname === (`/users/${user.id}`)) {
            history.push(`/users/${user.id}`)
        } else { history.push("/") }
    }

    return (
        <div className="edit-queet-wrap">
            <div className="edit-queet-btn-and-title">
                <div className="edit-queet-top-left">
                    <div onClick={() => setShowModal(false)} className='edit-queet-close-btn-container'>
                        <AiOutlineClose className='edit-queet-close-btn' />
                    </div>
                    <h3 className="edit-queet-title">Edit queet</h3>
                </div>
                <div className="edit-queet-top-right">
                    <div className="edit-queet-img-upload">
                        <div className={!image ? "edit-queet-img-upload-container" : "edit-queet-img-upload-container-off"}>
                            {!image &&
                                <label className="edit-queet-img-upload-label"><AiOutlinePicture className="edit-queet-img-icon" />
                                    <input className="edit-queet-img-input" type="file" name="file"
                                        accept="image/png, image/jpeg, image/jpg" onChange={updateImage} />
                                </label>

                            }
                        </div>
                        {image &&
                            <div className="edit-queet-img-standby">
                                <div className="edit-queet-remove-img-btn-and-txt">
                                    <p className="edit-queet-remove-img-txt">Remove Image</p>
                                    <ImCancelCircle className="edit-queet-img-delete-btn" onClick={removeImage} />
                                </div>
                                <p className="edit-queet-img-name">Uploading: {image.name}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="edit-queet-form">
                <div>
                    <textarea
                        className="edit-queet-input"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="What's on your mind? This is a safe space."
                    />
                    {editedQueet.image_url &&
                        <div className='edit-queet-img-container'>
                            <img className='edit-queet-img' src={editedQueet.image_url} alt='' />
                        </div>
                    }
                </div>
                <div className="edit-and-delete-queet-btn">
                    <div className="edit-queet-progress-and-submit-btn">
                        <button disabled={(!content && !image) || content.length > 280} type="submit" className="submit-edit-queet-btn">Submit</button>
                        <div className="edit-queet-progress">
                            <span className={(content.length > 280 || (content.length === 0 && !image)) ? "edit-queet-char-total-red" : "edit-queet-char-total"}>{content.length}</span>
                            <p className="edit-queet-char-max">/280</p>
                        </div>
                    </div>
                    <div>
                        <button className="delete-queet-btn" onClick={(e) => deleteHandler(e, editedQueet)}>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditQueet
