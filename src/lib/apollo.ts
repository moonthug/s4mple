import { SERVER_URL } from '@/constants/graphql';
import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: SERVER_URL,
  credentials: 'include',
  cache: new InMemoryCache(),
});

export default client;
