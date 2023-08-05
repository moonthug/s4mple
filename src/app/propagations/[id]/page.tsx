import Propagation from '@/components/Propagation/Propagation';
import client from '@/lib/apollo';
import { Propagation as PropagationModel } from '@/models/propagation';
import { gql } from '@apollo/client';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Propagation',
  description: 'TEST',
};

async function getPropagation(id: string) {
  const { data } = await client.query<{
    propagations: PropagationModel[]
  }>({
    query: gql`
      query GetPropagationById($id: ID!){
        propagations(where: {id: $id}) {
          id
          recipe {
            id
            name
          }
          plates {
            id
            recipe {
              id
              name
            }
            plates {
              id
              plates {
                id
                plates {
                  id
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      id
    }
  });

  return data.propagations[0] || null;
}

export default async function PropagationPage({ params }: {
  params: {
    id: string
  }
}) {
  const propagation = await getPropagation(params.id);

  return (
    <main>
      <Propagation propagation={ propagation }/>
    </main>
  );
}
