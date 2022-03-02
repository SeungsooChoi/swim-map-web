import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
// import List from './components/admin/List';
// import PoolManagement from './components/admin/PoolManagement';
// import UserManagement from './components/admin/UserManagement';

function App() {
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
          {/* <Route path={routes.list} element={<List />} />
            <Route path={routes.poolManagement} element={<PoolManagement />} />
            <Route path={routes.userManagement} element={<UserManagement />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
