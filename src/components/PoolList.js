import React from 'react';
import { useSelector } from 'react-redux';
import { getIsShowFilteredArr } from '../lib/util';
import PoolListItem from './PoolListItem';

const PoolList = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  return (
    <ul className="w-1/4 overflow-y-scroll border-r border-solid border-r-midNightGreen">
      <PoolListItem swimpool={getIsShowFilteredArr(swimpool)} />
    </ul>
  );
};

export default PoolList;
