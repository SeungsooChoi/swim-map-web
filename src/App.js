import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { client } from './apollo';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import { GlobalStyles } from './styles';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
