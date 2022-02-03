import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div>{date.toLocaleDateString()}</div>
      <div>{date.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
