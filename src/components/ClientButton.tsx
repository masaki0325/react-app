'use client';

import { useCounter } from 'hooks/useCounter';
import { useInputArray } from 'hooks/useInputArray';
import React from 'react';

export default function ClientButton() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { array, handleAdd, text, setText } = useInputArray();

  return (
    <div className="flex items-center justify-center py-10 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center w-auto">
        {isShow ? <h2 className="font-bold text-2xl mb-4">{count}</h2> : null}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleClick}
        >
          Count up
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded w-full"
          onClick={handleDisplay}
        >
          {isShow ? 'Hide' : 'Show'}
        </button>
        <input
          type="text"
          value={text}
          className="border border-gray-300 px-4 mt-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full rounded mb-4"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
        />
        <h2 className="text-2xl font-bold">{text}</h2>
      </div>
    </div>
  );
}
