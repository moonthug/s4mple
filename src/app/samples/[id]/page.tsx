import Sample from '@/components/Sample/Sample';
import client from '@/lib/apollo';
import { Sample as SampleModel } from '@/models/Sample';
import { gql } from '@apollo/client';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Samples',
  description: 'TEST',
};

async function getSample(id: string) {
  const { data } = await client.query<{
    samples: SampleModel[]
  }>({
    query: gql`
      query GetSampleById($id: ID!){
        samples(where: {id: $id}) {
          id
          description
          longitude
          latitude
          propagations {
            id
            plates {
              id
            }
            recipe {
              id
              name
            }
          }
        }
      }
    `,
    variables: {
      id
    }
  });

  return data.samples[0] || null;
}

export default async function SamplePage({ params }: {
  params: {
    id: string
  }
}) {
  const sample = await getSample(params.id);

  return (
    <main>
      <Sample sample={ sample }/>
    </main>
  );
}
