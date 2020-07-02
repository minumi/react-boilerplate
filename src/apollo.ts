import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, concat, Operation } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { toast } from 'react-toastify';

const getToken = () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return token;
  } else {
    return '';
  }
};

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      toast.error(`Unexpected error: ${message}`);
    });
  }
  if (networkError) {
    toast.error(`Network error: ${networkError}`);
  }
});

const authMiddleware = new ApolloLink((operation: Operation, forward: any) => {
  operation.setContext({
    headers: {
      'X-JWT': getToken(),
    },
  });
  return forward(operation);
});

const localStateLink = withClientState({
  cache,
  defaults: {
    auth: {
      __typename: 'Auth',
      isLoggedIn: Boolean(localStorage.getItem('jwt')),
    },
  },
  resolvers: {
    Mutation: {
      logUserIn: (
        _: any,
        { token }: { token: string },
        { cache: appCache }: any,
      ) => {
        localStorage.setItem('jwt', token);
        appCache.writeData({
          data: {
            auth: {
              __typename: 'Auth',
              isLoggedIn: true,
            },
          },
        });
        return null;
      },
      logUserOut: (_: any, __: any, { cache: appCache }: any) => {
        localStorage.removeItem('jwt');
        appCache.writeData({
          data: {
            auth: {
              __typename: 'Auth',
              isLoggedIn: false,
            },
          },
        });
        return null;
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    errorLink,
    localStateLink,
    concat(authMiddleware, httpLink),
  ]),
});

export default client;
