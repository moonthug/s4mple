import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import { objectToGraph } from '@/lib/utils/graph';
import { GraphCanvas } from 'reagraph';


const RecordingNetworkGraph_RecordingFragment = graphql(/* GraphQL */ `
  fragment RecordingNetworkGraph_RecordingFragment on Recording {
    samples {
      __typename
      id
      propagations {
        __typename
        id
        propagations {
          __typename
          id
          propagations {
            __typename
            id
          }
        }
        plates {
          __typename
          id
          propagations {
            __typename
            id
          }
        }
      }
    }
  }
`);

type RecordingNetworkGraphProps = {
  recordingFragmentRef: FragmentType<typeof RecordingNetworkGraph_RecordingFragment>;
  width: number;
  height: number;
}

export const RecordingNetworkGraph: React.FC<RecordingNetworkGraphProps> = ({
  height,
  recordingFragmentRef,
  width,
}) => {
  const recording = useFragment(RecordingNetworkGraph_RecordingFragment, recordingFragmentRef);

  const { nodes, edges } = objectToGraph(recording);

  return (
    <div className="relative" style={ { height: `${ height }px`, width: `${ width }px` } }>
      <GraphCanvas labelType="all" layoutType="treeLr2d" nodes={ nodes } edges={ edges }/>
    </div>
  );
};

export default RecordingNetworkGraph;
