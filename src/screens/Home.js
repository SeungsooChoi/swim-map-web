import React, { useEffect } from 'react';
import useSwimPools from '../hooks/useSwimPools';
import { setSwimPool } from '../modules/swimPool';
import { useDispatch } from 'react-redux';
import HeaderContainer from '../containers/home/HeaderContainer';
import NavContainer from '../containers/home/NavContainer';
import PoolListContainer from '../containers/home/PoolListContainer';
import MapContainer from '../containers/home/MapContainer';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.125rem;
  min-height: 50rem;
`;

const Home = () => {
  const { data, loading } = useSwimPools();
  const dispatch = useDispatch();

  // DB에서 수영장 정보 가져와서 store에 저장
  useEffect(() => {
    if (data) {
      const dispatchSwimPool = () => {
        let pools = [...data.swimPools];
        const sortedPools = pools.sort((a, b) => a.id - b.id);
        dispatch(setSwimPool(sortedPools), [sortedPools]);
      };
      dispatchSwimPool();
    }
  }, [data, dispatch]);

  if (loading) return null;

  return (
    <>
      <HeaderContainer />
      <NavContainer />
      <Main>
        <PoolListContainer />
        <MapContainer />
      </Main>
    </>
  );
};

export default Home;
