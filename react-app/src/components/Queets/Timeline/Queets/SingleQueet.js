import './SingleQueet.css';
import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import AddComment from '../Comments/AddComment';
import EditQueetModal from './EditQueetModal';

const SingleQueet = () => {

    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user.users);
    const usersArr = Object.values(users);
    const { queetId } = useParams();
    const queet = useSelector(state => state?.queet[queetId]);

    const editHandler = queet => {
        history.push(`/queets/edit/${queet.id}`)
    }
    // <button className="single-queet-edit-btn" onClick={() => editHandler(queet)}>Edit</button>

    return (
        <div className='queet-comment-wrap'>
            <div className="single-queet-block">
                <div className='single-username-and-edit-btn'>
                    <div className='single-queet-username'>@{usersArr[queet.userId - 1].username}</div>
                    {
                        queet.userId === sessionUser.id &&
                        <EditQueetModal className="single-queet-edit-btn" />
                    }
                </div>
                <div className='single-queet'>{queet.content}</div>
                <div className='single-queet-timestamp'>timestamp</div>
                <div className='single-queet-stats'># of RTs/Likes</div>
                <div className='single-queet-icons'>ICONS</div>
            </div>
            <AddComment />
            <div className="comments-wrap">
                <Comments />
            </div>
        </div>
    )
}

export default SingleQueet
