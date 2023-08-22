import Dendrogram, { NodeShape, NodeType } from '@/components/graph/Dendrogram';
import { shortenId } from '@/lib/utils/text';
import { Sample } from '@/models/Sample';


type SampleDendrogramProps = {
  sample: Sample;
  width: number;
  height: number;
}

export const SampleDendrogram: React.FC<SampleDendrogramProps> = ({
  sample,
  width,
  height
}) => {
  const sampleData: NodeShape = {
    name: 'Sample',
    type: NodeType.RECORDING,
    children: sample.propagations.map(propagation => ({
      name: shortenId(propagation.id),
      type: NodeType.PROPAGATION,
      children: propagation.plates.map(plate => ({
        name: shortenId(plate.id),
        type: NodeType.PLATE,
        children: plate.plates?.map(plate => ({
          name: shortenId(plate.id),
          type: NodeType.PLATE,
        }))
      }))
    }))
  };

  return (
    <Dendrogram
      data={ sampleData }
      width={ width }
      height={ height }
    />
  );
};

export default SampleDendrogram;
