import './Messages.css';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearMessages, getAllMessages } from '../../../store/messages';
import { io } from 'socket.io-client';

let socket;

const Messages = ({ convo }) => {
    const [chatInput, setChatInput] = useState('');
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const messages = Object.values(useSelector(state => state.message));
    const [tempMessages, setTempMessages] = useState([]);
    let conversationId;
    if (convo) conversationId = convo.id;
    let id;
    if (convo) id = parseInt(conversationId);
    console.log(id)
    // const conversations = useSelector(state => state.conversation);
    // let conversation;
    // if (convo) conversation = conversations[convo.id];
    // let convoMessages;
    // if (convo) convoMessages = messages.filter(msg => msg.conversation_id === conversation.id);

    useEffect(() => {
        dispatch(getAllMessages());
        setTempMessages([]);
    }, [dispatch]);

    useEffect(() => {
        //create websocket/connect
        socket = io();

        //join the room after component mounts
        socket.on("connect", () => {
            socket.emit("join", { conversation: conversationId })
        })
        //listen for chat events
        socket.on("chat", (chat) => {
            //when we receive a chat, add it into our messages array in state
            setTempMessages(messages => [...messages, chat])
        });
        //when component unmounts, leave the room and disconnect
        return () => {
            dispatch(clearMessages())
            socket.emit("leave", { conversation: conversationId })
            socket.disconnect()
        }
    }, [id]);

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    }

    const sendChat = (e) => {
        e.preventDefault()
        //emit message, first arg must match backend, second arg is the data we want to send
        socket.emit("chat", { sender: { id: sessionUser.id, username: sessionUser.username, profile_pic: sessionUser.profile_pic }, content: chatInput, conversation: conversationId });
        //clear the input field after the message is sent
        setChatInput("");
    }


    return (
        <>
            {/* {convoMessages &&
                <div className='messages-wrap'>
                    <div className='messages-header-and-msgs'>
                        <div>Header Component</div>
                        <div className='messages-container'>
                            {convoMessages.map(msg => {
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
            } */}
        </>
    )
}

export default Messages










// import './Messages.css';
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { io } from 'socket.io-client';
// import { clearMessages, getAllMessages } from '../../../store/messages';


// //socket variable
// let socket;

// function Messages({ convo }) {
//     const messageState = useSelector(state => Object.values(state.message));
//     const sessionUser = useSelector(state => state.session.user);
//     const [tempMessages, setTempMessages] = useState([]);
//     const conversations = useSelector(state => state.conversation);
//     const conversation = conversations[convo]
//     const { conversationId } = conversation.id;
//     const id = parseInt(conversationId);
//     const dispatch = useDispatch();

//     //control form input
//     const [chatInput, setChatInput] = useState("");
//     useEffect(() => {
//         //on mount
//         dispatch(getAllMessages(id));
//         setTempMessages([]);

//     }, [id])

//     useEffect(() => {
//         //create websocket/connect
//         socket = io();

//         //join the room after component mounts
//         socket.on("connect", () => {
//             socket.emit("join", { conversation: conversationId })
//         })
//         //listen for chat events
//         socket.on("chat", (chat) => {
//             //when we receive a chat, add it into our messages array in state
//             setTempMessages(messages => [...messages, chat])
//         });
//         //when component unmounts, leave the room and disconnect
//         return () => {
//             dispatch(clearMessages())
//             socket.emit("leave", { conversation: conversationId })
//             socket.disconnect()
//         }
//     }, [id]);

//     const updateChatInput = (e) => {
//         setChatInput(e.target.value)
//     }

//     const sendChat = (e) => {
//         e.preventDefault()
//         //emit message, first arg must match backend, second arg is the data we want to send
//         socket.emit("chat", { sender: { id: sessionUser.id, username: sessionUser.username, profile_pic: sessionUser.profile_pic }, content: chatInput, conversation: conversationId });
//         //clear the input field after the message is sent
//         setChatInput("");
//     }

//     return (
//         <div>
//             <div className='scroll-div'>
//                 {[...messageState, ...tempMessages].map((message, idx) => {
//                     return (
//                         <div key={idx} className="convo-container">
//                             <div>
//                                 <img src={message.sender.image_url} alt="user" className="chat-profile-pic" />
//                             </div>
//                             <div className="msg-container">
//                                 <p className="username">{message.sender.username}</p>
//                                 <p className="message">{message.content}</p>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//             <div className="chat-div">
//                 <form onSubmit={sendChat}>
//                     <input
//                         value={chatInput}
//                         onChange={updateChatInput}
//                         className="hidden-input"
//                         required
//                         maxLength="1000"
//                         type="text"
//                     />
//                     <button className="button blue plane" type="submit"><i className="fa-solid fa-paper-plane"></i></button>
//                 </form>
//             </div>
//             <p className="max-length">*maximum message length 1000 characters</p>
//         </div>
//     )
// }

// export default Messages;
