import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  delayBeforeStart?: number;
  cursorBlinkSpeed?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typingSpeed = 50,
  delayBeforeStart = 0,
  cursorBlinkSpeed = 500,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const textIndex = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset when text changes
    textIndex.current = 0;
    setDisplayedText('');
    setIsTyping(false);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Delay before starting to type
    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
    }, delayBeforeStart);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, delayBeforeStart]);
  
  // Typing effect
  useEffect(() => {
    if (!isTyping) return;
    
    if (textIndex.current < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[textIndex.current]);
        textIndex.current++;
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [text, displayedText, typingSpeed, isTyping]);
  
  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);
    
    return () => clearInterval(interval);
  }, [cursorBlinkSpeed]);

  return (
    <span className={className}>
      {displayedText}
      <span 
        className={`inline-block w-2 h-5 ml-1 bg-teal-400 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
      />
    </span>
  );
};

export default TypingEffect;