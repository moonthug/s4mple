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
    "\n      query GetPropagationById($id: ID!){\n        propagations(where: {id: $id}) {\n          id\n          recipe {\n            id\n            name\n          }\n          plates {\n            id\n            recipe {\n              id\n              name\n            }\n            plates {\n              id\n              plates {\n                id\n                plates {\n                  id\n                }\n              }\n            }\n          }\n        }\n      }\n    ": types.GetPropagationByIdDocument,
    "\n  query GetRecordingById_Query($id: ID!) {\n    recordings(where: {id: $id}) {\n      ...RecordingOverview_RecordingFragment\n    }\n  }\n": types.GetRecordingById_QueryDocument,
    "\n  query GetRecordings {\n    ...RecordingList_QueryFragment\n  }\n": types.GetRecordingsDocument,
    "\n  query GetSampleById_Query($id: ID!) {\n    samples(where: {id: $id}) {\n      ...SampleOverview_SampleFragment\n    }\n  }\n": types.GetSampleById_QueryDocument,
    "\n  fragment RecordingList_QueryFragment on Query {\n    recordings {\n      id\n      name\n      description\n      createdAt\n      samples {\n        id\n      }\n    }\n  }\n": types.RecordingList_QueryFragmentFragmentDoc,
    "\n  fragment RecordingDendrogram_RecordingFragment on Recording {\n    samples {\n      id\n      propagations {\n        id\n        plates {\n          id\n        }\n      }\n    }\n  }\n": types.RecordingDendrogram_RecordingFragmentFragmentDoc,
    "\n  fragment RecordingOverview_RecordingFragment on Recording {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n    samples {\n      latitude\n      longitude\n    }\n    ...RecordingDendrogram_RecordingFragment\n    ...SampleList_RecordingFragment\n  }\n": types.RecordingOverview_RecordingFragmentFragmentDoc,
    "\n  fragment SampleList_RecordingFragment on Recording {\n    samples {\n      id\n      description\n      longitude\n      latitude\n      createdAt\n      propagations {\n        id\n      }\n    }\n  }\n": types.SampleList_RecordingFragmentFragmentDoc,
    "\n  fragment PropagationList_SampleFragment on Sample {\n    propagations {\n      id\n      createdAt\n      plates {\n        id\n      }\n      recipe {\n        id\n        name\n      }\n    }\n  }\n": types.PropagationList_SampleFragmentFragmentDoc,
    "\n  fragment SampleOverview_SampleFragment on Sample {\n    id\n    description\n    longitude\n    latitude\n    ...PropagationList_SampleFragment\n  }\n": types.SampleOverview_SampleFragmentFragmentDoc,
    "\n  mutation CreateRecording($input: [RecordingCreateInput!]!) {\n    createRecordings(input: $input) {\n      recordings {\n        id\n      }\n    }\n  }\n": types.CreateRecordingDocument,
    "\n  mutation CreateSample($input: [SampleCreateInput!]!) {\n    createSamples(input: $input) {\n      samples {\n        id\n      }\n    }\n  }\n": types.CreateSampleDocument,
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
export function graphql(source: "\n      query GetPropagationById($id: ID!){\n        propagations(where: {id: $id}) {\n          id\n          recipe {\n            id\n            name\n          }\n          plates {\n            id\n            recipe {\n              id\n              name\n            }\n            plates {\n              id\n              plates {\n                id\n                plates {\n                  id\n                }\n              }\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetPropagationById($id: ID!){\n        propagations(where: {id: $id}) {\n          id\n          recipe {\n            id\n            name\n          }\n          plates {\n            id\n            recipe {\n              id\n              name\n            }\n            plates {\n              id\n              plates {\n                id\n                plates {\n                  id\n                }\n              }\n            }\n          }\n        }\n      }\n    "];
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
export function graphql(source: "\n  fragment RecordingList_QueryFragment on Query {\n    recordings {\n      id\n      name\n      description\n      createdAt\n      samples {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment RecordingList_QueryFragment on Query {\n    recordings {\n      id\n      name\n      description\n      createdAt\n      samples {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecordingDendrogram_RecordingFragment on Recording {\n    samples {\n      id\n      propagations {\n        id\n        plates {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment RecordingDendrogram_RecordingFragment on Recording {\n    samples {\n      id\n      propagations {\n        id\n        plates {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecordingOverview_RecordingFragment on Recording {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n    samples {\n      latitude\n      longitude\n    }\n    ...RecordingDendrogram_RecordingFragment\n    ...SampleList_RecordingFragment\n  }\n"): (typeof documents)["\n  fragment RecordingOverview_RecordingFragment on Recording {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n    samples {\n      latitude\n      longitude\n    }\n    ...RecordingDendrogram_RecordingFragment\n    ...SampleList_RecordingFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SampleList_RecordingFragment on Recording {\n    samples {\n      id\n      description\n      longitude\n      latitude\n      createdAt\n      propagations {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SampleList_RecordingFragment on Recording {\n    samples {\n      id\n      description\n      longitude\n      latitude\n      createdAt\n      propagations {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PropagationList_SampleFragment on Sample {\n    propagations {\n      id\n      createdAt\n      plates {\n        id\n      }\n      recipe {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PropagationList_SampleFragment on Sample {\n    propagations {\n      id\n      createdAt\n      plates {\n        id\n      }\n      recipe {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SampleOverview_SampleFragment on Sample {\n    id\n    description\n    longitude\n    latitude\n    ...PropagationList_SampleFragment\n  }\n"): (typeof documents)["\n  fragment SampleOverview_SampleFragment on Sample {\n    id\n    description\n    longitude\n    latitude\n    ...PropagationList_SampleFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRecording($input: [RecordingCreateInput!]!) {\n    createRecordings(input: $input) {\n      recordings {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRecording($input: [RecordingCreateInput!]!) {\n    createRecordings(input: $input) {\n      recordings {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSample($input: [SampleCreateInput!]!) {\n    createSamples(input: $input) {\n      samples {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSample($input: [SampleCreateInput!]!) {\n    createSamples(input: $input) {\n      samples {\n        id\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;