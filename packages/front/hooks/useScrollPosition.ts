/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [yScrollPosition, setYScrollPosition] = useState<number | null>(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setYScrollPosition(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    yScrollPosition,
  };
};

export default useScrollPosition;
