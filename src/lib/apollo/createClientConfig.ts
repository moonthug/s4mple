import { SERVER_URL } from '@/constants/graphql';
import { from, HttpLink } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { onError } from '@apollo/client/link/error';
import { NextSSRInMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support/ssr';
import process from 'process';


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
      locations,
      path
    }) => {
      const errorMessage = (extensions?.originalError as any)?.message || message;

      console.error(
        `[GraphQL error]: Message: ${ errorMessage }, Location: ${ locations }, Path: ${ path }`,
      );
    });

  if (networkError) console.error(`[Network error]: ${ networkError }`);
});

export const createClientConfig = () => ({
  cache: new NextSSRInMemoryCache(),
  link: from(
    typeof window === 'undefined'
      ? [
        new SSRMultipartLink({ stripDefer: true, }),
        errorLink,
        httpLink,
      ]
      : [
        errorLink,
        httpLink,
      ]),
});
