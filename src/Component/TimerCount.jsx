import React, { useState, useEffect } from 'react';


const TimerCount = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [isOnBreak, setIsOnBreak] = useState(false);
    const [loginTime, setLoginTime] = useState(new Date());
  
    useEffect(() => {
      let timer;
      if (isRunning) {
        timer = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [isRunning]);
  
    const formatTime = (seconds) => {
      const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      return `${h}:${m}:${s}`;
    };
  
    const handleClockOut = () => {
      setIsRunning(false);
      const checkoutTime = new Date();
      const duration = checkoutTime - loginTime;
  
      const sessionData = {
        loginTime,
        checkoutTime,
        duration: formatTime(Math.floor(duration / 1000))
      };
  
      console.log(sessionData);
  
      // Reset states if needed
      setTime(0);
      setLoginTime(new Date());
      setIsOnBreak(false);
    };
  
    const handleBreakToggle = () => {
      setIsRunning(isOnBreak);  // Resume timer if on break, otherwise pause
      setIsOnBreak(!isOnBreak);
    };
  
    return (
      <div className=' bg-gray-300'>
      <div className="flex justify-center gap-6 items-center w-[550px] pt-2 pb-1 bg-white rounded-b-xl shadow-md ">
        <div className="text-2xl font-bold">{formatTime(time)} h</div>
        <div className="flex space-x-4">
          <button
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleClockOut}
          >
            Clock-Out
          </button>
          <button
            className=" hover:bg-purple-100 text-purple-600  border-purple-600 border-[1px] py-2 px-4 rounded-lg"
            onClick={handleBreakToggle}
          >
            {isOnBreak ? 'Break Over' : 'Take a Break'}
          </button>
        </div>
      </div>
      </div>
    );
}

export default TimerCount
