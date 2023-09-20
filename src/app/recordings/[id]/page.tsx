import RecordingOverview from '@/features/RecordingOverview/RecordingOverview';
import { graphql } from '@/graphql/generated/gql';
import { getClient } from '@/lib/apollo';
import { Metadata } from 'next';
import React from 'react';


export const revalidate = 0;

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
    </main>
  );
}
