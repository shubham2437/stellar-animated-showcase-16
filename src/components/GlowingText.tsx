
import React from 'react';

interface GlowingTextProps {
  text: string;
  className?: string;
  color?: string;
  glowColor?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
}

const GlowingText: React.FC<GlowingTextProps> = ({
  text,
  className = '',
  color = 'text-space-accent',
  glowColor = 'text-space-accent',
  size = 'xl'
}) => {
  return (
    <span 
      className={`${color} font-bold text-${size} ${className}`}
      style={{ 
        textShadow: `0 0 10px currentColor, 0 0 20px currentColor`
      }}
    >
      {text}
    </span>
  );
};

export default GlowingText;
