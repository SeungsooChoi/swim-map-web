import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../../components/admin/Table';

const PoolList = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  return (
    <div className="p-4 w-full h-screen overflow-hidden">
      <h1>수영장 목록 DB</h1>
      <div className="mt-4 h-4/5 shadow-xl rounded-lg overflow-scroll">
        <Table swimpool={swimpool} />
      </div>
    </div>
  );
};

export default PoolList;
