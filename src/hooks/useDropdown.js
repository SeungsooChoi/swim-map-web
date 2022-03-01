import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../components/common/Dropdown';
import { getArrayWithChangedObject } from '../lib/util';
import { setLane, setSido } from '../modules/filter';

const useDropdown = items => {
  const [isActive, setIsActive] = useState(() => items.map(() => false));
  const { sido } = useSelector(state => ({ sido: state.filter.sido }));
  const { lane } = useSelector(state => ({ lane: state.filter.lane }));
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  // 드롭다운 버튼 클릭 이벤트
  const onClick = index => {
    const newActive = [...isActive];
    newActive.splice(index, 1, !isActive[index]);
    setIsActive(newActive);
  };

  // 시/도명, 레인 드롭다운내의 아이템 클릭이벤트
  const handleClickDropdownItem = item => {
    if (sido.includes(item)) {
      dispatch(setSido(getArrayWithChangedObject(sido, item)));
    } else if (lane.includes(item)) {
      dispatch(setLane(getArrayWithChangedObject(lane, item)));
    }
  };

  const renderChecks = () =>
    items.map((item, index) => (
      <Dropdown
        key={index}
        title={item.title}
        contents={item.contents}
        isActive={isActive[index]}
        dropdownRef={dropdownRef}
        onClick={() => onClick(index)}
        handleClickDropdownItem={handleClickDropdownItem}
      />
    ));

  return [renderChecks];
};
export default useDropdown;
