import "./Inbox.css";
import React, { useState } from 'react';
import SideBar from '../../Timeline/Sidebar/Sidebar';
import { useSelector } from "react-redux";
import Conversations from "../Conversations/Conversations";
import Messages from "../Messages/Messages";

const Inbox = () => {
    const [convo, setConvo] = useState(null);
    const sessionUser = useSelector(state => state.session.user);
    const conversations = Object.values(useSelector(state => state.conversation));
    const messages = Object.values(useSelector(state => state.message));
    const users = useSelector(state => state.user);
    let userConvos = new Set();
    conversations.forEach(conversation => {
        if (conversation.creator_id === sessionUser.id || conversation.participant_id === sessionUser.id) userConvos.add(conversation);
    })

    return (
        <div className='inbox-wrap'>
            <div className='inbox-left'>
                <SideBar />
            </div>
            <div className='inbox-center'>
                <p>Messages</p>
                <Conversations setConvo={setConvo} userConvos={userConvos} />
            </div>
            <div className='inbox-right'>
                <Messages convo={convo} />
            </div>
        </div>
    )
}

export default Inbox
