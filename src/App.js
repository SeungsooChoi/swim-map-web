import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import { GlobalStyles } from './styles';
import { client } from './apollo';

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
