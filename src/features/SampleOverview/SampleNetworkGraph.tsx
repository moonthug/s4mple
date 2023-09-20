import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import { objectToGraph } from '@/lib/utils/graph';
import { GraphCanvas } from 'reagraph';


const SampleNetworkGraph_SampleFragment = graphql(/* GraphQL */ `
  fragment SampleNetworkGraph_SampleFragment on Sample {
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
  sampleFragmentRef: FragmentType<typeof SampleNetworkGraph_SampleFragment>;
  width: number;
  height: number;
}

export const SampleNetworkGraph: React.FC<SampleNetworkGraphProps> = ({
  height,
  sampleFragmentRef,
  width,
}) => {
  const sample = useFragment(SampleNetworkGraph_SampleFragment, sampleFragmentRef);

  const { nodes, edges } = objectToGraph(sample);

  return (
    <div className="relative" style={ { height: `${ height }px`, width: `${ width }px` } }>
      <GraphCanvas labelType="all" layoutType="treeLr2d" nodes={ nodes } edges={ edges }/>
    </div>
  );
};

export default SampleNetworkGraph;
