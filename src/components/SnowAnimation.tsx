
import React, { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function SnowAnimation() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  
  useEffect(() => {
    // Create initial snowflakes
    const initialSnowflakes: Snowflake[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    
    setSnowflakes(initialSnowflakes);
    
    const animationInterval = setInterval(() => {
      setSnowflakes(prevSnowflakes => 
        prevSnowflakes.map(flake => ({
          ...flake,
          y: (flake.y + flake.speed) % window.innerHeight,
          x: flake.x + Math.sin(flake.y * 0.01) * 0.5,
        }))
      );
    }, 20);
    
    const resizeHandler = () => {
      setSnowflakes(prevSnowflakes => 
        prevSnowflakes.map(flake => ({
          ...flake,
          x: flake.x % window.innerWidth,
          y: flake.y % window.innerHeight,
        }))
      );
    };
    
    window.addEventListener('resize', resizeHandler);
    
    return () => {
      clearInterval(animationInterval);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
}
