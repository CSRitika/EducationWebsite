import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 786
    && window.parent.innerWidth < 786);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.parent ? window.parent.innerWidth : window.innerWidth;
      setIsMobile(newWidth < 786);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return isMobile;
};

export default useResponsive;
