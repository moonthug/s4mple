import { SERVER_URL } from '@/constants/graphql';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { onError } from '@apollo/client/link/error';
import * as process from 'process';


if (process.env.NODE_ENV !== 'production') {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const httpLink = new HttpLink({
  uri: SERVER_URL,
});

const errorLink = onError(({
  graphQLErrors,
  networkError
}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({
      extensions,
      message,
      name,
      locations,
      path
    }) => {
      const errorMessage = extensions?.originalError?.message || message;

      console.log(
        `[GraphQL error]: Message: ${ errorMessage }, Location: ${ locations }, Path: ${ path }`,
      );
    });

  if (networkError) console.log(`[Network error]: ${ networkError }`);
});


const client = new ApolloClient({
  credentials: 'include',
  cache: new InMemoryCache(),
  link: from([
    errorLink,
    httpLink,
  ]),
});

export default client;
