import { useState, useEffect } from 'react';
import Clock from './Clock.js';

// Custom hook to manage and update time state
function useTime() {
  // Initialize state with current date/time
  const [time, setTime] = useState(() => new Date());
  
  // Set up interval to update time every second
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date()); // Update time state
    }, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(id);
  }, []);
  
  return time; // Return current time
}

// Main App component
export default function App() {
  // Get current time from custom hook
  const time = useTime();
  
  // Render Clock component with formatted time
  return (
    <Clock time={time.toLocaleTimeString()} />
  );
}
