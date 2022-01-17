import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const TOKEN = 'token';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

export const isLoggedUser = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const userLogIn = token => {
  localStorage.setItem(TOKEN, token);
  isLoggedUser(true);
};

export const userLogOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedUser(false);
  window.location.reload();
};

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
