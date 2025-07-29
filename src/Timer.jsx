import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (sec) => {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white px-4">
      <div className="border border-white bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg flex flex-col items-center">
        
        <h1 className="text-2xl md:text-4xl font-extrabold mb-8 tracking-wide animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
          Stopwatch
        </h1>

        <div className="text-4xl md:text-5xl font-mono mb-10 text-neon border-4 border-pink-500 px-10 py-6 rounded-xl shadow-lg animate-glow">
          {formatTime(seconds)}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <button
            className={`px-6 py-3 rounded-xl font-bold text-lg shadow-xl transition-transform duration-300 hover:scale-105 border-2 animate-neon-border ${
              isRunning
                ? 'bg-red-500 hover:bg-red-700 border-pink-400'
                : 'bg-green-500 hover:bg-green-700 border-green-300'
            }`}
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>

          <button
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 border-2 border-yellow-300 animate-neon-border"
            onClick={() => {
              setIsRunning(false);
              setSeconds(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
