'use client';

import { useCallback, useState } from 'react';
import React from 'react';

export default function Content() {
  const [array, setArray] = useState([1]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => [...prevArray, prevArray.length + 1]);
  }, []);

  return (
    <div className="flex items-center justify-center py-10 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center w-auto">
        <ul>
          {array.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded w-full"
          onClick={handleAdd}
        >
          追加
        </button>
      </div>
    </div>
  );
}
