import PropagationOverview from '@/features/PropagationOverview/PropagationOverview';
import { graphql } from '@/graphql/gql';
import { getClient } from '@/lib/apollo';
import { Metadata } from 'next';


const GetPropagationById_Query = graphql(`
  query GetPropagationById_Query($id: ID!) {
    propagations(where: {id: $id}) {
      ...PropagationOverview_PropagationFragment
    }
  }
`);


export const metadata: Metadata = {
  title: 'Propagation',
  description: 'TEST',
};

export default async function PropagationPage({ params }: {
  params: {
    id: string
  }
}) {
  const { data } = await getClient().query({
    query: GetPropagationById_Query,
    variables: { id: params.id }
  });

  return (
    <main>
      <PropagationOverview propagationFragmentRef={ data.propagations[0] }/>
    </main>
  );
}
