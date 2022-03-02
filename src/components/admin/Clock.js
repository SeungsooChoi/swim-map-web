import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.3rem;
  font-weight: 300;

  .date {
    margin-bottom: 1rem;
  }
`;

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
    <Wrapper>
      <div className="date">{date.toLocaleDateString()}</div>
      <div>{date.toLocaleTimeString()}</div>
    </Wrapper>
  );
};

export default Clock;
