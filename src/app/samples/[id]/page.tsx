import SampleOverview from '@/components/SampleOverview/SampleOverview';
import { graphql } from '@/graphql/gql';
import { getClient } from '@/lib/apollo';
import { Metadata } from 'next';


const GetSampleById_Query = graphql(`
  query GetSampleById_Query($id: ID!) {
    samples(where: {id: $id}) {
      ...SampleOverview_SampleFragment
    }
  }
`);

export const metadata: Metadata = {
  title: 'Samples',
  description: 'TEST',
};

export default async function SamplePage({ params }: {
  params: {
    id: string
  }
}) {
  const { data } = await getClient().query({
    query: GetSampleById_Query,
    variables: { id: params.id }
  });

  return (
    <main>
      <SampleOverview sampleFragmentRef={ data.samples[0] }/>
    </main>
  );
}
