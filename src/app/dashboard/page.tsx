"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-md p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Dashboard - Countdown Timer
        </h1>

        <div className="text-6xl font-mono mb-6">
          {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
        </div>
      </div>
    </main>
  );
}
