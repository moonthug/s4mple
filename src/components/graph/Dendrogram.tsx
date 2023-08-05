import useForceUpdate from '@/components/graph/useForceUpdate';
import { LinearGradient } from '@visx/gradient';
import { Group } from '@visx/group';
import { hierarchy, Tree } from '@visx/hierarchy';
import { LinkHorizontal } from '@visx/shape';
import React from 'react';


export enum NodeType {
  RECORDING = 'RECORDING',
  SAMPLE = 'SAMPLE',
  PROPAGATION = 'PROPAGATION',
  PLATE = 'PLATE'
}

export type NodeShape = {
  name: string;
  type: NodeType;
  children?: NodeShape[];
}

const defaultMargin = { top: 40, left: 60, right: 60, bottom: 40 };

export type DendrogramProps = {
  data: NodeShape;
  width: number;
  height: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number
  };
};

export const Dendrogram: React.FC<DendrogramProps> = ({
  data,
  width,
  height,
  margin = defaultMargin
}) => {
  // const [layout, setLayout] = useState<string>('cartesian');
  // const [orientation, setOrientation] = useState<string>('horizontal');
  const forceUpdate = useForceUpdate();

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  let origin: {
    x: number;
    y: number
  };

  let sizeWidth: number;
  let sizeHeight: number;

  // if (layout === 'polar') {
  //   origin = {
  //     x: innerWidth / 2,
  //     y: innerHeight / 2,
  //   };
  //   sizeWidth = 2 * Math.PI;
  //   sizeHeight = Math.min(innerWidth, innerHeight) / 2;
  // } else {
  origin = { x: 0, y: 0 };
  // if (orientation === 'vertical') {
  //   sizeWidth = innerWidth;
  //   sizeHeight = innerHeight;
  // } else {
  sizeWidth = innerHeight;
  sizeHeight = innerWidth;
  //   }
  // }

  return (
    <div>
      <svg width={ width } height={ height }>
        <LinearGradient id="links-gradient" from="#fd9b93" to="#fe6e9e"/>

        <rect width={ width } height={ height } rx={ 14 } fill="#272b4d"/>
        <Group top={ margin.top } left={ margin.left }>
          <Tree
            root={ hierarchy(data, (d) => d.children) }
            size={ [sizeWidth, sizeHeight] }
            separation={ (a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth }
          >
            { (tree) => (
              <Group top={ origin.y } left={ origin.x }>
                { tree.links().map((link, i) => (
                  <LinkHorizontal
                    key={ i }
                    data={ link }
                    stroke="rgb(254,110,158,0.6)"
                    strokeWidth="1"
                    fill="none"
                  />
                )) }

                { tree.descendants().map((node, key) => {
                  const width = 60;
                  const height = 20;

                  return (
                    <Group top={ node.x } left={ node.y } key={ key }>
                      { node.depth === 0 && (
                        <circle
                          r={ 30 }
                          fill="url('#links-gradient')"
                          // onClick={ () => {
                          //   node.data.isExpanded = !node.data.isExpanded;
                          //   console.log(node);
                          //   forceUpdate();
                          // } }
                        />
                      ) }
                      { node.depth !== 0 && (
                        <rect
                          height={ height }
                          width={ width }
                          y={ -height / 2 }
                          x={ -width / 2 }
                          fill="#272b4d"
                          stroke={ node.data.children ? '#03c0dc' : '#26deb0' }
                          strokeWidth={ 1 }
                          strokeDasharray={ node.data.children ? '0' : '2,2' }
                          strokeOpacity={ node.data.children ? 1 : 0.6 }
                          rx={ node.data.children ? 0 : 10 }
                          onClick={ () => {
                            console.log(node);
                            forceUpdate();
                          } }
                        />
                      ) }
                      <text
                        dy=".33em"
                        fontSize={ 9 }
                        fontFamily="Arial"
                        textAnchor="middle"
                        style={ { pointerEvents: 'none' } }
                        fill={ node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0' }
                      >
                        { node.data.name }
                      </text>
                    </Group>
                  );
                }) }
              </Group>
            ) }
          </Tree>
        </Group>
      </svg>
    </div>
  );
};

export default Dendrogram;
