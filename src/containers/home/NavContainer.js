import React from 'react';
import Nav from '../../components/home/Nav';

const NavContainer = ({ sido, setSido, lane, setLane }) => {
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
  const handleClickSido = item => {
    setSido(getArrayWithChangedObject(sido, item));
  };

  // 클릭한 시/도명 제거 클릭이벤트
  const handleClickRemoveSelectedSidoItem = item => {
    setSido(getArrayWithChangedObject(sido, item));
  };

  // 레인 드롭다운내의 아이템 클릭이벤트
  const handleClickLane = item => {
    setLane(getArrayWithChangedObject(lane, item));
  };

  // 클릭한 레인 제거 클릭이벤트
  const handleClickSelectedLaneItem = item => {
    setLane(getArrayWithChangedObject(lane, item));
  };

  return (
    <Nav
      sido={sido}
      lane={lane}
      handleClickSido={handleClickSido}
      handleClickRemoveSelectedSidoItem={handleClickRemoveSelectedSidoItem}
      handleClickLane={handleClickLane}
      handleClickSelectedLaneItem={handleClickSelectedLaneItem}
    />
  );
};

export default NavContainer;
