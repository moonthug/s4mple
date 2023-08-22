# Cypher

Create Dummy Data

```cypher

CREATE (u:User {
  id:        '00000000-0000-0000-0000-000000000000',
  email:     'stuff@m00nplug.com',
  password:  '$2b$10$NECBRlilpXTTzzQnT3AIjOYF3R9v6m/Cat0BDDFAoJHvYeMawxdiK',
  createdAt: datetime(),
  updatedAt: datetime()
})

CREATE (r1:Recording {
  id:          'r0000000-0000-0000-0000-000000000001',
  code:        'RC0001',
  name:        'Caunton 1',
  description: 'Recording samples in Caunton village',
  createdAt:   datetime(),
  updatedAt:   datetime()
})
CREATE (r2:Recording {
  id:          'r0000000-0000-0000-0000-000000000002',
  code:        'RC0002',
  name:        'Caunton 2',
  description: 'Recording samples in Caunton village',
  createdAt:   datetime(),
  updatedAt:   datetime()
})

CREATE (re1:Recipe {
  id:          're000000-0000-0000-0000-000000000001',
  name:        'Wort Recipe 1',
  description: 'Wort Recipe',
  type:        'WORT',
  longitude:   -0.885666,
  latitude:    53.135087,
  createdAt:   datetime(),
  updatedAt:   datetime()
})
CREATE (re2:Recipe {
  id:          're000000-0000-0000-0000-000000000002',
  name:        'Wort Recipe 2',
  description: 'Wort Recipe with Hops',
  type:        'WORT',
  longitude:   -0.885666,
  latitude:    53.135087,
  createdAt:   datetime(),
  updatedAt:   datetime()
})
CREATE (re3:Recipe {
  id:          're000000-0000-0000-0000-000000000003',
  name:        'Agar Recipe 1',
  description: 'Wort Recipe with Hops',
  type:        'AGAR',
  longitude:   -0.885666,
  latitude:    53.135087,
  createdAt:   datetime(),
  updatedAt:   datetime()
})

CREATE (s1:Sample {
  id:          's0000000-0000-0000-0000-000000000001',
  code:        'SP0001',
  description: 'Plum',
  type:        'SWAB',
  longitude:   -0.885666,
  latitude:    53.135087,
  createdAt:   datetime(),
  updatedAt:   datetime()
})
CREATE (s2:Sample {
  id:          's0000000-0000-0000-0000-000000000002',
  code:        'SP0002',
  description: 'Grape',
  type:        'SAMPLE',
  longitude:   -0.891537,
  latitude:    53.136499,
  createdAt:   datetime(),
  updatedAt:   datetime()
})
CREATE (s3:Sample {
  id:          's0000000-0000-0000-0000-000000000003',
  code:        'SP0003',
  description: 'Wheat Kernel',
  longitude:   -0.884089,
  latitude:    53.137588,
  createdAt:   datetime(),
  updatedAt:   datetime()
})
CREATE (s4:Sample {
  id:          's0000000-0000-0000-0000-000000000004',
  code:        'SP0004',
  description: 'Black Berry',
  longitude:   -0.884099,
  latitude:    53.137588,
  createdAt:   datetime(),
  updatedAt:   datetime()
})

CREATE (pr1:Propagation {
  id:        'pr000000-0000-0000-0000-000000000001',
  code:      'PR0001',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pr2:Propagation {
  id:        'pr000000-0000-0000-0000-000000000002',
  code:      'PR0002',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pr3:Propagation {
  id:        'pr000000-0000-0000-0000-000000000003',
  code:      'PR0003',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pr4:Propagation {
  id:        'pr000000-0000-0000-0000-000000000004',
  code:      'PR0004',
  createdAt: datetime(),
  updatedAt: datetime()
})

CREATE (pl1:Plate {
  id:        'pl000000-0000-0000-0000-000000000001',
  code:      'PL0001',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pl2:Plate {
  id:        'pl000000-0000-0000-0000-000000000002',
  code:      'PL0002',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pl3:Plate {
  id:        'pl000000-0000-0000-0000-000000000003',
  code:      'PL0003',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pl4:Plate {
  id:        'pl000000-0000-0000-0000-000000000004',
  code:      'PL0004',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pl5:Plate {
  id:        'pl000000-0000-0000-0000-000000000005',
  code:      'PL0005',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pl6:Plate {
  id:        'pl000000-0000-0000-0000-000000000006',
  code:      'PL0006',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pl7:Plate {
  id:        'pl000000-0000-0000-0000-000000000007',
  code:      'PL0007',
  createdAt: datetime(),
  updatedAt: datetime()
})
CREATE (pl8:Plate {
  id:        'pl000000-0000-0000-0000-000000000008',
  code:      'PL0008',
  createdAt: datetime(),
  updatedAt: datetime()
})

CREATE (r1)-[:HAS_SAMPLE]->(s1)
CREATE (r1)-[:HAS_SAMPLE]->(s2)
CREATE (r1)-[:HAS_SAMPLE]->(s3)
CREATE (r2)-[:HAS_SAMPLE]->(s4)

CREATE (s1)-[:HAS_PROPAGATION]->(pr1)
CREATE (s1)-[:HAS_PROPAGATION]->(pr2)
CREATE (s2)-[:HAS_PROPAGATION]->(pr3)

CREATE (pr1)-[:HAS_RECIPE]->(re1)
CREATE (pr2)-[:HAS_RECIPE]->(re2)
CREATE (pr3)-[:HAS_RECIPE]->(re2)

CREATE (pr1)-[:HAS_PLATE]->(pl1)
CREATE (pr1)-[:HAS_PLATE]->(pl2)
CREATE (pr2)-[:HAS_PLATE]->(pl3)
CREATE (pr2)-[:HAS_PLATE]->(pl4)
CREATE (pr3)-[:HAS_PLATE]->(pl5)
CREATE (pr3)-[:HAS_PLATE]->(pl6)
CREATE (pr3)-[:HAS_PLATE]->(pl7)
CREATE (pr3)-[:HAS_PLATE]->(pl8)

CREATE (pl1)-[:HAS_RECIPE]->(re3)
CREATE (pl2)-[:HAS_RECIPE]->(re3)
CREATE (pl3)-[:HAS_RECIPE]->(re3)
CREATE (pl4)-[:HAS_RECIPE]->(re3)
CREATE (pl5)-[:HAS_RECIPE]->(re3)
CREATE (pl6)-[:HAS_RECIPE]->(re3)
CREATE (pl7)-[:HAS_RECIPE]->(re3)
CREATE (pl8)-[:HAS_RECIPE]->(re3)


RETURN u
```

Clear all

```cypher

MATCH (n)
DETACH DELETE n
```

# GraphQL

Recipes

```graphql
query MyQuery {
  recipes {
    parentConnection {
      edges {
        node {
          __typename
          ... on  Plate{
            id
          }
          ... on  Propagation{
            id
          }
        }
      }
      totalCount
    }
  }
}
```
