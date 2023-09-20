/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetPlateById_Query($id: ID!) {\n    plates(where: {id: $id}) {\n      ...PlateOverview_PlateFragment\n    }\n  }\n": types.GetPlateById_QueryDocument,
    "\n  query GetPropagationById_Query($id: ID!) {\n    propagations(where: {id: $id}) {\n      ...PropagationOverview_PropagationFragment\n    }\n  }\n": types.GetPropagationById_QueryDocument,
    "\n  query GetRecordingById_Query($id: ID!) {\n    recordings(where: {id: $id}) {\n      ...RecordingOverview_RecordingFragment\n    }\n  }\n": types.GetRecordingById_QueryDocument,
    "\n  query GetRecordings {\n    ...RecordingList_QueryFragment\n  }\n": types.GetRecordingsDocument,
    "\n  query GetSampleById_Query($id: ID!) {\n    samples(where: {id: $id}) {\n      ...SampleOverview_SampleFragment\n    }\n  }\n": types.GetSampleById_QueryDocument,
    "\n  mutation CreateRecording($input: [RecordingCreateInput!]!) {\n    createRecordings(input: $input) {\n      recordings {\n        id\n      }\n    }\n  }\n": types.CreateRecordingDocument,
    "\n  query GetRecipes($type: RecipeType) {\n    recipes(where: { type: $type }) {\n      id\n      name\n    }\n  }\n": types.GetRecipesDocument,
    "\n  mutation CreatePropagation($input: [PropagationCreateInput!]!) {\n    createPropagations(input: $input) {\n      propagations {\n        ...UpsertPropagationModal_PropagationFragment\n      }\n    }\n  }\n": types.CreatePropagationDocument,
    "\n  fragment UpsertPropagationModal_PropagationFragment on Propagation {\n    id\n    code\n    description\n    recipe {\n      id\n    }\n  }\n": types.UpsertPropagationModal_PropagationFragmentFragmentDoc,
    "\n  query GetAllNodes {\n    recordings {\n      __typename\n      id\n      code\n      samples {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n          plates {\n            ...PlateFields_PlateFragment\n            propagations {\n              ...PropagationFields_PropagationFragment\n              plates {\n                ...PlateFields_PlateFragment\n                propagations {\n                  ...PropagationFields_PropagationFragment\n                }\n              }\n            }\n          }\n          propagations {\n            ...PropagationFields_PropagationFragment\n            plates {\n              ...PlateFields_PlateFragment\n              propagations {\n                ...PropagationFields_PropagationFragment\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAllNodesDocument,
    "\n  fragment PlateNetworkGraph_PlateFragment on Plate {\n    propagations {\n      __typename\n      id\n      code\n      propagations {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n      plates {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n    }\n  }\n": types.PlateNetworkGraph_PlateFragmentFragmentDoc,
    "\n  fragment PlateOverview_PlateFragment on Plate {\n    id\n    code\n    recipe {\n      __typename\n    }\n    ...PlateNetworkGraph_PlateFragment\n    ...PropagationList_PlateFragment\n  }\n": types.PlateOverview_PlateFragmentFragmentDoc,
    "\n  fragment PropagationList_PlateFragment on Plate {\n    propagations {\n      ...PropagationListItem_PropagationFragment\n    }\n  }\n": types.PropagationList_PlateFragmentFragmentDoc,
    "\n  fragment PropagationListItem_PropagationFragment on Propagation {\n    id\n    code\n    createdAt\n    plates {\n      id\n    }\n    propagations {\n      id\n    }\n    recipe {\n      id\n      name\n    }\n  }\n": types.PropagationListItem_PropagationFragmentFragmentDoc,
    "\n  fragment PlateList_PropagationFragment on Propagation {\n    plates {\n      code\n      id\n      createdAt\n      recipe {\n        id\n        name\n      }\n    }\n  }\n": types.PlateList_PropagationFragmentFragmentDoc,
    "\n  fragment PropagationNetworkGraph_PropagationFragment on Propagation {\n    propagations {\n      __typename\n      id\n      code\n      propagations {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n      plates {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n    }\n  }\n": types.PropagationNetworkGraph_PropagationFragmentFragmentDoc,
    "\n  fragment PropagationOverview_PropagationFragment on Propagation {\n    id\n    code\n    recipe {\n      name\n    }\n    ...PlateList_PropagationFragment\n    ...PropagationNetworkGraph_PropagationFragment\n    ...PropagationList_PropagationFragment\n    ...UpsertPropagationModal_PropagationFragment\n  }\n": types.PropagationOverview_PropagationFragmentFragmentDoc,
    "\n  mutation DeletePropagation_Mutation($id: ID!) {\n    deletePropagations(where: { id: $id }) {\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n": types.DeletePropagation_MutationDocument,
    "\n  fragment PropagationList_PropagationFragment on Propagation {\n    propagations {\n      ...PropagationListItem_PropagationFragment\n    }\n  }\n": types.PropagationList_PropagationFragmentFragmentDoc,
    "\n  fragment RecordingList_QueryFragment on Query {\n    recordings {\n      id\n      code\n      name\n      description\n      createdAt\n      samples {\n        id\n      }\n    }\n  }\n": types.RecordingList_QueryFragmentFragmentDoc,
    "\n  mutation CreateSample($input: [SampleCreateInput!]!) {\n    createSamples(input: $input) {\n      samples {\n        id\n      }\n    }\n  }\n": types.CreateSampleDocument,
    "\n  fragment RecordingNetworkGraph_RecordingFragment on Recording {\n    samples {\n      __typename\n      id\n      propagations {\n        __typename\n        id\n        propagations {\n          __typename\n          id\n          propagations {\n            __typename\n            id\n          }\n        }\n        plates {\n          __typename\n          id\n          propagations {\n            __typename\n            id\n          }\n        }\n      }\n    }\n  }\n": types.RecordingNetworkGraph_RecordingFragmentFragmentDoc,
    "\n  fragment RecordingOverview_RecordingFragment on Recording {\n    id\n    code\n    name\n    description\n    createdAt\n    updatedAt\n    ...RecordingSampleMap_RecordingFragment\n    ...RecordingNetworkGraph_RecordingFragment\n    ...SampleList_RecordingFragment\n  }\n": types.RecordingOverview_RecordingFragmentFragmentDoc,
    "\n  mutation DeleteRecording_Mutation($id: ID!) {\n    deleteRecordings(where: { id: $id }) {\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n": types.DeleteRecording_MutationDocument,
    "\n  fragment RecordingSampleMap_RecordingFragment on Recording {\n    samples {\n      longitude\n      latitude\n    }\n  }\n": types.RecordingSampleMap_RecordingFragmentFragmentDoc,
    "\n  fragment SampleList_RecordingFragment on Recording {\n    samples {\n      id\n      code\n      description\n      longitude\n      latitude\n      createdAt\n      propagations {\n        id\n      }\n    }\n  }\n": types.SampleList_RecordingFragmentFragmentDoc,
    "\n  fragment SampleMap_SampleFragment on Sample {\n    longitude\n    latitude\n  }\n": types.SampleMap_SampleFragmentFragmentDoc,
    "\n  fragment SampleNetworkGraph_SampleFragment on Sample {\n    propagations {\n      __typename\n      id\n      code\n      propagations {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n      plates {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n    }\n  }\n": types.SampleNetworkGraph_SampleFragmentFragmentDoc,
    "\n  fragment SampleOverview_SampleFragment on Sample {\n    id\n    code\n    description\n    longitude\n    latitude\n    ...SampleMap_SampleFragment\n    ...SampleNetworkGraph_SampleFragment\n    ...PropagationList_SampleFragment\n  }\n": types.SampleOverview_SampleFragmentFragmentDoc,
    "\n  mutation DeleteSample_Mutation($id: ID!) {\n    deleteSamples(where: { id: $id }) {\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n": types.DeleteSample_MutationDocument,
    "\n  fragment PropagationList_SampleFragment on Sample {\n    propagations {\n      ...PropagationListItem_PropagationFragment\n    }\n  }\n": types.PropagationList_SampleFragmentFragmentDoc,
    "\n  fragment PropagationFields_PropagationFragment on Propagation {\n    __typename\n    id\n    code\n  }\n": types.PropagationFields_PropagationFragmentFragmentDoc,
    "\n  fragment PlateFields_PlateFragment on Plate {\n    __typename\n    id\n    code\n  }\n": types.PlateFields_PlateFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPlateById_Query($id: ID!) {\n    plates(where: {id: $id}) {\n      ...PlateOverview_PlateFragment\n    }\n  }\n"): (typeof documents)["\n  query GetPlateById_Query($id: ID!) {\n    plates(where: {id: $id}) {\n      ...PlateOverview_PlateFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPropagationById_Query($id: ID!) {\n    propagations(where: {id: $id}) {\n      ...PropagationOverview_PropagationFragment\n    }\n  }\n"): (typeof documents)["\n  query GetPropagationById_Query($id: ID!) {\n    propagations(where: {id: $id}) {\n      ...PropagationOverview_PropagationFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRecordingById_Query($id: ID!) {\n    recordings(where: {id: $id}) {\n      ...RecordingOverview_RecordingFragment\n    }\n  }\n"): (typeof documents)["\n  query GetRecordingById_Query($id: ID!) {\n    recordings(where: {id: $id}) {\n      ...RecordingOverview_RecordingFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRecordings {\n    ...RecordingList_QueryFragment\n  }\n"): (typeof documents)["\n  query GetRecordings {\n    ...RecordingList_QueryFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSampleById_Query($id: ID!) {\n    samples(where: {id: $id}) {\n      ...SampleOverview_SampleFragment\n    }\n  }\n"): (typeof documents)["\n  query GetSampleById_Query($id: ID!) {\n    samples(where: {id: $id}) {\n      ...SampleOverview_SampleFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRecording($input: [RecordingCreateInput!]!) {\n    createRecordings(input: $input) {\n      recordings {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRecording($input: [RecordingCreateInput!]!) {\n    createRecordings(input: $input) {\n      recordings {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRecipes($type: RecipeType) {\n    recipes(where: { type: $type }) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetRecipes($type: RecipeType) {\n    recipes(where: { type: $type }) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePropagation($input: [PropagationCreateInput!]!) {\n    createPropagations(input: $input) {\n      propagations {\n        ...UpsertPropagationModal_PropagationFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePropagation($input: [PropagationCreateInput!]!) {\n    createPropagations(input: $input) {\n      propagations {\n        ...UpsertPropagationModal_PropagationFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UpsertPropagationModal_PropagationFragment on Propagation {\n    id\n    code\n    description\n    recipe {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment UpsertPropagationModal_PropagationFragment on Propagation {\n    id\n    code\n    description\n    recipe {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllNodes {\n    recordings {\n      __typename\n      id\n      code\n      samples {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n          plates {\n            ...PlateFields_PlateFragment\n            propagations {\n              ...PropagationFields_PropagationFragment\n              plates {\n                ...PlateFields_PlateFragment\n                propagations {\n                  ...PropagationFields_PropagationFragment\n                }\n              }\n            }\n          }\n          propagations {\n            ...PropagationFields_PropagationFragment\n            plates {\n              ...PlateFields_PlateFragment\n              propagations {\n                ...PropagationFields_PropagationFragment\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllNodes {\n    recordings {\n      __typename\n      id\n      code\n      samples {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n          plates {\n            ...PlateFields_PlateFragment\n            propagations {\n              ...PropagationFields_PropagationFragment\n              plates {\n                ...PlateFields_PlateFragment\n                propagations {\n                  ...PropagationFields_PropagationFragment\n                }\n              }\n            }\n          }\n          propagations {\n            ...PropagationFields_PropagationFragment\n            plates {\n              ...PlateFields_PlateFragment\n              propagations {\n                ...PropagationFields_PropagationFragment\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PlateNetworkGraph_PlateFragment on Plate {\n    propagations {\n      __typename\n      id\n      code\n      propagations {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n      plates {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PlateNetworkGraph_PlateFragment on Plate {\n    propagations {\n      __typename\n      id\n      code\n      propagations {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n      plates {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PlateOverview_PlateFragment on Plate {\n    id\n    code\n    recipe {\n      __typename\n    }\n    ...PlateNetworkGraph_PlateFragment\n    ...PropagationList_PlateFragment\n  }\n"): (typeof documents)["\n  fragment PlateOverview_PlateFragment on Plate {\n    id\n    code\n    recipe {\n      __typename\n    }\n    ...PlateNetworkGraph_PlateFragment\n    ...PropagationList_PlateFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PropagationList_PlateFragment on Plate {\n    propagations {\n      ...PropagationListItem_PropagationFragment\n    }\n  }\n"): (typeof documents)["\n  fragment PropagationList_PlateFragment on Plate {\n    propagations {\n      ...PropagationListItem_PropagationFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PropagationListItem_PropagationFragment on Propagation {\n    id\n    code\n    createdAt\n    plates {\n      id\n    }\n    propagations {\n      id\n    }\n    recipe {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment PropagationListItem_PropagationFragment on Propagation {\n    id\n    code\n    createdAt\n    plates {\n      id\n    }\n    propagations {\n      id\n    }\n    recipe {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PlateList_PropagationFragment on Propagation {\n    plates {\n      code\n      id\n      createdAt\n      recipe {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PlateList_PropagationFragment on Propagation {\n    plates {\n      code\n      id\n      createdAt\n      recipe {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PropagationNetworkGraph_PropagationFragment on Propagation {\n    propagations {\n      __typename\n      id\n      code\n      propagations {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n      plates {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PropagationNetworkGraph_PropagationFragment on Propagation {\n    propagations {\n      __typename\n      id\n      code\n      propagations {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n      plates {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PropagationOverview_PropagationFragment on Propagation {\n    id\n    code\n    recipe {\n      name\n    }\n    ...PlateList_PropagationFragment\n    ...PropagationNetworkGraph_PropagationFragment\n    ...PropagationList_PropagationFragment\n    ...UpsertPropagationModal_PropagationFragment\n  }\n"): (typeof documents)["\n  fragment PropagationOverview_PropagationFragment on Propagation {\n    id\n    code\n    recipe {\n      name\n    }\n    ...PlateList_PropagationFragment\n    ...PropagationNetworkGraph_PropagationFragment\n    ...PropagationList_PropagationFragment\n    ...UpsertPropagationModal_PropagationFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePropagation_Mutation($id: ID!) {\n    deletePropagations(where: { id: $id }) {\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n"): (typeof documents)["\n  mutation DeletePropagation_Mutation($id: ID!) {\n    deletePropagations(where: { id: $id }) {\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PropagationList_PropagationFragment on Propagation {\n    propagations {\n      ...PropagationListItem_PropagationFragment\n    }\n  }\n"): (typeof documents)["\n  fragment PropagationList_PropagationFragment on Propagation {\n    propagations {\n      ...PropagationListItem_PropagationFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecordingList_QueryFragment on Query {\n    recordings {\n      id\n      code\n      name\n      description\n      createdAt\n      samples {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment RecordingList_QueryFragment on Query {\n    recordings {\n      id\n      code\n      name\n      description\n      createdAt\n      samples {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSample($input: [SampleCreateInput!]!) {\n    createSamples(input: $input) {\n      samples {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSample($input: [SampleCreateInput!]!) {\n    createSamples(input: $input) {\n      samples {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecordingNetworkGraph_RecordingFragment on Recording {\n    samples {\n      __typename\n      id\n      propagations {\n        __typename\n        id\n        propagations {\n          __typename\n          id\n          propagations {\n            __typename\n            id\n          }\n        }\n        plates {\n          __typename\n          id\n          propagations {\n            __typename\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment RecordingNetworkGraph_RecordingFragment on Recording {\n    samples {\n      __typename\n      id\n      propagations {\n        __typename\n        id\n        propagations {\n          __typename\n          id\n          propagations {\n            __typename\n            id\n          }\n        }\n        plates {\n          __typename\n          id\n          propagations {\n            __typename\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecordingOverview_RecordingFragment on Recording {\n    id\n    code\n    name\n    description\n    createdAt\n    updatedAt\n    ...RecordingSampleMap_RecordingFragment\n    ...RecordingNetworkGraph_RecordingFragment\n    ...SampleList_RecordingFragment\n  }\n"): (typeof documents)["\n  fragment RecordingOverview_RecordingFragment on Recording {\n    id\n    code\n    name\n    description\n    createdAt\n    updatedAt\n    ...RecordingSampleMap_RecordingFragment\n    ...RecordingNetworkGraph_RecordingFragment\n    ...SampleList_RecordingFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteRecording_Mutation($id: ID!) {\n    deleteRecordings(where: { id: $id }) {\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteRecording_Mutation($id: ID!) {\n    deleteRecordings(where: { id: $id }) {\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecordingSampleMap_RecordingFragment on Recording {\n    samples {\n      longitude\n      latitude\n    }\n  }\n"): (typeof documents)["\n  fragment RecordingSampleMap_RecordingFragment on Recording {\n    samples {\n      longitude\n      latitude\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SampleList_RecordingFragment on Recording {\n    samples {\n      id\n      code\n      description\n      longitude\n      latitude\n      createdAt\n      propagations {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SampleList_RecordingFragment on Recording {\n    samples {\n      id\n      code\n      description\n      longitude\n      latitude\n      createdAt\n      propagations {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SampleMap_SampleFragment on Sample {\n    longitude\n    latitude\n  }\n"): (typeof documents)["\n  fragment SampleMap_SampleFragment on Sample {\n    longitude\n    latitude\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SampleNetworkGraph_SampleFragment on Sample {\n    propagations {\n      __typename\n      id\n      code\n      propagations {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n      plates {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SampleNetworkGraph_SampleFragment on Sample {\n    propagations {\n      __typename\n      id\n      code\n      propagations {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n      plates {\n        __typename\n        id\n        code\n        propagations {\n          __typename\n          id\n          code\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SampleOverview_SampleFragment on Sample {\n    id\n    code\n    description\n    longitude\n    latitude\n    ...SampleMap_SampleFragment\n    ...SampleNetworkGraph_SampleFragment\n    ...PropagationList_SampleFragment\n  }\n"): (typeof documents)["\n  fragment SampleOverview_SampleFragment on Sample {\n    id\n    code\n    description\n    longitude\n    latitude\n    ...SampleMap_SampleFragment\n    ...SampleNetworkGraph_SampleFragment\n    ...PropagationList_SampleFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteSample_Mutation($id: ID!) {\n    deleteSamples(where: { id: $id }) {\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteSample_Mutation($id: ID!) {\n    deleteSamples(where: { id: $id }) {\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PropagationList_SampleFragment on Sample {\n    propagations {\n      ...PropagationListItem_PropagationFragment\n    }\n  }\n"): (typeof documents)["\n  fragment PropagationList_SampleFragment on Sample {\n    propagations {\n      ...PropagationListItem_PropagationFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PropagationFields_PropagationFragment on Propagation {\n    __typename\n    id\n    code\n  }\n"): (typeof documents)["\n  fragment PropagationFields_PropagationFragment on Propagation {\n    __typename\n    id\n    code\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PlateFields_PlateFragment on Plate {\n    __typename\n    id\n    code\n  }\n"): (typeof documents)["\n  fragment PlateFields_PlateFragment on Plate {\n    __typename\n    id\n    code\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;