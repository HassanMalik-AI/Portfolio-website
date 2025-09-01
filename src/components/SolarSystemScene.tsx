import { useEffect, useRef } from 'react';
import spaceBackground from '@/assets/space-background.jpg';
import alienShip1 from '@/assets/alien-ship-1.png';
import alienShip2 from '@/assets/alien-ship-2.png';
import alienShip3 from '@/assets/alien-ship-3.png';
import planetEarth from '@/assets/planet-earth.jpg';
import planetMars from '@/assets/planet-mars.jpg';
import planetJupiter from '@/assets/planet-jupiter.jpg';
import planetSaturn from '@/assets/planet-saturn.jpg';
import planetMoon from '@/assets/planet-moon.jpg';

const SolarSystemScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const alienShips = [alienShip1, alienShip2, alienShip3];
    const planets = [
      { image: planetEarth, name: 'earth', size: 120, distance: 300, speed: 1.2 },
      { image: planetMars, name: 'mars', size: 80, distance: 450, speed: 0.8 },
      { image: planetJupiter, name: 'jupiter', size: 200, distance: 600, speed: 0.5 },
      { image: planetSaturn, name: 'saturn', size: 180, distance: 750, speed: 0.3 },
      { image: planetMoon, name: 'moon', size: 40, distance: 200, speed: 2.5 }
    ];
    
    // Create planets
    const createPlanets = () => {
      planets.forEach((planetData, index) => {
        const planet = document.createElement('div');
        planet.className = `planet planet-${planetData.name}`;
        planet.style.cssText = `
          position: absolute;
          width: ${planetData.size}px;
          height: ${planetData.size}px;
          background-image: url(${planetData.image});
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          box-shadow: 
            inset -20px -20px 40px rgba(0, 0, 0, 0.6),
            0 0 30px rgba(255, 255, 255, 0.1),
            0 0 60px rgba(255, 255, 255, 0.05);
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.2));
          animation: orbit-${planetData.name} ${60 / planetData.speed}s linear infinite;
          transform-origin: ${planetData.distance}px center;
          left: calc(50% - ${planetData.distance}px);
          top: calc(50% - ${planetData.size / 2}px);
          z-index: ${5 - index};
        `;
        
        // Add rotation animation to the planet itself
        const planetSurface = document.createElement('div');
        planetSurface.style.cssText = `
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-image: url(${planetData.image});
          background-size: cover;
          animation: rotate ${20 + index * 5}s linear infinite;
        `;
        
        planet.appendChild(planetSurface);
        container.appendChild(planet);
      });
    };

    // Create alien ships with random properties
    const createAlienShip = () => {
      const ship = document.createElement('img');
      const randomShip = alienShips[Math.floor(Math.random() * alienShips.length)];
      
      ship.src = randomShip;
      ship.className = 'alien-ship';
      
      // Random starting position (off-screen left)
      const startY = Math.random() * 70 + 10;
      const endY = startY + (Math.random() * 20 - 10);
      
      // Random size
      const size = Math.random() * 50 + 40;
      
      ship.style.cssText = `
        position: absolute;
        left: -100px;
        top: ${startY}%;
        width: ${size}px;
        height: auto;
        opacity: 0.9;
        z-index: 15;
        pointer-events: none;
        animation: flyAcross ${Math.random() * 5 + 8}s linear forwards;
        animation-delay: ${Math.random() * 3}s;
        filter: drop-shadow(0 0 15px rgba(100, 200, 255, 0.5));
      `;
      
      ship.style.setProperty('--end-y', `${endY}%`);
      container.appendChild(ship);
      
      setTimeout(() => {
        if (ship.parentNode) {
          ship.parentNode.removeChild(ship);
        }
      }, 15000);
    };

    // Create twinkling stars
    const createStars = () => {
      const starCount = 200;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'space-star';
        star.style.cssText = `
          position: absolute;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          width: ${Math.random() * 3 + 1}px;
          height: ${Math.random() * 3 + 1}px;
          background: rgba(255, 255, 255, ${Math.random() * 0.9 + 0.1});
          border-radius: 50%;
          animation: twinkle ${Math.random() * 4 + 2}s ease-in-out infinite;
          animation-delay: ${Math.random() * 4}s;
          z-index: 1;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
        `;
        container.appendChild(star);
      }
    };

    // Create ships at intervals
    const shipInterval = setInterval(createAlienShip, 6000);
    
    // Create initial ships
    setTimeout(() => createAlienShip(), 1000);
    setTimeout(() => createAlienShip(), 3000);
    setTimeout(() => createAlienShip(), 5000);

    createStars();
    createPlanets();

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
      className="solar-system-scene"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(ellipse at center, rgba(25, 25, 112, 0.1) 0%, transparent 70%),
          radial-gradient(ellipse at 80% 20%, rgba(72, 61, 139, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(138, 43, 226, 0.06) 0%, transparent 60%),
          linear-gradient(135deg, #000814 0%, #001d3d 30%, #003566 60%, #0077b6 100%),
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

export default SolarSystemScene;