import Dendrogram, { NodeShape, NodeType } from '@/components/graph/Dendrogram';
import { shortenId } from '@/lib/utils/text';
import { Propagation } from '@/models/Propagation';


type PropagationDendrogramProps = {
  propagation: Propagation;
  width: number;
  height: number;
}

export const PropagationDendrogram: React.FC<PropagationDendrogramProps> = ({
  propagation,
  width,
  height
}) => {
  const propagationData: NodeShape = {
    name: 'Propagation',
    type: NodeType.PROPAGATION,
    children: propagation.plates.map(plate => ({
      name: shortenId(plate.id),
      type: NodeType.PLATE,
      children: plate.plates?.map(plate => ({
        name: shortenId(plate.id),
        type: NodeType.PLATE,
      }))
    }))
  };

  return (
    <Dendrogram
      data={ propagationData }
      width={ width }
      height={ height }
    />
  );
};

export default PropagationDendrogram;
