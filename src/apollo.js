import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const TOKEN = 'token';

export const isLoggedUser = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const userLogIn = token => {
  localStorage.setItem(TOKEN, token);
  isLoggedUser(true);
};

export const userLogOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedUser(false);
};

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
