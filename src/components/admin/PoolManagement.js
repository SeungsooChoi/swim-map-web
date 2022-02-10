import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';

const PoolManagement = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  return (
    <div className="p-4 w-full h-screen overflow-hidden">
      <h1>수영장 등록 관리</h1>
      <div className="mt-4 h-4/5 shadow-xl rounded-lg overflow-scroll">
        <Table swimpool={swimpool} isShow={false} />
      </div>
    </div>
  );
};

export default PoolManagement;
