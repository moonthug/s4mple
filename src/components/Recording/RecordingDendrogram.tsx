import Dendrogram, { NodeShape, NodeType } from '@/components/graph/Dendrogram';
import { Recording } from '@/models/Recording';
import { shortenId } from '../../utils/text';


type RecordingDendrogramProps = {
  recording: Recording;
  width: number;
  height: number;
}

export const RecordingDendrogram: React.FC<RecordingDendrogramProps> = ({
  recording,
  width,
  height
}) => {
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
