import React, { useState } from 'react';
import Checks from '../components/common/Checks';

const useChecks = labels => {
  const [checkList, setCheckList] = useState(() => labels.map(() => false));

  const handleCheckClick = index => {
    setCheckList(checks =>
      checks.map((check, i) => (i === index ? !check : check)),
    );
  };

  const renderChecks = () => (
    <Checks
      title={'수영장 레인 종류'}
      checkList={checkList}
      labels={labels}
      onCheck={handleCheckClick}
    />
  );

  const getCheckList = () => checkList;

  return [renderChecks, getCheckList];
};

export default useChecks;
