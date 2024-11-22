import { useCallback, useState } from 'react';

export const useCounter = () => {
  const [count, setCounter] = useState(1);
  const [isShow, setIsShow] = useState(false);

  const handleClick = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
