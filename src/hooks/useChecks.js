import React, { useState } from 'react';
import Checks from '../components/common/Checks';

const useChecks = (title, labels) => {
  const [checkList, setCheckList] = useState(() => labels.map(() => false));

  const handleCheckClick = index => {
    setCheckList(checks =>
      checks.map((check, i) => (i === index ? !check : check)),
    );
  };

  const renderChecks = () => (
    <Checks
      title={title}
      checkList={checkList}
      labels={labels}
      onCheck={handleCheckClick}
    />
  );

  const getCheckList = () => checkList;

  return [renderChecks, getCheckList];
};

export default useChecks;
