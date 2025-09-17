import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const width = (scrollPosition / totalHeight) * 100;
      setScrollWidth(width);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="progress-bar" style={{ width: `${scrollWidth}%` }}></div>;
}

export default ScrollProgress;