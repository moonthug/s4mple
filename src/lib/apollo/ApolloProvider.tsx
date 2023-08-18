'use client';

import { createClientConfig } from '@/lib/apollo/createClientConfig';
import { ApolloNextAppProvider, NextSSRApolloClient, } from '@apollo/experimental-nextjs-app-support/ssr';
import { PropsWithChildren } from 'react';


const makeClient = () => new NextSSRApolloClient(createClientConfig());

export const ApolloProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloNextAppProvider makeClient={ makeClient }>
      { children }
    </ApolloNextAppProvider>
  );
};
