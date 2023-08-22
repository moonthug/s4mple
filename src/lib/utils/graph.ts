type NodeTheme = {
  fill: string;
  size: number;
}

type Theme = {
  nodes: {
    [key: string]: NodeTheme;
  }
}

type ObjectToGraphOptions = {
  nodeTypeKey: string;
  maxDepth: number;
  theme: Theme;
}

function nodeTheme(theme: Theme, typeKey: string) {
  return theme.nodes[typeKey] || { fill: '#cccccc', size: 2 };
}

function objectToGraphInternal(
  object: any,
  options: Required<ObjectToGraphOptions>,
  nodes: any[] = [],
  edges: any[] = [],
  depth = 0
) {
  if (depth >= options.maxDepth) {
    return { nodes, edges };
  }

  nodes.push({
    id: object.id,
    label: object.code || object.name,
    ...nodeTheme(options.theme, object[options.nodeTypeKey]),
  });

  Object.entries(object).forEach(([key, value]) => {
    if (Array.isArray(value) && value.length && value[0].id) {
      value.forEach(value => {
        if (depth + 1 < options.maxDepth) {
          edges.push({
            id: `${ object.id }->${ value.id }`,
            source: object.id,
            target: value.id,
            label: `${ key }`
          });
        }
        objectToGraphInternal(value, options, nodes, edges, depth + 1);
      });
    }
  });

  return { nodes, edges };
}

export function objectToGraph(
  object: any,
  options: ObjectToGraphOptions = {
    maxDepth: 5,
    nodeTypeKey: '__typename',
    theme: {
      nodes: {
        'Recording': {
          fill: '#ccccff',
          size: 3,
        },
        'Sample': {
          fill: '#ccffff',
          size: 2,
        },
        'Propagation': {
          fill: '#ffccff',
          size: 2,
        },
        'Plate': {
          fill: '#ccffcc',
          size: 2,
        }
      }
    }
  }
) {
  if (Array.isArray(object)) {
    object = { id: 'root', root: object };
  }

  return objectToGraphInternal(object, options);
}
