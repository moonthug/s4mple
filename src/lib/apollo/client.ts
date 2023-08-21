'use server';

import { createClientConfig } from '@/lib/apollo/createClientConfig';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { NextSSRApolloClient, } from '@apollo/experimental-nextjs-app-support/ssr';


export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient(createClientConfig());
});
