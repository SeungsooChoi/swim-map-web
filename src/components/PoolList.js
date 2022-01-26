import React from 'react';
import { useSelector } from 'react-redux';
import PoolListItem from './PoolListItem';

const PoolList = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  return (
    <ul className="w-2/6 overflow-y-scroll">
      <PoolListItem swimpool={swimpool} />
    </ul>
  );
};

export default PoolList;
