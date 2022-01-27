import React from 'react';
import { useSelector } from 'react-redux';
import PoolListItem from './PoolListItem';

const PoolList = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  return (
    <ul className="w-1/4 overflow-y-scroll border-r border-solid border-r-skyBlue">
      <PoolListItem swimpool={swimpool} />
    </ul>
  );
};

export default PoolList;
