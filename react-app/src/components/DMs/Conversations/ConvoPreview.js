import './ConvoPreview.css';
import React from 'react'
import { useSelector } from 'react-redux';

const ConvoPreview = ({ convo }) => {
    const messages = Object.values(useSelector(state => state.message));
    const convoMessages = messages.filter(msg => msg.conversation_id === convo.id).reverse();

    return (
        <div className='convo-preview-content'>{convoMessages[0].content}</div>
    )
}

export default ConvoPreview
