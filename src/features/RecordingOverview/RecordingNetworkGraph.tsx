import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { GraphCanvas } from 'reagraph';


const RecordingNetworkGraph_RecordingFragment = graphql(/* GraphQL */ `
  fragment RecordingNetworkGraph_RecordingFragment on Recording {
    samples {
      id
      propagations {
        id
        propagations {
          id
          propagations {
            id
          }
        }
        plates {
          id
          propagations {
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

  return (
    <div className="relative" style={ { height: `${ height }px`, width: `${ width }px` } }>
      <GraphCanvas
        nodes={ [
          {
            id: 'n-1',
            label: '1'
          },
          {
            id: 'n-2',
            label: '2'
          }
        ] }
        edges={ [
          {
            id: '1->2',
            source: 'n-1',
            target: 'n-2',
            label: 'Edge 1-2'
          }
        ] }
      />
    </div>
  );
};

export default RecordingNetworkGraph;
