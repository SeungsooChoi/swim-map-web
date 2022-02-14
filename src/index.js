import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './modules';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { client } from './apollo';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);

// # 로그인 된 user가 있으면 이곳에서 check 후 store에 dispatch?

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
