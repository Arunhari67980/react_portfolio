import React, { useEffect, useState } from 'react';
import './Loader.css';

function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${isVisible ? '' : 'hidden'}`}>
      <div className="cyberpunk-loader">LOADING...</div>
    </div>
  );
}

export default Loader;