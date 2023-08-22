import FullNetworkGraph from '@/features/FullNetworkGraph';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Graph',
  description: 'TEST',
};

export default async function Home() {
  return (
    <main>
      <FullNetworkGraph/>
    </main>
  );
}
