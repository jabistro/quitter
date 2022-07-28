import "./EmojiPicker.css";
import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiPicker = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (e, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div>
            {chosenEmoji ? (
                <span>You chose: {chosenEmoji.emoji}</span>
            ) : (
                <span>No emoji Chosen</span>
            )}
            <Picker onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default EmojiPicker
