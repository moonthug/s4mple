import Recording from '@/components/Recording/Recording';
import client from '@/lib/apollo';
import { Recording as RecordingModel } from '@/models/Recording';
import { gql } from '@apollo/client';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Recordings',
  description: 'TEST',
};

async function getRecording(id: string) {
  const { data } = await client.query<{
    recordings: RecordingModel[]
  }>({
    query: gql`
      query GetRecordingById($id: ID!){
        recordings(where: {id: $id}) {
          id
          name
          description
          createdAt
          updatedAt
          samples {
            id
            description
            longitude
            latitude
            createdAt
            propagations {
              id
            }
          }
        }
      }
    `,
    variables: {
      id
    }
  });

  return data.recordings[0] || null;
}

export default async function RecordingPage({ params }: {
  params: {
    id: string
  }
}) {
  const recording = await getRecording(params.id);

  return (
    <main>
      <Recording recording={ recording }/>
    </main>
  );
}
