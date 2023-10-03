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
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={backgroundStyle}
    ></div>
  );
};

export default Spotlight;
