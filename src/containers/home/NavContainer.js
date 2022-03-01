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

  // 시/도명, 레인 드롭다운내의 아이템 클릭이벤트
  const handleClickDropdownItem = item => {
    if (sido.includes(item)) {
      dispatch(setSido(getArrayWithChangedObject(sido, item)));
    } else if (lane.includes(item)) {
      dispatch(setLane(getArrayWithChangedObject(lane, item)));
    }
  };

  // 클릭한 시/도명 제거 클릭이벤트
  const onClickRemoveSidoFilter = item =>
    dispatch(setSido(getArrayWithChangedObject(sido, item)));

  // 클릭한 레인 제거 클릭이벤트
  const onClickRemoveLaneFilter = item =>
    dispatch(setLane(getArrayWithChangedObject(lane, item)));

  // useDropdown
  const [renderChecks] = useDropdown(
    [
      { title: '시/도명', contents: sido },
      { title: '레인', contents: lane },
    ],
    handleClickDropdownItem,
  );

  return (
    <Nav
      sido={sido}
      lane={lane}
      renderChecks={renderChecks}
      onClickRemoveSidoFilter={onClickRemoveSidoFilter}
      onClickRemoveLaneFilter={onClickRemoveLaneFilter}
    />
  );
};

export default NavContainer;
