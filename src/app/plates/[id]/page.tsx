import PlateOverview from '@/features/PlateOverview/PlateOverview';
import { graphql } from '@/graphql/generated/gql';
import { getClient } from '@/lib/apollo';
import { Metadata } from 'next';


const GetPlateById_Query = graphql(`
  query GetPlateById_Query($id: ID!) {
    plates(where: {id: $id}) {
      ...PlateOverview_PlateFragment
    }
  }
`);

export const metadata: Metadata = {
  title: 'Plates',
  description: 'TEST',
};

export default async function PlatePage({ params }: {
  params: {
    id: string
  }
}) {
  const { data } = await getClient().query({
    query: GetPlateById_Query,
    variables: { id: params.id }
  });

  return (
    <main>
      <PlateOverview plateFragmentRef={ data.plates[0] }/>
    </main>
  );
}
