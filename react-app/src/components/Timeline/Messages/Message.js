import "./Message.css";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let endPoint = "http://localhost:5000";
let socket = io.connect(`${endPoint}`);

const Message = () => {
    const [messages, setMessages] = useState(["Hello And Welcome"]);
    const [message, setMessage] = useState("");

    const getMessages = () => {
        socket.on("message", msg => {
            //   let allMessages = messages;
            //   allMessages.push(msg);
            //   setMessages(allMessages);
            setMessages([...messages, msg]);
        });
    };

    useEffect(() => {
        getMessages();
    }, [messages.length]);

    // On Change
    const onChange = e => {
        setMessage(e.target.value);
    };

    // On Click
    const onClick = () => {
        if (message !== "") {
            socket.emit("message", message);
            setMessage("");
        } else {
            alert("Please Add A Message");
        }
    };

    return (
        <div>
            {messages.length > 0 &&
                messages.map(msg => (
                    <div key={msg.id}>
                        <p>{msg}</p>
                    </div>
                ))}
            <input value={message} name="message" onChange={e => onChange(e)} />
            <button onClick={() => onClick()}>Send Message</button>
        </div>
    );
}

export default Message
