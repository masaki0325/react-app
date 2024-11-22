'use client';

import { useCallback, useEffect, useState } from 'react';

export default function ClientButton() {
  const [count, setCounter] = useState(1);

  useEffect(() => {
    return () => {};
  }, []);

  const handleClick = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  return (
    <div>
      <h2 className="font-bold px-4">{count}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Count up
      </button>
    </div>
  );
}
