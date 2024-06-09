import React, { useState, useEffect } from 'react';

function Clocked() {
  const [time, setTime] = useState(new Date());
  const [clockedIn, setClockedIn] = useState(false);
  const [startTime, setStartTime] = useState(null);
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClockInOut = () => {
    setClockedIn(!clockedIn);
    if (!clockedIn) {
      setStartTime(new Date());
    } else {
      // Handle clock-out logic here
    }
  };

  return (
    <div className="clock-component">
      <h2>{time.toLocaleTimeString()}</h2>
      <button onClick={handleClockInOut}>{clockedIn ? 'Clock Out' : 'Clock In'}</button>
      {clockedIn && <div>Started at: {startTime.toLocaleTimeString()}</div>}
    </div>
  );
}

export default Clocked;
