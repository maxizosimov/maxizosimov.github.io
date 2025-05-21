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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  // Reset and start typing when text changes
  useEffect(() => {
    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Reset state
    textIndex.current = 0;
    setDisplayedText('');
    setIsTyping(false);

    // Start typing after delay
    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
    }, delayBeforeStart);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, delayBeforeStart]);

  // Handle typing animation
  useEffect(() => {
    if (!isTyping || !text) return;

    const typeNextChar = () => {
      if (textIndex.current < text.length) {
        setDisplayedText(text.substring(0, textIndex.current + 1));
        textIndex.current++;
        timeoutRef.current = setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };

    typeNextChar();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isTyping, text, typingSpeed]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(interval);
  }, [cursorBlinkSpeed]);

  return (
    <span className={`inline-block ${className}`} ref={containerRef}>
      <span className="inline-block whitespace-nowrap">
        {displayedText}
        <span 
          className={`inline-block w-2 h-5 ml-1 bg-teal-400 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-100`}
        />
      </span>
    </span>
  );
};

export default TypingEffect;