import './Conversations.css';
import React from 'react'
import { useSelector } from 'react-redux';
import ConvoPreview from './ConvoPreview';

const Conversations = ({ userConvos, setConvo }) => {
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user);

    return (
        <div className='conversations-wrap'>
            {[...userConvos].map(convo => {
                return (
                    <div key={convo.id} className="conversations-container" onClick={(e) => setConvo(convo.id)}>
                        <img className='conversations-pfp' alt='' src={convo.creator_id !== sessionUser.id ? users[convo.creator_id].profile_pic : users[convo.participant_id].profile_pic} />
                        <div className='conversations-info-and-message'>
                            <div className='conversations-names-and-date'>
                                <div className='conversations-display-name'>{convo.creator_id !== sessionUser.id ? users[convo.creator_id].display_name : users[convo.participant_id].display_name}</div>
                                <div className='conversations-username'>@{convo.creator_id !== sessionUser.id ? users[convo.creator_id].username : users[convo.participant_id].username}</div>
                                <div className='conversations-date'>date</div>
                            </div>
                            <div className='conversations-message'>
                                <ConvoPreview convo={convo} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Conversations
