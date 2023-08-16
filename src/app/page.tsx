import client from '@/lib/apollo';
import { gql } from '@apollo/client';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';


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


  // const recordings = await getRecordingList();

  return (
    <main>
    </main>
  );
}
