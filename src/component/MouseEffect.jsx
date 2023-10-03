import React, { useState, useEffect } from 'react';

const Spotlight = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateGradientPosition = (e) => {
      setGradientPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateGradientPosition);

    return () => {
      window.removeEventListener('mousemove', updateGradientPosition);
    };
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(600px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%', // Make the width and height 100%
    height: '100%', // to cover the entire page
  };

  return (
    <div
      className="pointer-events-none inset-0 z-30 transition duration-300 lg:absolute"
      style={backgroundStyle}
    ></div>
  );
};

export default Spotlight;
