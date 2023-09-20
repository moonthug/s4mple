'use client';

import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import { objectToGraph } from '@/lib/utils/graph';
import { GraphCanvas } from 'reagraph';


const PropagationNetworkGraph_PropagationFragment = graphql(/* GraphQL */ `
  fragment PropagationNetworkGraph_PropagationFragment on Propagation {
    propagations {
      __typename
      id
      code
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
    }
  }
`);

type PropagationNetworkGraphProps = {
  propagationFragmentRef: FragmentType<typeof PropagationNetworkGraph_PropagationFragment>;
  width: number;
  height: number;
}

export const PropagationNetworkGraph: React.FC<PropagationNetworkGraphProps> = ({
  height,
  propagationFragmentRef,
  width,
}) => {
  const propagation = useFragment(PropagationNetworkGraph_PropagationFragment, propagationFragmentRef);

  const { nodes, edges } = objectToGraph(propagation);

  return (
    <div className="relative" style={ { height: `${ height }px`, width: `${ width }px` } }>
      <GraphCanvas labelType="all" layoutType="treeLr2d" nodes={ nodes } edges={ edges }/>
    </div>
  );
};

export default PropagationNetworkGraph;
