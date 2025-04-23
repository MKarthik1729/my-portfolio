import { useCallback } from 'react';

const useMoveToTop = () => {
  const moveToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return moveToTop;
};

export default useMoveToTop;

