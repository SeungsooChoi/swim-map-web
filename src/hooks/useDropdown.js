import React, { useRef, useState } from 'react';
import Dropdown from '../components/common/Dropdown';

const useDropdown = (items, eventHandler = null) => {
  const [isActive, setIsActive] = useState(() => items.map(() => false));
  const dropdownRef = useRef(null);

  // 드롭다운 버튼 클릭 이벤트
  const onClick = index => {
    const newActive = [...isActive];
    newActive.splice(index, 1, !isActive[index]);
    setIsActive(newActive);
  };

  const renderDropdown = () =>
    items.map((item, index) => (
      <Dropdown
        key={index}
        title={item.title}
        contents={item.contents}
        isActive={isActive[index]}
        dropdownRef={dropdownRef}
        onClick={() => onClick(index)}
        eventHandler={eventHandler}
      />
    ));

  return [renderDropdown];
};
export default useDropdown;
