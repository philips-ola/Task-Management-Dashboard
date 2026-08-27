import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");

return (
    <>
          <div className="bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center gap-8">

    {/* Time Display */}
    <div className="text-center">
      <p className="text-sm text-gray-500">
        Task Timer
      </p>

      <h2 className="text-3xl font-bold text-gray-800">
        {minutes}:{remainingSeconds}
      </h2>
    </div>

    {/* Buttons */}
    <div className="flex items-center gap-3">

      <button
        onClick={() => setIsRunning((currentIsRunning) => !currentIsRunning)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition cursor-pointer"
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      <button
        onClick={() => {
          setIsRunning(false);
          setSeconds(0);
        }}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl font-medium transition cursor-pointer"
      >
        Reset
      </button>

    </div>

  </div>
    </>
)
}

export default Timer;