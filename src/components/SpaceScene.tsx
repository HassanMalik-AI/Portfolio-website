import { useEffect, useRef } from 'react';
import spaceBackground from '@/assets/space-background.jpg';
import alienShip1 from '@/assets/alien-ship-1.png';
import alienShip2 from '@/assets/alien-ship-2.png';
import alienShip3 from '@/assets/alien-ship-3.png';

const SpaceScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const alienShips = [alienShip1, alienShip2, alienShip3];
    
    // Create alien ships with random properties
    const createAlienShip = () => {
      const ship = document.createElement('img');
      const randomShip = alienShips[Math.floor(Math.random() * alienShips.length)];
      
      ship.src = randomShip;
      ship.className = 'alien-ship';
      
      // Random starting position (off-screen left)
      const startY = Math.random() * 70 + 10; // 10% to 80% of screen height
      const endY = startY + (Math.random() * 20 - 10); // Slight vertical drift
      
      // Random size (small to medium)
      const size = Math.random() * 40 + 30; // 30px to 70px
      
      ship.style.cssText = `
        position: absolute;
        left: -100px;
        top: ${startY}%;
        width: ${size}px;
        height: auto;
        opacity: 0.9;
        z-index: 5;
        pointer-events: none;
        animation: flyAcross ${Math.random() * 5 + 8}s linear forwards;
        animation-delay: ${Math.random() * 3}s;
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
      `;
      
      // Set CSS custom properties for the end position
      ship.style.setProperty('--end-y', `${endY}%`);
      
      container.appendChild(ship);
      
      // Remove ship after animation
      setTimeout(() => {
        if (ship.parentNode) {
          ship.parentNode.removeChild(ship);
        }
      }, 25000);
    };

    // Create ships at intervals
    const shipInterval = setInterval(createAlienShip, 6000);
    
    // Create initial ships with shorter delays for immediate visibility
    setTimeout(() => createAlienShip(), 500);  // Show first ship quickly
    setTimeout(() => createAlienShip(), 2000);
    setTimeout(() => createAlienShip(), 4000);

    // Create subtle twinkling stars
    const createStars = () => {
      const starCount = 150;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'space-star';
        star.style.cssText = `
          position: absolute;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          width: ${Math.random() * 2 + 1}px;
          height: ${Math.random() * 2 + 1}px;
          background: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
          border-radius: 50%;
          animation: twinkle ${Math.random() * 4 + 2}s ease-in-out infinite;
          animation-delay: ${Math.random() * 4}s;
          z-index: 1;
        `;
        container.appendChild(star);
      }
    };

    createStars();

    // Cleanup function
    return () => {
      clearInterval(shipInterval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="space-scene"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(ellipse at top, hsl(var(--primary) / 0.1) 0%, transparent 70%),
          radial-gradient(ellipse at 80% 20%, hsl(var(--accent) / 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, hsl(var(--secondary) / 0.08) 0%, transparent 60%),
          linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%),
          url(${spaceBackground})
        `,
        backgroundSize: 'cover, cover, cover, cover, cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        overflow: 'hidden'
      }}
    />
  );
};

export default SpaceScene;