import { graphql } from '@/graphql/generated/gql';
import { getClient } from '@/lib/apollo';
import { Metadata } from 'next';
import SampleOverview from '../../../features/SampleOverview/SampleOverview';


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
