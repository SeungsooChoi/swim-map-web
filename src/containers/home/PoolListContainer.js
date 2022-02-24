import React from 'react';
import { useSelector } from 'react-redux';
import PoolList from '../../components/home/PoolList';
import { sidoData } from '../../lib/sidoData';

const PoolListContainer = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));
  const { map } = useSelector(state => ({ map: state.map.map }));
  const { marker } = useSelector(state => ({ marker: state.map.marker }));
  const { infoWindow } = useSelector(state => ({
    infoWindow: state.map.infoWindow,
  }));

  // filter
  const { sido } = useSelector(state => ({
    sido: state.filter.sido,
  }));

  // sido에서 선택된 시의 list만 가져와서 값을 array로 전달.
  // PoolListItem에서 해당 array의 시군구 코드에 해당하는 값만 보여주게 하면 될듯.
  let filteredSido = [];
  let filteredLane = [];
  const getClickedSidoLane = () => {
    const clickedSido = sido
      .filter(selectedItem => selectedItem.clicked === true)
      .map(item => item.name);

    const sidoCodeList = sidoData.filter(item =>
      clickedSido.includes(item.name),
    );

    sidoCodeList.forEach(item => {
      filteredSido = filteredSido.concat(Object.values(item.list));
    });
  };

  getClickedSidoLane();

  return (
    <PoolList
      swimpool={swimpool}
      map={map}
      marker={marker}
      infoWindow={infoWindow}
      filteredSido={filteredSido}
      filteredLane={filteredLane}
    />
  );
};

export default PoolListContainer;
