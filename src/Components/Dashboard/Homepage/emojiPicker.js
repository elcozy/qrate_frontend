import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
 
const EmojiPicker = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
 
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
 
  return (
    <>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : ''}
      <div>
        <Picker onEmojiClick={onEmojiClick} />
      </div>
      
    </>
  );
};

export default EmojiPicker


