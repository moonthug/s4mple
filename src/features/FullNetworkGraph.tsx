'use client';

import { graphql } from '@/graphql/gql';
import { objectToGraph } from '@/lib/utils/graph';
import { useQuery } from '@apollo/client';
import { GraphCanvas } from 'reagraph';


const GetAllNodes_Query = graphql(`
  query GetAllNodes {
    recordings {
      __typename
      id
      code
      samples {
        __typename
        id
        code
        propagations {
          __typename
          id
          code
          plates {
            __typename
            id
            code
            propagations {
              __typename
              id
              code
            }
          }
          propagations {
            __typename
            id
            code
            propagations {
              __typename
              id
              code
            }
          }
        }
      }
    }
  }
`);

type FullNetworkGraphProps = {}

export const FullNetworkGraph: React.FC<FullNetworkGraphProps> = ({}) => {
  const { data } = useQuery(GetAllNodes_Query);

  const { nodes, edges } = data
    ? objectToGraph(data.recordings)
    : { nodes: [], edges: [] };

  return (
    <div className="block w-full h-full">
      <GraphCanvas labelType="all" nodes={ nodes } edges={ edges }/>
    </div>
  );
};

export default FullNetworkGraph;
