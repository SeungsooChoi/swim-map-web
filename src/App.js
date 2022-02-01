import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalStyles } from './styles';
import useSwimPools from './hooks/useSwimPools';
import routes from './routes';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import NotFound from './screens/NotFound';
import Register from './screens/Register';
import { setSwimPool } from './modules/swimPool';
import PrivateRoute from './components/PrivateRoute';
import Admin from './screens/Admin';

function App() {
  const { data, loading } = useSwimPools();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      // DB에서 수영장 정보 가져와서 store에 저장
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
      <Router>
        <Routes>
          <Route path={routes.home} exact element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.signUp} element={<Signup />} />
          <Route path={routes.register} element={<Register />} />
          <Route
            path={routes.admin}
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
