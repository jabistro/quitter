import './ConvoPreview.css';
import React from 'react'
import { useSelector } from 'react-redux';

const ConvoPreview = ({ conversation }) => {
    const messages = Object.values(useSelector(state => state.message));
    let convoMessages;
    if (conversation) convoMessages = messages.filter(msg => msg.conversation_id === conversation.id).reverse();

    return (
        <>
            {convoMessages &&
                <div className='convo-preview-content'>{convoMessages[0].content}</div>
            }
        </>
    )
}

export default ConvoPreview
