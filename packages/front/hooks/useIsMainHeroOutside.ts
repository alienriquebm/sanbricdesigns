import { useEffect, useState } from 'react';
import { useMainHeroRef } from './useContext';

const useIsMainHeroOutside = () => {
  const { mainHeroRef } = useMainHeroRef();
  const [isMainHeroOutside, setIsMainHeroOutside] = useState<boolean>(false);

  const handleScroll = () => {
    if (mainHeroRef && mainHeroRef.current) {
      const position = window.scrollY;
      if (position > mainHeroRef.current.getBoundingClientRect().height) {
        setIsMainHeroOutside(true);
      } else {
        setIsMainHeroOutside(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isMainHeroOutside };
};

export default useIsMainHeroOutside;
