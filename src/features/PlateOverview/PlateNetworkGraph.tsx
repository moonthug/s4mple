import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import { objectToGraph } from '@/lib/utils/graph';
import { GraphCanvas } from 'reagraph';


const PlateNetworkGraph_PlateFragment = graphql(/* GraphQL */ `
  fragment PlateNetworkGraph_PlateFragment on Plate {
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

type SampleNetworkGraphProps = {
  plateFragmentRef: FragmentType<typeof PlateNetworkGraph_PlateFragment>;
  width: number;
  height: number;
}

export const PlateNetworkGraph: React.FC<SampleNetworkGraphProps> = ({
  height,
  plateFragmentRef,
  width,
}) => {
  const plate = useFragment(PlateNetworkGraph_PlateFragment, plateFragmentRef);

  const { nodes, edges } = objectToGraph(plate);

  return (
    <div className="relative" style={ { height: `${ height }px`, width: `${ width }px` } }>
      <GraphCanvas labelType="all" layoutType="treeLr2d" nodes={ nodes } edges={ edges }/>
    </div>
  );
};

export default PlateNetworkGraph;
