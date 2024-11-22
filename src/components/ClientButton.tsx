'use client';

import { useCallback } from 'react';

export default function ClientButton() {
  const handleClick = useCallback(() => {
    alert('Hello, world!');
  }, []);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Client Button
    </button>
  );
}
