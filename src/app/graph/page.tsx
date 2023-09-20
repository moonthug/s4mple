import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';


const FullNetworkGraph = dynamic(
  () => import('@/features/FullNetworkGraph'),
  { ssr: false }
);


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
