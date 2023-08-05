import FAB from '@/components/FAB';
import { RecordingList } from '@/components/RecordingList/RecordingList';

import client from '@/lib/apollo';
import { Recording } from '@/models/Recording';
import { gql } from '@apollo/client';
import { Metadata } from 'next';
import Link from 'next/link';

import { MdExposurePlus1 } from 'react-icons/md';


export const metadata: Metadata = {
  title: 'Recordings',
  description: 'TEST',
};

async function getRecordingList() {
  const { data } = await client.query<{
    recordings: Recording[]
  }>({
    query: gql`
      query GetRecordings {
        recordings {
          id
          name
          description
          createdAt
          samples {
            id
          }
        }
      }
    `,
  });

  return data.recordings;
}

export default async function Recordings() {
  const recordings = await getRecordingList();

  return (
    <main>
      <RecordingList recordings={ recordings }/>
      <Link href="/recordings/create">
        <FAB
          icon={
            () => <MdExposurePlus1
              className="inline"
              color="#fff"
              size={ 24 }
            />
          }/>
      </Link>
    </main>
  );
}
