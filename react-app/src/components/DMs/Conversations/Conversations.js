import './Conversations.css';
import React from 'react'
import { useSelector } from 'react-redux';
import ConvoPreview from './ConvoPreview';

const Conversations = ({ userConvos, setConvo }) => {
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.user);

    return (
        <div className='conversations-wrap'>
            {[...userConvos].map(conversation => {
                return (
                    <div key={conversation.id} className="conversations-container" onClick={(e) => setConvo(conversation)}>
                        <img className='conversations-pfp' alt='' src={conversation.creator_id !== sessionUser.id ? users[conversation.creator_id].profile_pic : users[conversation.participant_id].profile_pic} />
                        <div className='conversations-info-and-message'>
                            <div className='conversations-names-and-date'>
                                <div className='conversations-display-name'>{conversation.creator_id !== sessionUser.id ? users[conversation.creator_id].display_name : users[conversation.participant_id].display_name}</div>
                                <div className='conversations-username'>@{conversation.creator_id !== sessionUser.id ? users[conversation.creator_id].username : users[conversation.participant_id].username}</div>
                                <div className='conversations-date'>date</div>
                            </div>
                            <div className='conversations-message'>
                                {/* <ConvoPreview conversation={conversation} /> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Conversations
