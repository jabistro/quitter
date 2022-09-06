import './Messages.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Messages = ({ convo }) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const messages = Object.values(useSelector(state => state.message));
    const conversations = useSelector(state => state.conversation);
    const conversation = conversations[convo];
    let convoMessages;
    if (convo !== null) convoMessages = messages.filter(msg => msg.conversation_id === conversation.id);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className='messages-wrap'>
            <div className='messages-header-and-msgs'>
                <div>Header Component</div>
                <div className='messages-container'>
                    {convoMessages && convoMessages.map(msg => {
                        return (
                            <div key={msg.id} className='messages-msg'>
                                {msg.content}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>pics</div>
                    <div>gifs</div>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messages-input"
                        type='text'
                    />
                    <button type='submit'>sumbit</button>
                </form>
            </div>
        </div>
    )
}

export default Messages
