import { useState, useEffect } from 'react';
import '../Styles/MediaStyles.css'; // Make sure to import the CSS file where you've added the above styles

const TypingEffect = () => {
  const fullText = 'Total articles added so far: ';
  const boldText = '38';
  const [text, setText] = useState('');
  const [bold, setBold] = useState('');
  const typingSpeedMs = 100; // Typing speed in milliseconds

  useEffect(() => {
    if (text.length < fullText.length) {
      setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeedMs);
    } else if (bold.length < boldText.length) {
      setTimeout(() => {
        setBold(boldText.slice(0, bold.length + 1));
      }, typingSpeedMs);
    }
  }, [text, bold, fullText, boldText]);

  return (
    <div className="user-card ml-10 flex-1 typing-effect" style={{
      animation: `typing ${fullText.length / 5 + boldText.length / 5}s steps(${fullText.length + boldText.length}, end)`,
      borderRight: 'none' // Assuming the border is set inline, adjust or remove this line accordingly.
    }}>
      <span className='place-items-end'>{text}<b>{bold}</b></span>
    </div>
  );
};

export default TypingEffect;