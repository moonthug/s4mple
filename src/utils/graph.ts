const house = {
  id: 'house',
  rooms: [
    {
      id: 'room1',
      items: [
        { id: 'item1' },
        { id: 'item2' },
      ]
    },
    {
      id: 'room2',
      items: [
        { id: 'item3' },
        { id: 'item4' },
      ]
    }
  ]
};

function objectToGraph(
  object: any,
  maxDepth: number,
  nodes: any[] = [],
  edges: any[] = [],
  depth = 0
) {
  if (depth >= maxDepth) {
    return { nodes, edges };
  }

  nodes.push({ id: object.id });


  Object.entries(object).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(value => {
        if (depth + 1 < maxDepth) {
          edges.push(`${ object.id }->${ value.id }`);
        }
        objectToGraph(value, maxDepth, nodes, edges, depth + 1);
      });
    }
  });


  return { nodes, edges };
}

console.dir(objectToGraph(house, 3));
