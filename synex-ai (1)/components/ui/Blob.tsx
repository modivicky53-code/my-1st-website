import React from 'react';

interface BlobProps {
  color?: string;
  size?: string;
  className?: string;
  delay?: string;
}

export const Blob: React.FC<BlobProps> = ({ 
  color = 'bg-indigo-500', 
  size = 'w-96 h-96',
  className = '',
  delay = '0s'
}) => {
  return (
    <div 
      className={`absolute rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-float ${color} ${size} ${className}`}
      style={{ animationDelay: delay }}
    />
  );
};