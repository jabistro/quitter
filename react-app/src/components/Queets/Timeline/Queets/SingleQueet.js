import './SingleQueet.css';
import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import AddComment from '../Comments/AddComment';

const SingleQueet = () => {

    const history = useHistory()
    const user = useSelector(state => state.session.user);
    const { queetId } = useParams();
    const queet = useSelector(state => state?.queet[queetId]);

    const editHandler = queet => {
        history.push(`/queets/edit/${queet.id}`)
    }

    return (
        <div className='queet-comment-wrap'>
            <div className="queet">
                <div>User: {queet.userId}</div>
                <div>{queet.content}</div>
                {
                    queet.userId === user.id &&
                    <button className="edit-queet-btn" onClick={() => editHandler(queet)}>Edit</button>
                }
            </div>
            <AddComment />
            <div className="comments-wrap">
                <Comments />
            </div>
        </div>
    )
}

export default SingleQueet
