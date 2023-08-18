import Dendrogram, { NodeShape, NodeType } from '@/components/graph/Dendrogram';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { shortenId } from '../../utils/text';


const RecordingDendrogram_RecordingFragment = graphql(/* GraphQL */ `
  fragment RecordingDendrogram_RecordingFragment on Recording {
    samples {
      id
      propagations {
        id
        plates {
          id
        }
      }
    }
  }
`);

type RecordingDendrogramProps = {
  recordingFragmentRef: FragmentType<typeof RecordingDendrogram_RecordingFragment>;
  width: number;
  height: number;
}

export const RecordingDendrogram: React.FC<RecordingDendrogramProps> = ({
  recordingFragmentRef,
  width,
  height
}) => {
  const recording = useFragment(RecordingDendrogram_RecordingFragment, recordingFragmentRef);

  const recordingData: NodeShape = {
    name: 'Recording',
    type: NodeType.RECORDING,
    children: recording.samples.map(sample => ({
      name: shortenId(sample.id),
      type: NodeType.SAMPLE,
      children: sample.propagations.map(propagation => ({
        name: shortenId(propagation.id),
        type: NodeType.PROPAGATION,
        children: propagation.plates?.map(plate => ({
          name: shortenId(plate.id),
          type: NodeType.PLATE,
        }))
      }))
    }))
  };

  return (
    <Dendrogram
      data={ recordingData }
      width={ width }
      height={ height }
    />
  );
};

export default RecordingDendrogram;
