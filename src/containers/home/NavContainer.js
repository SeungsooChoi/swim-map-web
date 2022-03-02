import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/home/Nav';
import useDropdown from '../../hooks/useDropdown';
import { getArrayWithChangedObject } from '../../lib/util';
import { setLane, setSido } from '../../modules/filter';

const NavContainer = () => {
  const { sido } = useSelector(state => ({ sido: state.filter.sido }));
  const { lane } = useSelector(state => ({ lane: state.filter.lane }));
  const dispatch = useDispatch();

  // 시/도명, 레인 드롭다운 클릭 및 클릭한 내용 제거 이벤트
  const handleClickDropdownItem = item => {
    if (sido.includes(item)) {
      dispatch(setSido(getArrayWithChangedObject(sido, item)));
    } else if (lane.includes(item)) {
      dispatch(setLane(getArrayWithChangedObject(lane, item)));
    }
  };

  // useDropdown
  const [renderChecks] = useDropdown(
    [
      { title: '시/도명', contents: sido },
      { title: '레인 (m)', contents: lane },
    ],
    handleClickDropdownItem,
  );

  return (
    <Nav
      sido={sido}
      lane={lane}
      renderChecks={renderChecks}
      handleClickDropdownItem={handleClickDropdownItem}
    />
  );
};

export default NavContainer;
