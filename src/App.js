import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useSwimPools from './hooks/useSwimPools';
import { useDispatch } from 'react-redux';
import { setSwimPool } from './modules/swimPool';
import routes from './routes';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import NotFound from './screens/NotFound';
import Register from './screens/Register';
import { GlobalStyles } from './styles';
import PrivateRoute from './components/PrivateRoute';
import Admin from './screens/Admin';
import Dashboard from './components/admin/Dashboard';
import List from './components/admin/List';
// import PoolManagement from './components/admin/PoolManagement';
// import UserManagement from './components/admin/UserManagement';

function App() {
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
      <GlobalStyles />
      <Routes>
        <Route path={routes.home} exact element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signUp} element={<Signup />} />
        <Route path={routes.register} element={<Register />} />
        {/* 중첩 라우팅 */}
        <Route
          path={routes.admin}
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.list} element={<List />} />
          {/* <Route path={routes.poolManagement} element={<PoolManagement />} />
            <Route path={routes.userManagement} element={<UserManagement />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
