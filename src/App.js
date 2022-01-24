import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import { GlobalStyles } from './styles';
import { client } from './apollo';
import Signup from './screens/Signup';
import Login from './screens/Login';
import routes from './routes';
import Register from './screens/Register';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path={routes.home} exact element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.signUp} element={<Signup />} />
          <Route path={routes.register} element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
