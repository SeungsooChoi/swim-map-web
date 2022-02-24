import React from 'react';
import { useSelector } from 'react-redux';
import PoolList from '../../components/home/PoolList';

const PoolListContainer = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));
  const { map } = useSelector(state => ({ map: state.map.map }));
  const { marker } = useSelector(state => ({ marker: state.map.marker }));
  const { infoWindow } = useSelector(state => ({
    infoWindow: state.map.infoWindow,
  }));

  return (
    <PoolList
      swimpool={swimpool}
      map={map}
      marker={marker}
      infoWindow={infoWindow}
    />
  );
};

export default PoolListContainer;
