
import React from 'react';

interface LogoProps {
  className?: string;
  jumping?: boolean;
  size?: 'small' | 'large';
}

export default function Logo({ className = '', jumping = false, size = 'small' }: LogoProps) {
  return (
    <div className={`relative ${jumping ? 'animate-bounce' : ''} ${className}`}>
      <img 
        src="/lovable-uploads/97abfa63-8090-4006-9387-b6c603c98e18.png" 
        alt="Snowy.ai Logo" 
        className={`${size === 'small' ? 'h-10' : 'h-32'} w-auto`}
      />
    </div>
  );
}
