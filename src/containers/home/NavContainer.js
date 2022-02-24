import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/home/Nav';
import { setLane, setSido } from '../../modules/filter';

const NavContainer = () => {
  const { sido } = useSelector(state => ({ sido: state.filter.sido }));
  const { lane } = useSelector(state => ({ lane: state.filter.lane }));
  const dispatch = useDispatch();

  const getArrayWithChangedObject = (arr, item) => {
    let newArr = [...arr];
    newArr.forEach(data => {
      if (data.name === item.name) {
        data.clicked = !item.clicked;
      }
    });
    return newArr;
  };

  // 시/도명 드롭다운내의 아이템 클릭이벤트
  const onClickSidoDropdown = item =>
    dispatch(setSido(getArrayWithChangedObject(sido, item)));

  // 클릭한 시/도명 제거 클릭이벤트
  const onClickRemoveSidoFilter = item =>
    dispatch(setSido(getArrayWithChangedObject(sido, item)));

  // 레인 드롭다운내의 아이템 클릭이벤트
  const onClickLaneDropdown = item =>
    dispatch(setLane(getArrayWithChangedObject(lane, item)));

  // 클릭한 레인 제거 클릭이벤트
  const onClickRemoveLaneFilter = item =>
    dispatch(setLane(getArrayWithChangedObject(lane, item)));

  return (
    <Nav
      sido={sido}
      lane={lane}
      onClickSidoDropdown={onClickSidoDropdown}
      onClickLaneDropdown={onClickLaneDropdown}
      onClickRemoveSidoFilter={onClickRemoveSidoFilter}
      onClickRemoveLaneFilter={onClickRemoveLaneFilter}
    />
  );
};

export default NavContainer;
