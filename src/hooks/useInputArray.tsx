import { useCallback, useState } from 'react';

export const useInputArray = () => {
  const [array, setArray] = useState([1]);
  const [text, setText] = useState('');

  const handleAdd = useCallback(() => {
    setArray((prevArray) => [...prevArray, prevArray.length + 1]);
  }, []);

  return { array, handleAdd, text, setText };
};
