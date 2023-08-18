import FAB from '@/components/FAB';
import RecordingOverview from '@/components/RecordingOverview/RecordingOverview';
import { graphql } from '@/graphql/gql';
import { getClient } from '@/lib/apollo';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { MdExposurePlus1 } from 'react-icons/md';


const GetRecordingById_Query = graphql(`
  query GetRecordingById_Query($id: ID!) {
    recordings(where: {id: $id}) {
      ...RecordingOverview_RecordingFragment
    }
  }
`);


export const metadata: Metadata = {
  title: 'Recordings',
  description: 'TEST',
};


export default async function RecordingPage({ params }: {
  params: {
    id: string
  }
}) {
  const { data } = await getClient().query({ query: GetRecordingById_Query, variables: { id: params.id } });

  return (
    <main>
      <RecordingOverview recordingFragmentRef={ data.recordings[0] }/>
      <Link href="/samples/new">
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
