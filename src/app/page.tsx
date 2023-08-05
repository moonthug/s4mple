
import { gql } from "@apollo/client";
import { Card, Grid, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from '@tremor/react';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';

import Dashboard from '@/components/Dashboard/Dashboard';
import client from '@/lib/apollo';


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'TEST',
};

async function getRecordingList() {
  const { data } = await client.query({
    query: gql`
      query {
        recordings {
          id
        }
      }
    `,
  });

  return data.recordings;
}

export default async function Home() {
  const session = await getServerSession();

  const recordings = await getRecordingList();

  return (
    <main>
    </main>
  );
}
