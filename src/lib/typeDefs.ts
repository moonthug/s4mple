export const typeDefs = `#graphql

type User {
  id: ID! @id(autogenerate: true)
  email: String!
  password: String! @private

  createdAt: DateTime! @timestamp(operations: [CREATE])
  updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])

  recordings: [Recording!]! @relationship(type: "CREATED_BY", direction: IN)
  samples: [Sample!]! @relationship(type: "CREATED_BY", direction: IN)
}

type Recording {
  id: ID! @id(autogenerate: true)
  name: String
  description: String

  createdAt: DateTime! @timestamp(operations: [CREATE])
  updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  #    createdBy: User
  #        @relationship(type: "CREATED_BY", direction: OUT, nestedOperations: [])
  #        @settable(onCreate: false, onUpdate: false)

  samples: [Sample!]! @relationship(type: "HAS_SAMPLE", direction: OUT)
}

type Sample {
  id: ID! @id(autogenerate: true)
  description: String
  longitude: Float!
  latitude: Float!

  createdAt: DateTime! @timestamp(operations: [CREATE])
  updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  #    createdBy: User!
  #        @relationship(type: "CREATED_BY", direction: OUT, nestedOperations: [])
  #        @settable(onCreate: false, onUpdate: false)

  propagations: [Propagation!]! @relationship(type: "HAS_PROPAGATION", direction: OUT)
  recording: Recording! @relationship(type: "HAS_SAMPLE", direction: IN)
}

type Propagation {
  id: ID! @id(autogenerate: true)

  createdAt: DateTime! @timestamp(operations: [CREATE])
  updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  #    createdBy: User!
  #        @relationship(type: "CREATED_BY", direction: OUT, nestedOperations: [])
  #        @settable(onCreate: false, onUpdate: false)

  recipe: Recipe! @relationship(type: "HAS_RECIPE", direction: OUT)
  plates: [Plate!]! @relationship(type: "HAS_PLATE", direction: OUT)
  sample: Sample! @relationship(type: "HAS_SAMPLE", direction: IN)
}

union PlateParent = Propagation | Plate

type Plate {
  id: ID! @id(autogenerate: true)
  description: String

  createdAt: DateTime! @timestamp(operations: [CREATE])
  updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  #    createdBy: User!
  #        @relationship(type: "CREATED_BY", direction: OUT, nestedOperations: [])
  #        @settable(onCreate: false, onUpdate: false)

  recipe: Recipe! @relationship(type: "HAS_RECIPE", direction: OUT)
  plates: [Plate!]! @relationship(type: "HAS_PLATE", direction: OUT)
  propagation: Propagation! @relationship(type: "HAS_PROPAGATION", direction: IN)
  parent: PlateParent! @relationship(type: "HAS_PLATE", direction: IN)
}

enum RecipeType {
  PROPAGATION
  PLATE
}

union RecipeParent = Propagation | Plate

type Recipe {
  id: ID! @id(autogenerate: true)
  type: RecipeType!
  name: String!
  description: String

  createdAt: DateTime! @timestamp(operations: [CREATE])
  updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  #    createdBy: User!
  #        @relationship(type: "CREATED_BY", direction: OUT, nestedOperations: [])
  #        @settable(onCreate: false, onUpdate: false)

  parent: RecipeParent! @relationship(type: "HAS_RECIPE", direction: IN)
}
`;
