/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any; }
  File: { input: any; output: any; }
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateObservationsMutationResponse = {
  __typename?: 'CreateObservationsMutationResponse';
  info: CreateInfo;
  observations: Array<Observation>;
};

export type CreatePlatesMutationResponse = {
  __typename?: 'CreatePlatesMutationResponse';
  info: CreateInfo;
  plates: Array<Plate>;
};

export type CreatePropagationsMutationResponse = {
  __typename?: 'CreatePropagationsMutationResponse';
  info: CreateInfo;
  propagations: Array<Propagation>;
};

export type CreateRecipesMutationResponse = {
  __typename?: 'CreateRecipesMutationResponse';
  info: CreateInfo;
  recipes: Array<Recipe>;
};

export type CreateRecordingsMutationResponse = {
  __typename?: 'CreateRecordingsMutationResponse';
  info: CreateInfo;
  recordings: Array<Recording>;
};

export type CreateSamplesMutationResponse = {
  __typename?: 'CreateSamplesMutationResponse';
  info: CreateInfo;
  samples: Array<Sample>;
};

export type CreateUploadResultsMutationResponse = {
  __typename?: 'CreateUploadResultsMutationResponse';
  info: CreateInfo;
  uploadResults: Array<UploadResult>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime']['output'];
  min: Scalars['DateTime']['output'];
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  sum: Scalars['Float']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createObservations: CreateObservationsMutationResponse;
  createPlates: CreatePlatesMutationResponse;
  createPropagations: CreatePropagationsMutationResponse;
  createRecipes: CreateRecipesMutationResponse;
  createRecordings: CreateRecordingsMutationResponse;
  createSamples: CreateSamplesMutationResponse;
  createUploadResults: CreateUploadResultsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteObservations: DeleteInfo;
  deletePlates: DeleteInfo;
  deletePropagations: DeleteInfo;
  deleteRecipes: DeleteInfo;
  deleteRecordings: DeleteInfo;
  deleteSamples: DeleteInfo;
  deleteUploadResults: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateObservations: UpdateObservationsMutationResponse;
  updatePlates: UpdatePlatesMutationResponse;
  updatePropagations: UpdatePropagationsMutationResponse;
  updateRecipes: UpdateRecipesMutationResponse;
  updateRecordings: UpdateRecordingsMutationResponse;
  updateSamples: UpdateSamplesMutationResponse;
  updateUploadResults: UpdateUploadResultsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
  upload: UploadResult;
};


export type MutationCreateObservationsArgs = {
  input: Array<ObservationCreateInput>;
};


export type MutationCreatePlatesArgs = {
  input: Array<PlateCreateInput>;
};


export type MutationCreatePropagationsArgs = {
  input: Array<PropagationCreateInput>;
};


export type MutationCreateRecipesArgs = {
  input: Array<RecipeCreateInput>;
};


export type MutationCreateRecordingsArgs = {
  input: Array<RecordingCreateInput>;
};


export type MutationCreateSamplesArgs = {
  input: Array<SampleCreateInput>;
};


export type MutationCreateUploadResultsArgs = {
  input: Array<UploadResultCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteObservationsArgs = {
  delete?: InputMaybe<ObservationDeleteInput>;
  where?: InputMaybe<ObservationWhere>;
};


export type MutationDeletePlatesArgs = {
  delete?: InputMaybe<PlateDeleteInput>;
  where?: InputMaybe<PlateWhere>;
};


export type MutationDeletePropagationsArgs = {
  delete?: InputMaybe<PropagationDeleteInput>;
  where?: InputMaybe<PropagationWhere>;
};


export type MutationDeleteRecipesArgs = {
  delete?: InputMaybe<RecipeDeleteInput>;
  where?: InputMaybe<RecipeWhere>;
};


export type MutationDeleteRecordingsArgs = {
  delete?: InputMaybe<RecordingDeleteInput>;
  where?: InputMaybe<RecordingWhere>;
};


export type MutationDeleteSamplesArgs = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<SampleWhere>;
};


export type MutationDeleteUploadResultsArgs = {
  where?: InputMaybe<UploadResultWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateObservationsArgs = {
  connect?: InputMaybe<ObservationConnectInput>;
  connectOrCreate?: InputMaybe<ObservationConnectOrCreateInput>;
  create?: InputMaybe<ObservationRelationInput>;
  delete?: InputMaybe<ObservationDeleteInput>;
  disconnect?: InputMaybe<ObservationDisconnectInput>;
  update?: InputMaybe<ObservationUpdateInput>;
  where?: InputMaybe<ObservationWhere>;
};


export type MutationUpdatePlatesArgs = {
  connect?: InputMaybe<PlateConnectInput>;
  connectOrCreate?: InputMaybe<PlateConnectOrCreateInput>;
  create?: InputMaybe<PlateRelationInput>;
  delete?: InputMaybe<PlateDeleteInput>;
  disconnect?: InputMaybe<PlateDisconnectInput>;
  update?: InputMaybe<PlateUpdateInput>;
  where?: InputMaybe<PlateWhere>;
};


export type MutationUpdatePropagationsArgs = {
  connect?: InputMaybe<PropagationConnectInput>;
  connectOrCreate?: InputMaybe<PropagationConnectOrCreateInput>;
  create?: InputMaybe<PropagationRelationInput>;
  delete?: InputMaybe<PropagationDeleteInput>;
  disconnect?: InputMaybe<PropagationDisconnectInput>;
  update?: InputMaybe<PropagationUpdateInput>;
  where?: InputMaybe<PropagationWhere>;
};


export type MutationUpdateRecipesArgs = {
  connect?: InputMaybe<RecipeConnectInput>;
  connectOrCreate?: InputMaybe<RecipeConnectOrCreateInput>;
  create?: InputMaybe<RecipeRelationInput>;
  delete?: InputMaybe<RecipeDeleteInput>;
  disconnect?: InputMaybe<RecipeDisconnectInput>;
  update?: InputMaybe<RecipeUpdateInput>;
  where?: InputMaybe<RecipeWhere>;
};


export type MutationUpdateRecordingsArgs = {
  connect?: InputMaybe<RecordingConnectInput>;
  connectOrCreate?: InputMaybe<RecordingConnectOrCreateInput>;
  create?: InputMaybe<RecordingRelationInput>;
  delete?: InputMaybe<RecordingDeleteInput>;
  disconnect?: InputMaybe<RecordingDisconnectInput>;
  update?: InputMaybe<RecordingUpdateInput>;
  where?: InputMaybe<RecordingWhere>;
};


export type MutationUpdateSamplesArgs = {
  connect?: InputMaybe<SampleConnectInput>;
  connectOrCreate?: InputMaybe<SampleConnectOrCreateInput>;
  create?: InputMaybe<SampleRelationInput>;
  delete?: InputMaybe<SampleDeleteInput>;
  disconnect?: InputMaybe<SampleDisconnectInput>;
  update?: InputMaybe<SampleUpdateInput>;
  where?: InputMaybe<SampleWhere>;
};


export type MutationUpdateUploadResultsArgs = {
  update?: InputMaybe<UploadResultUpdateInput>;
  where?: InputMaybe<UploadResultWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUploadArgs = {
  file: Scalars['File']['input'];
};

export type Observation = {
  __typename?: 'Observation';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  parent: ObservationParent;
  parentConnection: ObservationParentConnection;
  type: ObservationType;
  updatedAt: Scalars['DateTime']['output'];
};


export type ObservationParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ObservationParentWhere>;
};


export type ObservationParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ObservationParentConnectionWhere>;
};

export type ObservationAggregateSelection = {
  __typename?: 'ObservationAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type ObservationConnectInput = {
  parent?: InputMaybe<ObservationParentConnectInput>;
};

export type ObservationConnectOrCreateInput = {
  parent?: InputMaybe<ObservationParentConnectOrCreateInput>;
};

export type ObservationConnectOrCreateWhere = {
  node: ObservationUniqueWhere;
};

export type ObservationConnectWhere = {
  node: ObservationWhere;
};

export type ObservationCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<ObservationParentCreateInput>;
  type: ObservationType;
};

export type ObservationDeleteInput = {
  parent?: InputMaybe<ObservationParentDeleteInput>;
};

export type ObservationDisconnectInput = {
  parent?: InputMaybe<ObservationParentDisconnectInput>;
};

export type ObservationEdge = {
  __typename?: 'ObservationEdge';
  cursor: Scalars['String']['output'];
  node: Observation;
};

export type ObservationOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  type: ObservationType;
};

export type ObservationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ObservationSort objects to sort Observations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ObservationSort>>;
};

export type ObservationParent = Plate | Propagation | Sample;

export type ObservationParentConnectInput = {
  Plate?: InputMaybe<ObservationParentPlateConnectFieldInput>;
  Propagation?: InputMaybe<ObservationParentPropagationConnectFieldInput>;
  Sample?: InputMaybe<ObservationParentSampleConnectFieldInput>;
};

export type ObservationParentConnectOrCreateInput = {
  Plate?: InputMaybe<ObservationParentPlateConnectOrCreateFieldInput>;
  Propagation?: InputMaybe<ObservationParentPropagationConnectOrCreateFieldInput>;
  Sample?: InputMaybe<ObservationParentSampleConnectOrCreateFieldInput>;
};

export type ObservationParentConnection = {
  __typename?: 'ObservationParentConnection';
  edges: Array<ObservationParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ObservationParentConnectionWhere = {
  Plate?: InputMaybe<ObservationParentPlateConnectionWhere>;
  Propagation?: InputMaybe<ObservationParentPropagationConnectionWhere>;
  Sample?: InputMaybe<ObservationParentSampleConnectionWhere>;
};

export type ObservationParentCreateFieldInput = {
  Plate?: InputMaybe<ObservationParentPlateCreateFieldInput>;
  Propagation?: InputMaybe<ObservationParentPropagationCreateFieldInput>;
  Sample?: InputMaybe<ObservationParentSampleCreateFieldInput>;
};

export type ObservationParentCreateInput = {
  Plate?: InputMaybe<ObservationParentPlateFieldInput>;
  Propagation?: InputMaybe<ObservationParentPropagationFieldInput>;
  Sample?: InputMaybe<ObservationParentSampleFieldInput>;
};

export type ObservationParentDeleteInput = {
  Plate?: InputMaybe<ObservationParentPlateDeleteFieldInput>;
  Propagation?: InputMaybe<ObservationParentPropagationDeleteFieldInput>;
  Sample?: InputMaybe<ObservationParentSampleDeleteFieldInput>;
};

export type ObservationParentDisconnectInput = {
  Plate?: InputMaybe<ObservationParentPlateDisconnectFieldInput>;
  Propagation?: InputMaybe<ObservationParentPropagationDisconnectFieldInput>;
  Sample?: InputMaybe<ObservationParentSampleDisconnectFieldInput>;
};

export type ObservationParentPlateConnectFieldInput = {
  connect?: InputMaybe<PlateConnectInput>;
  where?: InputMaybe<PlateConnectWhere>;
};

export type ObservationParentPlateConnectOrCreateFieldInput = {
  onCreate: ObservationParentPlateConnectOrCreateFieldInputOnCreate;
  where: PlateConnectOrCreateWhere;
};

export type ObservationParentPlateConnectOrCreateFieldInputOnCreate = {
  node: PlateOnCreateInput;
};

export type ObservationParentPlateConnectionWhere = {
  AND?: InputMaybe<Array<ObservationParentPlateConnectionWhere>>;
  NOT?: InputMaybe<ObservationParentPlateConnectionWhere>;
  OR?: InputMaybe<Array<ObservationParentPlateConnectionWhere>>;
  node?: InputMaybe<PlateWhere>;
};

export type ObservationParentPlateCreateFieldInput = {
  node: PlateCreateInput;
};

export type ObservationParentPlateDeleteFieldInput = {
  delete?: InputMaybe<PlateDeleteInput>;
  where?: InputMaybe<ObservationParentPlateConnectionWhere>;
};

export type ObservationParentPlateDisconnectFieldInput = {
  disconnect?: InputMaybe<PlateDisconnectInput>;
  where?: InputMaybe<ObservationParentPlateConnectionWhere>;
};

export type ObservationParentPlateFieldInput = {
  connect?: InputMaybe<ObservationParentPlateConnectFieldInput>;
  connectOrCreate?: InputMaybe<ObservationParentPlateConnectOrCreateFieldInput>;
  create?: InputMaybe<ObservationParentPlateCreateFieldInput>;
};

export type ObservationParentPlateUpdateConnectionInput = {
  node?: InputMaybe<PlateUpdateInput>;
};

export type ObservationParentPlateUpdateFieldInput = {
  connect?: InputMaybe<ObservationParentPlateConnectFieldInput>;
  connectOrCreate?: InputMaybe<ObservationParentPlateConnectOrCreateFieldInput>;
  create?: InputMaybe<ObservationParentPlateCreateFieldInput>;
  delete?: InputMaybe<ObservationParentPlateDeleteFieldInput>;
  disconnect?: InputMaybe<ObservationParentPlateDisconnectFieldInput>;
  update?: InputMaybe<ObservationParentPlateUpdateConnectionInput>;
  where?: InputMaybe<ObservationParentPlateConnectionWhere>;
};

export type ObservationParentPropagationConnectFieldInput = {
  connect?: InputMaybe<PropagationConnectInput>;
  where?: InputMaybe<PropagationConnectWhere>;
};

export type ObservationParentPropagationConnectOrCreateFieldInput = {
  onCreate: ObservationParentPropagationConnectOrCreateFieldInputOnCreate;
  where: PropagationConnectOrCreateWhere;
};

export type ObservationParentPropagationConnectOrCreateFieldInputOnCreate = {
  node: PropagationOnCreateInput;
};

export type ObservationParentPropagationConnectionWhere = {
  AND?: InputMaybe<Array<ObservationParentPropagationConnectionWhere>>;
  NOT?: InputMaybe<ObservationParentPropagationConnectionWhere>;
  OR?: InputMaybe<Array<ObservationParentPropagationConnectionWhere>>;
  node?: InputMaybe<PropagationWhere>;
};

export type ObservationParentPropagationCreateFieldInput = {
  node: PropagationCreateInput;
};

export type ObservationParentPropagationDeleteFieldInput = {
  delete?: InputMaybe<PropagationDeleteInput>;
  where?: InputMaybe<ObservationParentPropagationConnectionWhere>;
};

export type ObservationParentPropagationDisconnectFieldInput = {
  disconnect?: InputMaybe<PropagationDisconnectInput>;
  where?: InputMaybe<ObservationParentPropagationConnectionWhere>;
};

export type ObservationParentPropagationFieldInput = {
  connect?: InputMaybe<ObservationParentPropagationConnectFieldInput>;
  connectOrCreate?: InputMaybe<ObservationParentPropagationConnectOrCreateFieldInput>;
  create?: InputMaybe<ObservationParentPropagationCreateFieldInput>;
};

export type ObservationParentPropagationUpdateConnectionInput = {
  node?: InputMaybe<PropagationUpdateInput>;
};

export type ObservationParentPropagationUpdateFieldInput = {
  connect?: InputMaybe<ObservationParentPropagationConnectFieldInput>;
  connectOrCreate?: InputMaybe<ObservationParentPropagationConnectOrCreateFieldInput>;
  create?: InputMaybe<ObservationParentPropagationCreateFieldInput>;
  delete?: InputMaybe<ObservationParentPropagationDeleteFieldInput>;
  disconnect?: InputMaybe<ObservationParentPropagationDisconnectFieldInput>;
  update?: InputMaybe<ObservationParentPropagationUpdateConnectionInput>;
  where?: InputMaybe<ObservationParentPropagationConnectionWhere>;
};

export type ObservationParentRelationship = {
  __typename?: 'ObservationParentRelationship';
  cursor: Scalars['String']['output'];
  node: ObservationParent;
};

export type ObservationParentSampleConnectFieldInput = {
  connect?: InputMaybe<SampleConnectInput>;
  where?: InputMaybe<SampleConnectWhere>;
};

export type ObservationParentSampleConnectOrCreateFieldInput = {
  onCreate: ObservationParentSampleConnectOrCreateFieldInputOnCreate;
  where: SampleConnectOrCreateWhere;
};

export type ObservationParentSampleConnectOrCreateFieldInputOnCreate = {
  node: SampleOnCreateInput;
};

export type ObservationParentSampleConnectionWhere = {
  AND?: InputMaybe<Array<ObservationParentSampleConnectionWhere>>;
  NOT?: InputMaybe<ObservationParentSampleConnectionWhere>;
  OR?: InputMaybe<Array<ObservationParentSampleConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type ObservationParentSampleCreateFieldInput = {
  node: SampleCreateInput;
};

export type ObservationParentSampleDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<ObservationParentSampleConnectionWhere>;
};

export type ObservationParentSampleDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<ObservationParentSampleConnectionWhere>;
};

export type ObservationParentSampleFieldInput = {
  connect?: InputMaybe<ObservationParentSampleConnectFieldInput>;
  connectOrCreate?: InputMaybe<ObservationParentSampleConnectOrCreateFieldInput>;
  create?: InputMaybe<ObservationParentSampleCreateFieldInput>;
};

export type ObservationParentSampleUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type ObservationParentSampleUpdateFieldInput = {
  connect?: InputMaybe<ObservationParentSampleConnectFieldInput>;
  connectOrCreate?: InputMaybe<ObservationParentSampleConnectOrCreateFieldInput>;
  create?: InputMaybe<ObservationParentSampleCreateFieldInput>;
  delete?: InputMaybe<ObservationParentSampleDeleteFieldInput>;
  disconnect?: InputMaybe<ObservationParentSampleDisconnectFieldInput>;
  update?: InputMaybe<ObservationParentSampleUpdateConnectionInput>;
  where?: InputMaybe<ObservationParentSampleConnectionWhere>;
};

export type ObservationParentUpdateInput = {
  Plate?: InputMaybe<ObservationParentPlateUpdateFieldInput>;
  Propagation?: InputMaybe<ObservationParentPropagationUpdateFieldInput>;
  Sample?: InputMaybe<ObservationParentSampleUpdateFieldInput>;
};

export type ObservationParentWhere = {
  Plate?: InputMaybe<PlateWhere>;
  Propagation?: InputMaybe<PropagationWhere>;
  Sample?: InputMaybe<SampleWhere>;
};

export type ObservationRelationInput = {
  parent?: InputMaybe<ObservationParentCreateFieldInput>;
};

/** Fields to sort Observations by. The order in which sorts are applied is not guaranteed when specifying many fields in one ObservationSort object. */
export type ObservationSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export enum ObservationType {
  Plate = 'PLATE',
  Propagation = 'PROPAGATION',
  Sample = 'SAMPLE'
}

export type ObservationUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ObservationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<ObservationParentUpdateInput>;
  type?: InputMaybe<ObservationType>;
};

export type ObservationWhere = {
  AND?: InputMaybe<Array<ObservationWhere>>;
  NOT?: InputMaybe<ObservationWhere>;
  OR?: InputMaybe<Array<ObservationWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  parentConnection?: InputMaybe<ObservationParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<ObservationParentConnectionWhere>;
  type?: InputMaybe<ObservationType>;
  type_IN?: InputMaybe<Array<ObservationType>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ObservationsConnection = {
  __typename?: 'ObservationsConnection';
  edges: Array<ObservationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Plate = {
  __typename?: 'Plate';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  observations: Array<Observation>;
  observationsAggregate?: Maybe<PlateObservationObservationsAggregationSelection>;
  observationsConnection: PlateObservationsConnection;
  parent: PlateParent;
  parentConnection: PlateParentConnection;
  plates: Array<Plate>;
  platesAggregate?: Maybe<PlatePlatePlatesAggregationSelection>;
  platesConnection: PlatePlatesConnection;
  propagation: Propagation;
  propagationAggregate?: Maybe<PlatePropagationPropagationAggregationSelection>;
  propagationConnection: PlatePropagationConnection;
  recipe: Recipe;
  recipeAggregate?: Maybe<PlateRecipeRecipeAggregationSelection>;
  recipeConnection: PlateRecipeConnection;
  updatedAt: Scalars['DateTime']['output'];
};


export type PlateObservationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ObservationOptions>;
  where?: InputMaybe<ObservationWhere>;
};


export type PlateObservationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ObservationWhere>;
};


export type PlateObservationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PlateObservationsConnectionSort>>;
  where?: InputMaybe<PlateObservationsConnectionWhere>;
};


export type PlateParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<PlateParentWhere>;
};


export type PlateParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlateParentConnectionWhere>;
};


export type PlatePlatesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PlateOptions>;
  where?: InputMaybe<PlateWhere>;
};


export type PlatePlatesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PlateWhere>;
};


export type PlatePlatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PlatePlatesConnectionSort>>;
  where?: InputMaybe<PlatePlatesConnectionWhere>;
};


export type PlatePropagationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PropagationOptions>;
  where?: InputMaybe<PropagationWhere>;
};


export type PlatePropagationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PropagationWhere>;
};


export type PlatePropagationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PlatePropagationConnectionSort>>;
  where?: InputMaybe<PlatePropagationConnectionWhere>;
};


export type PlateRecipeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RecipeOptions>;
  where?: InputMaybe<RecipeWhere>;
};


export type PlateRecipeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RecipeWhere>;
};


export type PlateRecipeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PlateRecipeConnectionSort>>;
  where?: InputMaybe<PlateRecipeConnectionWhere>;
};

export type PlateAggregateSelection = {
  __typename?: 'PlateAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PlateConnectInput = {
  observations?: InputMaybe<Array<PlateObservationsConnectFieldInput>>;
  parent?: InputMaybe<PlateParentConnectInput>;
  plates?: InputMaybe<Array<PlatePlatesConnectFieldInput>>;
  propagation?: InputMaybe<PlatePropagationConnectFieldInput>;
  recipe?: InputMaybe<PlateRecipeConnectFieldInput>;
};

export type PlateConnectOrCreateInput = {
  observations?: InputMaybe<Array<PlateObservationsConnectOrCreateFieldInput>>;
  parent?: InputMaybe<PlateParentConnectOrCreateInput>;
  plates?: InputMaybe<Array<PlatePlatesConnectOrCreateFieldInput>>;
  propagation?: InputMaybe<PlatePropagationConnectOrCreateFieldInput>;
  recipe?: InputMaybe<PlateRecipeConnectOrCreateFieldInput>;
};

export type PlateConnectOrCreateWhere = {
  node: PlateUniqueWhere;
};

export type PlateConnectWhere = {
  node: PlateWhere;
};

export type PlateCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  observations?: InputMaybe<PlateObservationsFieldInput>;
  parent?: InputMaybe<PlateParentCreateInput>;
  plates?: InputMaybe<PlatePlatesFieldInput>;
  propagation?: InputMaybe<PlatePropagationFieldInput>;
  recipe?: InputMaybe<PlateRecipeFieldInput>;
};

export type PlateDeleteInput = {
  observations?: InputMaybe<Array<PlateObservationsDeleteFieldInput>>;
  parent?: InputMaybe<PlateParentDeleteInput>;
  plates?: InputMaybe<Array<PlatePlatesDeleteFieldInput>>;
  propagation?: InputMaybe<PlatePropagationDeleteFieldInput>;
  recipe?: InputMaybe<PlateRecipeDeleteFieldInput>;
};

export type PlateDisconnectInput = {
  observations?: InputMaybe<Array<PlateObservationsDisconnectFieldInput>>;
  parent?: InputMaybe<PlateParentDisconnectInput>;
  plates?: InputMaybe<Array<PlatePlatesDisconnectFieldInput>>;
  propagation?: InputMaybe<PlatePropagationDisconnectFieldInput>;
  recipe?: InputMaybe<PlateRecipeDisconnectFieldInput>;
};

export type PlateEdge = {
  __typename?: 'PlateEdge';
  cursor: Scalars['String']['output'];
  node: Plate;
};

export type PlateObservationObservationsAggregationSelection = {
  __typename?: 'PlateObservationObservationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PlateObservationObservationsNodeAggregateSelection>;
};

export type PlateObservationObservationsNodeAggregateSelection = {
  __typename?: 'PlateObservationObservationsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PlateObservationsAggregateInput = {
  AND?: InputMaybe<Array<PlateObservationsAggregateInput>>;
  NOT?: InputMaybe<PlateObservationsAggregateInput>;
  OR?: InputMaybe<Array<PlateObservationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PlateObservationsNodeAggregationWhereInput>;
};

export type PlateObservationsConnectFieldInput = {
  connect?: InputMaybe<Array<ObservationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ObservationConnectWhere>;
};

export type PlateObservationsConnectOrCreateFieldInput = {
  onCreate: PlateObservationsConnectOrCreateFieldInputOnCreate;
  where: ObservationConnectOrCreateWhere;
};

export type PlateObservationsConnectOrCreateFieldInputOnCreate = {
  node: ObservationOnCreateInput;
};

export type PlateObservationsConnection = {
  __typename?: 'PlateObservationsConnection';
  edges: Array<PlateObservationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PlateObservationsConnectionSort = {
  node?: InputMaybe<ObservationSort>;
};

export type PlateObservationsConnectionWhere = {
  AND?: InputMaybe<Array<PlateObservationsConnectionWhere>>;
  NOT?: InputMaybe<PlateObservationsConnectionWhere>;
  OR?: InputMaybe<Array<PlateObservationsConnectionWhere>>;
  node?: InputMaybe<ObservationWhere>;
};

export type PlateObservationsCreateFieldInput = {
  node: ObservationCreateInput;
};

export type PlateObservationsDeleteFieldInput = {
  delete?: InputMaybe<ObservationDeleteInput>;
  where?: InputMaybe<PlateObservationsConnectionWhere>;
};

export type PlateObservationsDisconnectFieldInput = {
  disconnect?: InputMaybe<ObservationDisconnectInput>;
  where?: InputMaybe<PlateObservationsConnectionWhere>;
};

export type PlateObservationsFieldInput = {
  connect?: InputMaybe<Array<PlateObservationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PlateObservationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PlateObservationsCreateFieldInput>>;
};

export type PlateObservationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PlateObservationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PlateObservationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PlateObservationsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlateObservationsRelationship = {
  __typename?: 'PlateObservationsRelationship';
  cursor: Scalars['String']['output'];
  node: Observation;
};

export type PlateObservationsUpdateConnectionInput = {
  node?: InputMaybe<ObservationUpdateInput>;
};

export type PlateObservationsUpdateFieldInput = {
  connect?: InputMaybe<Array<PlateObservationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PlateObservationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PlateObservationsCreateFieldInput>>;
  delete?: InputMaybe<Array<PlateObservationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PlateObservationsDisconnectFieldInput>>;
  update?: InputMaybe<PlateObservationsUpdateConnectionInput>;
  where?: InputMaybe<PlateObservationsConnectionWhere>;
};

export type PlateOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type PlateOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PlateSort objects to sort Plates by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PlateSort>>;
};

export type PlateParent = Plate | Propagation;

export type PlateParentConnectInput = {
  Plate?: InputMaybe<PlateParentPlateConnectFieldInput>;
  Propagation?: InputMaybe<PlateParentPropagationConnectFieldInput>;
};

export type PlateParentConnectOrCreateInput = {
  Plate?: InputMaybe<PlateParentPlateConnectOrCreateFieldInput>;
  Propagation?: InputMaybe<PlateParentPropagationConnectOrCreateFieldInput>;
};

export type PlateParentConnection = {
  __typename?: 'PlateParentConnection';
  edges: Array<PlateParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PlateParentConnectionWhere = {
  Plate?: InputMaybe<PlateParentPlateConnectionWhere>;
  Propagation?: InputMaybe<PlateParentPropagationConnectionWhere>;
};

export type PlateParentCreateFieldInput = {
  Plate?: InputMaybe<PlateParentPlateCreateFieldInput>;
  Propagation?: InputMaybe<PlateParentPropagationCreateFieldInput>;
};

export type PlateParentCreateInput = {
  Plate?: InputMaybe<PlateParentPlateFieldInput>;
  Propagation?: InputMaybe<PlateParentPropagationFieldInput>;
};

export type PlateParentDeleteInput = {
  Plate?: InputMaybe<PlateParentPlateDeleteFieldInput>;
  Propagation?: InputMaybe<PlateParentPropagationDeleteFieldInput>;
};

export type PlateParentDisconnectInput = {
  Plate?: InputMaybe<PlateParentPlateDisconnectFieldInput>;
  Propagation?: InputMaybe<PlateParentPropagationDisconnectFieldInput>;
};

export type PlateParentPlateConnectFieldInput = {
  connect?: InputMaybe<PlateConnectInput>;
  where?: InputMaybe<PlateConnectWhere>;
};

export type PlateParentPlateConnectOrCreateFieldInput = {
  onCreate: PlateParentPlateConnectOrCreateFieldInputOnCreate;
  where: PlateConnectOrCreateWhere;
};

export type PlateParentPlateConnectOrCreateFieldInputOnCreate = {
  node: PlateOnCreateInput;
};

export type PlateParentPlateConnectionWhere = {
  AND?: InputMaybe<Array<PlateParentPlateConnectionWhere>>;
  NOT?: InputMaybe<PlateParentPlateConnectionWhere>;
  OR?: InputMaybe<Array<PlateParentPlateConnectionWhere>>;
  node?: InputMaybe<PlateWhere>;
};

export type PlateParentPlateCreateFieldInput = {
  node: PlateCreateInput;
};

export type PlateParentPlateDeleteFieldInput = {
  delete?: InputMaybe<PlateDeleteInput>;
  where?: InputMaybe<PlateParentPlateConnectionWhere>;
};

export type PlateParentPlateDisconnectFieldInput = {
  disconnect?: InputMaybe<PlateDisconnectInput>;
  where?: InputMaybe<PlateParentPlateConnectionWhere>;
};

export type PlateParentPlateFieldInput = {
  connect?: InputMaybe<PlateParentPlateConnectFieldInput>;
  connectOrCreate?: InputMaybe<PlateParentPlateConnectOrCreateFieldInput>;
  create?: InputMaybe<PlateParentPlateCreateFieldInput>;
};

export type PlateParentPlateUpdateConnectionInput = {
  node?: InputMaybe<PlateUpdateInput>;
};

export type PlateParentPlateUpdateFieldInput = {
  connect?: InputMaybe<PlateParentPlateConnectFieldInput>;
  connectOrCreate?: InputMaybe<PlateParentPlateConnectOrCreateFieldInput>;
  create?: InputMaybe<PlateParentPlateCreateFieldInput>;
  delete?: InputMaybe<PlateParentPlateDeleteFieldInput>;
  disconnect?: InputMaybe<PlateParentPlateDisconnectFieldInput>;
  update?: InputMaybe<PlateParentPlateUpdateConnectionInput>;
  where?: InputMaybe<PlateParentPlateConnectionWhere>;
};

export type PlateParentPropagationConnectFieldInput = {
  connect?: InputMaybe<PropagationConnectInput>;
  where?: InputMaybe<PropagationConnectWhere>;
};

export type PlateParentPropagationConnectOrCreateFieldInput = {
  onCreate: PlateParentPropagationConnectOrCreateFieldInputOnCreate;
  where: PropagationConnectOrCreateWhere;
};

export type PlateParentPropagationConnectOrCreateFieldInputOnCreate = {
  node: PropagationOnCreateInput;
};

export type PlateParentPropagationConnectionWhere = {
  AND?: InputMaybe<Array<PlateParentPropagationConnectionWhere>>;
  NOT?: InputMaybe<PlateParentPropagationConnectionWhere>;
  OR?: InputMaybe<Array<PlateParentPropagationConnectionWhere>>;
  node?: InputMaybe<PropagationWhere>;
};

export type PlateParentPropagationCreateFieldInput = {
  node: PropagationCreateInput;
};

export type PlateParentPropagationDeleteFieldInput = {
  delete?: InputMaybe<PropagationDeleteInput>;
  where?: InputMaybe<PlateParentPropagationConnectionWhere>;
};

export type PlateParentPropagationDisconnectFieldInput = {
  disconnect?: InputMaybe<PropagationDisconnectInput>;
  where?: InputMaybe<PlateParentPropagationConnectionWhere>;
};

export type PlateParentPropagationFieldInput = {
  connect?: InputMaybe<PlateParentPropagationConnectFieldInput>;
  connectOrCreate?: InputMaybe<PlateParentPropagationConnectOrCreateFieldInput>;
  create?: InputMaybe<PlateParentPropagationCreateFieldInput>;
};

export type PlateParentPropagationUpdateConnectionInput = {
  node?: InputMaybe<PropagationUpdateInput>;
};

export type PlateParentPropagationUpdateFieldInput = {
  connect?: InputMaybe<PlateParentPropagationConnectFieldInput>;
  connectOrCreate?: InputMaybe<PlateParentPropagationConnectOrCreateFieldInput>;
  create?: InputMaybe<PlateParentPropagationCreateFieldInput>;
  delete?: InputMaybe<PlateParentPropagationDeleteFieldInput>;
  disconnect?: InputMaybe<PlateParentPropagationDisconnectFieldInput>;
  update?: InputMaybe<PlateParentPropagationUpdateConnectionInput>;
  where?: InputMaybe<PlateParentPropagationConnectionWhere>;
};

export type PlateParentRelationship = {
  __typename?: 'PlateParentRelationship';
  cursor: Scalars['String']['output'];
  node: PlateParent;
};

export type PlateParentUpdateInput = {
  Plate?: InputMaybe<PlateParentPlateUpdateFieldInput>;
  Propagation?: InputMaybe<PlateParentPropagationUpdateFieldInput>;
};

export type PlateParentWhere = {
  Plate?: InputMaybe<PlateWhere>;
  Propagation?: InputMaybe<PropagationWhere>;
};

export type PlatePlatePlatesAggregationSelection = {
  __typename?: 'PlatePlatePlatesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PlatePlatePlatesNodeAggregateSelection>;
};

export type PlatePlatePlatesNodeAggregateSelection = {
  __typename?: 'PlatePlatePlatesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PlatePlatesAggregateInput = {
  AND?: InputMaybe<Array<PlatePlatesAggregateInput>>;
  NOT?: InputMaybe<PlatePlatesAggregateInput>;
  OR?: InputMaybe<Array<PlatePlatesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PlatePlatesNodeAggregationWhereInput>;
};

export type PlatePlatesConnectFieldInput = {
  connect?: InputMaybe<Array<PlateConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PlateConnectWhere>;
};

export type PlatePlatesConnectOrCreateFieldInput = {
  onCreate: PlatePlatesConnectOrCreateFieldInputOnCreate;
  where: PlateConnectOrCreateWhere;
};

export type PlatePlatesConnectOrCreateFieldInputOnCreate = {
  node: PlateOnCreateInput;
};

export type PlatePlatesConnection = {
  __typename?: 'PlatePlatesConnection';
  edges: Array<PlatePlatesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PlatePlatesConnectionSort = {
  node?: InputMaybe<PlateSort>;
};

export type PlatePlatesConnectionWhere = {
  AND?: InputMaybe<Array<PlatePlatesConnectionWhere>>;
  NOT?: InputMaybe<PlatePlatesConnectionWhere>;
  OR?: InputMaybe<Array<PlatePlatesConnectionWhere>>;
  node?: InputMaybe<PlateWhere>;
};

export type PlatePlatesCreateFieldInput = {
  node: PlateCreateInput;
};

export type PlatePlatesDeleteFieldInput = {
  delete?: InputMaybe<PlateDeleteInput>;
  where?: InputMaybe<PlatePlatesConnectionWhere>;
};

export type PlatePlatesDisconnectFieldInput = {
  disconnect?: InputMaybe<PlateDisconnectInput>;
  where?: InputMaybe<PlatePlatesConnectionWhere>;
};

export type PlatePlatesFieldInput = {
  connect?: InputMaybe<Array<PlatePlatesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PlatePlatesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PlatePlatesCreateFieldInput>>;
};

export type PlatePlatesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PlatePlatesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PlatePlatesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PlatePlatesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlatePlatesRelationship = {
  __typename?: 'PlatePlatesRelationship';
  cursor: Scalars['String']['output'];
  node: Plate;
};

export type PlatePlatesUpdateConnectionInput = {
  node?: InputMaybe<PlateUpdateInput>;
};

export type PlatePlatesUpdateFieldInput = {
  connect?: InputMaybe<Array<PlatePlatesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PlatePlatesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PlatePlatesCreateFieldInput>>;
  delete?: InputMaybe<Array<PlatePlatesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PlatePlatesDisconnectFieldInput>>;
  update?: InputMaybe<PlatePlatesUpdateConnectionInput>;
  where?: InputMaybe<PlatePlatesConnectionWhere>;
};

export type PlatePropagationAggregateInput = {
  AND?: InputMaybe<Array<PlatePropagationAggregateInput>>;
  NOT?: InputMaybe<PlatePropagationAggregateInput>;
  OR?: InputMaybe<Array<PlatePropagationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PlatePropagationNodeAggregationWhereInput>;
};

export type PlatePropagationConnectFieldInput = {
  connect?: InputMaybe<PropagationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PropagationConnectWhere>;
};

export type PlatePropagationConnectOrCreateFieldInput = {
  onCreate: PlatePropagationConnectOrCreateFieldInputOnCreate;
  where: PropagationConnectOrCreateWhere;
};

export type PlatePropagationConnectOrCreateFieldInputOnCreate = {
  node: PropagationOnCreateInput;
};

export type PlatePropagationConnection = {
  __typename?: 'PlatePropagationConnection';
  edges: Array<PlatePropagationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PlatePropagationConnectionSort = {
  node?: InputMaybe<PropagationSort>;
};

export type PlatePropagationConnectionWhere = {
  AND?: InputMaybe<Array<PlatePropagationConnectionWhere>>;
  NOT?: InputMaybe<PlatePropagationConnectionWhere>;
  OR?: InputMaybe<Array<PlatePropagationConnectionWhere>>;
  node?: InputMaybe<PropagationWhere>;
};

export type PlatePropagationCreateFieldInput = {
  node: PropagationCreateInput;
};

export type PlatePropagationDeleteFieldInput = {
  delete?: InputMaybe<PropagationDeleteInput>;
  where?: InputMaybe<PlatePropagationConnectionWhere>;
};

export type PlatePropagationDisconnectFieldInput = {
  disconnect?: InputMaybe<PropagationDisconnectInput>;
  where?: InputMaybe<PlatePropagationConnectionWhere>;
};

export type PlatePropagationFieldInput = {
  connect?: InputMaybe<PlatePropagationConnectFieldInput>;
  connectOrCreate?: InputMaybe<PlatePropagationConnectOrCreateFieldInput>;
  create?: InputMaybe<PlatePropagationCreateFieldInput>;
};

export type PlatePropagationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PlatePropagationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PlatePropagationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PlatePropagationNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlatePropagationPropagationAggregationSelection = {
  __typename?: 'PlatePropagationPropagationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PlatePropagationPropagationNodeAggregateSelection>;
};

export type PlatePropagationPropagationNodeAggregateSelection = {
  __typename?: 'PlatePropagationPropagationNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PlatePropagationRelationship = {
  __typename?: 'PlatePropagationRelationship';
  cursor: Scalars['String']['output'];
  node: Propagation;
};

export type PlatePropagationUpdateConnectionInput = {
  node?: InputMaybe<PropagationUpdateInput>;
};

export type PlatePropagationUpdateFieldInput = {
  connect?: InputMaybe<PlatePropagationConnectFieldInput>;
  connectOrCreate?: InputMaybe<PlatePropagationConnectOrCreateFieldInput>;
  create?: InputMaybe<PlatePropagationCreateFieldInput>;
  delete?: InputMaybe<PlatePropagationDeleteFieldInput>;
  disconnect?: InputMaybe<PlatePropagationDisconnectFieldInput>;
  update?: InputMaybe<PlatePropagationUpdateConnectionInput>;
  where?: InputMaybe<PlatePropagationConnectionWhere>;
};

export type PlateRecipeAggregateInput = {
  AND?: InputMaybe<Array<PlateRecipeAggregateInput>>;
  NOT?: InputMaybe<PlateRecipeAggregateInput>;
  OR?: InputMaybe<Array<PlateRecipeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PlateRecipeNodeAggregationWhereInput>;
};

export type PlateRecipeConnectFieldInput = {
  connect?: InputMaybe<RecipeConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RecipeConnectWhere>;
};

export type PlateRecipeConnectOrCreateFieldInput = {
  onCreate: PlateRecipeConnectOrCreateFieldInputOnCreate;
  where: RecipeConnectOrCreateWhere;
};

export type PlateRecipeConnectOrCreateFieldInputOnCreate = {
  node: RecipeOnCreateInput;
};

export type PlateRecipeConnection = {
  __typename?: 'PlateRecipeConnection';
  edges: Array<PlateRecipeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PlateRecipeConnectionSort = {
  node?: InputMaybe<RecipeSort>;
};

export type PlateRecipeConnectionWhere = {
  AND?: InputMaybe<Array<PlateRecipeConnectionWhere>>;
  NOT?: InputMaybe<PlateRecipeConnectionWhere>;
  OR?: InputMaybe<Array<PlateRecipeConnectionWhere>>;
  node?: InputMaybe<RecipeWhere>;
};

export type PlateRecipeCreateFieldInput = {
  node: RecipeCreateInput;
};

export type PlateRecipeDeleteFieldInput = {
  delete?: InputMaybe<RecipeDeleteInput>;
  where?: InputMaybe<PlateRecipeConnectionWhere>;
};

export type PlateRecipeDisconnectFieldInput = {
  disconnect?: InputMaybe<RecipeDisconnectInput>;
  where?: InputMaybe<PlateRecipeConnectionWhere>;
};

export type PlateRecipeFieldInput = {
  connect?: InputMaybe<PlateRecipeConnectFieldInput>;
  connectOrCreate?: InputMaybe<PlateRecipeConnectOrCreateFieldInput>;
  create?: InputMaybe<PlateRecipeCreateFieldInput>;
};

export type PlateRecipeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PlateRecipeNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PlateRecipeNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PlateRecipeNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlateRecipeRecipeAggregationSelection = {
  __typename?: 'PlateRecipeRecipeAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PlateRecipeRecipeNodeAggregateSelection>;
};

export type PlateRecipeRecipeNodeAggregateSelection = {
  __typename?: 'PlateRecipeRecipeNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PlateRecipeRelationship = {
  __typename?: 'PlateRecipeRelationship';
  cursor: Scalars['String']['output'];
  node: Recipe;
};

export type PlateRecipeUpdateConnectionInput = {
  node?: InputMaybe<RecipeUpdateInput>;
};

export type PlateRecipeUpdateFieldInput = {
  connect?: InputMaybe<PlateRecipeConnectFieldInput>;
  connectOrCreate?: InputMaybe<PlateRecipeConnectOrCreateFieldInput>;
  create?: InputMaybe<PlateRecipeCreateFieldInput>;
  delete?: InputMaybe<PlateRecipeDeleteFieldInput>;
  disconnect?: InputMaybe<PlateRecipeDisconnectFieldInput>;
  update?: InputMaybe<PlateRecipeUpdateConnectionInput>;
  where?: InputMaybe<PlateRecipeConnectionWhere>;
};

export type PlateRelationInput = {
  observations?: InputMaybe<Array<PlateObservationsCreateFieldInput>>;
  parent?: InputMaybe<PlateParentCreateFieldInput>;
  plates?: InputMaybe<Array<PlatePlatesCreateFieldInput>>;
  propagation?: InputMaybe<PlatePropagationCreateFieldInput>;
  recipe?: InputMaybe<PlateRecipeCreateFieldInput>;
};

/** Fields to sort Plates by. The order in which sorts are applied is not guaranteed when specifying many fields in one PlateSort object. */
export type PlateSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type PlateUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PlateUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  observations?: InputMaybe<Array<PlateObservationsUpdateFieldInput>>;
  parent?: InputMaybe<PlateParentUpdateInput>;
  plates?: InputMaybe<Array<PlatePlatesUpdateFieldInput>>;
  propagation?: InputMaybe<PlatePropagationUpdateFieldInput>;
  recipe?: InputMaybe<PlateRecipeUpdateFieldInput>;
};

export type PlateWhere = {
  AND?: InputMaybe<Array<PlateWhere>>;
  NOT?: InputMaybe<PlateWhere>;
  OR?: InputMaybe<Array<PlateWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  observationsAggregate?: InputMaybe<PlateObservationsAggregateInput>;
  /** Return Plates where all of the related PlateObservationsConnections match this filter */
  observationsConnection_ALL?: InputMaybe<PlateObservationsConnectionWhere>;
  /** Return Plates where none of the related PlateObservationsConnections match this filter */
  observationsConnection_NONE?: InputMaybe<PlateObservationsConnectionWhere>;
  /** Return Plates where one of the related PlateObservationsConnections match this filter */
  observationsConnection_SINGLE?: InputMaybe<PlateObservationsConnectionWhere>;
  /** Return Plates where some of the related PlateObservationsConnections match this filter */
  observationsConnection_SOME?: InputMaybe<PlateObservationsConnectionWhere>;
  /** Return Plates where all of the related Observations match this filter */
  observations_ALL?: InputMaybe<ObservationWhere>;
  /** Return Plates where none of the related Observations match this filter */
  observations_NONE?: InputMaybe<ObservationWhere>;
  /** Return Plates where one of the related Observations match this filter */
  observations_SINGLE?: InputMaybe<ObservationWhere>;
  /** Return Plates where some of the related Observations match this filter */
  observations_SOME?: InputMaybe<ObservationWhere>;
  parentConnection?: InputMaybe<PlateParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<PlateParentConnectionWhere>;
  platesAggregate?: InputMaybe<PlatePlatesAggregateInput>;
  /** Return Plates where all of the related PlatePlatesConnections match this filter */
  platesConnection_ALL?: InputMaybe<PlatePlatesConnectionWhere>;
  /** Return Plates where none of the related PlatePlatesConnections match this filter */
  platesConnection_NONE?: InputMaybe<PlatePlatesConnectionWhere>;
  /** Return Plates where one of the related PlatePlatesConnections match this filter */
  platesConnection_SINGLE?: InputMaybe<PlatePlatesConnectionWhere>;
  /** Return Plates where some of the related PlatePlatesConnections match this filter */
  platesConnection_SOME?: InputMaybe<PlatePlatesConnectionWhere>;
  /** Return Plates where all of the related Plates match this filter */
  plates_ALL?: InputMaybe<PlateWhere>;
  /** Return Plates where none of the related Plates match this filter */
  plates_NONE?: InputMaybe<PlateWhere>;
  /** Return Plates where one of the related Plates match this filter */
  plates_SINGLE?: InputMaybe<PlateWhere>;
  /** Return Plates where some of the related Plates match this filter */
  plates_SOME?: InputMaybe<PlateWhere>;
  propagation?: InputMaybe<PropagationWhere>;
  propagationAggregate?: InputMaybe<PlatePropagationAggregateInput>;
  propagationConnection?: InputMaybe<PlatePropagationConnectionWhere>;
  propagationConnection_NOT?: InputMaybe<PlatePropagationConnectionWhere>;
  propagation_NOT?: InputMaybe<PropagationWhere>;
  recipe?: InputMaybe<RecipeWhere>;
  recipeAggregate?: InputMaybe<PlateRecipeAggregateInput>;
  recipeConnection?: InputMaybe<PlateRecipeConnectionWhere>;
  recipeConnection_NOT?: InputMaybe<PlateRecipeConnectionWhere>;
  recipe_NOT?: InputMaybe<RecipeWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlatesConnection = {
  __typename?: 'PlatesConnection';
  edges: Array<PlateEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Propagation = {
  __typename?: 'Propagation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  observations: Array<Observation>;
  observationsAggregate?: Maybe<PropagationObservationObservationsAggregationSelection>;
  observationsConnection: PropagationObservationsConnection;
  plates: Array<Plate>;
  platesAggregate?: Maybe<PropagationPlatePlatesAggregationSelection>;
  platesConnection: PropagationPlatesConnection;
  recipe: Recipe;
  recipeAggregate?: Maybe<PropagationRecipeRecipeAggregationSelection>;
  recipeConnection: PropagationRecipeConnection;
  sample: Sample;
  sampleAggregate?: Maybe<PropagationSampleSampleAggregationSelection>;
  sampleConnection: PropagationSampleConnection;
  updatedAt: Scalars['DateTime']['output'];
};


export type PropagationObservationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ObservationOptions>;
  where?: InputMaybe<ObservationWhere>;
};


export type PropagationObservationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ObservationWhere>;
};


export type PropagationObservationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PropagationObservationsConnectionSort>>;
  where?: InputMaybe<PropagationObservationsConnectionWhere>;
};


export type PropagationPlatesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PlateOptions>;
  where?: InputMaybe<PlateWhere>;
};


export type PropagationPlatesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PlateWhere>;
};


export type PropagationPlatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PropagationPlatesConnectionSort>>;
  where?: InputMaybe<PropagationPlatesConnectionWhere>;
};


export type PropagationRecipeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RecipeOptions>;
  where?: InputMaybe<RecipeWhere>;
};


export type PropagationRecipeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RecipeWhere>;
};


export type PropagationRecipeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PropagationRecipeConnectionSort>>;
  where?: InputMaybe<PropagationRecipeConnectionWhere>;
};


export type PropagationSampleArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};


export type PropagationSampleAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SampleWhere>;
};


export type PropagationSampleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PropagationSampleConnectionSort>>;
  where?: InputMaybe<PropagationSampleConnectionWhere>;
};

export type PropagationAggregateSelection = {
  __typename?: 'PropagationAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PropagationConnectInput = {
  observations?: InputMaybe<Array<PropagationObservationsConnectFieldInput>>;
  plates?: InputMaybe<Array<PropagationPlatesConnectFieldInput>>;
  recipe?: InputMaybe<PropagationRecipeConnectFieldInput>;
  sample?: InputMaybe<PropagationSampleConnectFieldInput>;
};

export type PropagationConnectOrCreateInput = {
  observations?: InputMaybe<Array<PropagationObservationsConnectOrCreateFieldInput>>;
  plates?: InputMaybe<Array<PropagationPlatesConnectOrCreateFieldInput>>;
  recipe?: InputMaybe<PropagationRecipeConnectOrCreateFieldInput>;
  sample?: InputMaybe<PropagationSampleConnectOrCreateFieldInput>;
};

export type PropagationConnectOrCreateWhere = {
  node: PropagationUniqueWhere;
};

export type PropagationConnectWhere = {
  node: PropagationWhere;
};

export type PropagationCreateInput = {
  observations?: InputMaybe<PropagationObservationsFieldInput>;
  plates?: InputMaybe<PropagationPlatesFieldInput>;
  recipe?: InputMaybe<PropagationRecipeFieldInput>;
  sample?: InputMaybe<PropagationSampleFieldInput>;
};

export type PropagationDeleteInput = {
  observations?: InputMaybe<Array<PropagationObservationsDeleteFieldInput>>;
  plates?: InputMaybe<Array<PropagationPlatesDeleteFieldInput>>;
  recipe?: InputMaybe<PropagationRecipeDeleteFieldInput>;
  sample?: InputMaybe<PropagationSampleDeleteFieldInput>;
};

export type PropagationDisconnectInput = {
  observations?: InputMaybe<Array<PropagationObservationsDisconnectFieldInput>>;
  plates?: InputMaybe<Array<PropagationPlatesDisconnectFieldInput>>;
  recipe?: InputMaybe<PropagationRecipeDisconnectFieldInput>;
  sample?: InputMaybe<PropagationSampleDisconnectFieldInput>;
};

export type PropagationEdge = {
  __typename?: 'PropagationEdge';
  cursor: Scalars['String']['output'];
  node: Propagation;
};

export type PropagationObservationObservationsAggregationSelection = {
  __typename?: 'PropagationObservationObservationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PropagationObservationObservationsNodeAggregateSelection>;
};

export type PropagationObservationObservationsNodeAggregateSelection = {
  __typename?: 'PropagationObservationObservationsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PropagationObservationsAggregateInput = {
  AND?: InputMaybe<Array<PropagationObservationsAggregateInput>>;
  NOT?: InputMaybe<PropagationObservationsAggregateInput>;
  OR?: InputMaybe<Array<PropagationObservationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PropagationObservationsNodeAggregationWhereInput>;
};

export type PropagationObservationsConnectFieldInput = {
  connect?: InputMaybe<Array<ObservationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ObservationConnectWhere>;
};

export type PropagationObservationsConnectOrCreateFieldInput = {
  onCreate: PropagationObservationsConnectOrCreateFieldInputOnCreate;
  where: ObservationConnectOrCreateWhere;
};

export type PropagationObservationsConnectOrCreateFieldInputOnCreate = {
  node: ObservationOnCreateInput;
};

export type PropagationObservationsConnection = {
  __typename?: 'PropagationObservationsConnection';
  edges: Array<PropagationObservationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PropagationObservationsConnectionSort = {
  node?: InputMaybe<ObservationSort>;
};

export type PropagationObservationsConnectionWhere = {
  AND?: InputMaybe<Array<PropagationObservationsConnectionWhere>>;
  NOT?: InputMaybe<PropagationObservationsConnectionWhere>;
  OR?: InputMaybe<Array<PropagationObservationsConnectionWhere>>;
  node?: InputMaybe<ObservationWhere>;
};

export type PropagationObservationsCreateFieldInput = {
  node: ObservationCreateInput;
};

export type PropagationObservationsDeleteFieldInput = {
  delete?: InputMaybe<ObservationDeleteInput>;
  where?: InputMaybe<PropagationObservationsConnectionWhere>;
};

export type PropagationObservationsDisconnectFieldInput = {
  disconnect?: InputMaybe<ObservationDisconnectInput>;
  where?: InputMaybe<PropagationObservationsConnectionWhere>;
};

export type PropagationObservationsFieldInput = {
  connect?: InputMaybe<Array<PropagationObservationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PropagationObservationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PropagationObservationsCreateFieldInput>>;
};

export type PropagationObservationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PropagationObservationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PropagationObservationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PropagationObservationsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropagationObservationsRelationship = {
  __typename?: 'PropagationObservationsRelationship';
  cursor: Scalars['String']['output'];
  node: Observation;
};

export type PropagationObservationsUpdateConnectionInput = {
  node?: InputMaybe<ObservationUpdateInput>;
};

export type PropagationObservationsUpdateFieldInput = {
  connect?: InputMaybe<Array<PropagationObservationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PropagationObservationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PropagationObservationsCreateFieldInput>>;
  delete?: InputMaybe<Array<PropagationObservationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PropagationObservationsDisconnectFieldInput>>;
  update?: InputMaybe<PropagationObservationsUpdateConnectionInput>;
  where?: InputMaybe<PropagationObservationsConnectionWhere>;
};

export type PropagationOnCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PropagationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PropagationSort objects to sort Propagations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PropagationSort>>;
};

export type PropagationPlatePlatesAggregationSelection = {
  __typename?: 'PropagationPlatePlatesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PropagationPlatePlatesNodeAggregateSelection>;
};

export type PropagationPlatePlatesNodeAggregateSelection = {
  __typename?: 'PropagationPlatePlatesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PropagationPlatesAggregateInput = {
  AND?: InputMaybe<Array<PropagationPlatesAggregateInput>>;
  NOT?: InputMaybe<PropagationPlatesAggregateInput>;
  OR?: InputMaybe<Array<PropagationPlatesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PropagationPlatesNodeAggregationWhereInput>;
};

export type PropagationPlatesConnectFieldInput = {
  connect?: InputMaybe<Array<PlateConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PlateConnectWhere>;
};

export type PropagationPlatesConnectOrCreateFieldInput = {
  onCreate: PropagationPlatesConnectOrCreateFieldInputOnCreate;
  where: PlateConnectOrCreateWhere;
};

export type PropagationPlatesConnectOrCreateFieldInputOnCreate = {
  node: PlateOnCreateInput;
};

export type PropagationPlatesConnection = {
  __typename?: 'PropagationPlatesConnection';
  edges: Array<PropagationPlatesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PropagationPlatesConnectionSort = {
  node?: InputMaybe<PlateSort>;
};

export type PropagationPlatesConnectionWhere = {
  AND?: InputMaybe<Array<PropagationPlatesConnectionWhere>>;
  NOT?: InputMaybe<PropagationPlatesConnectionWhere>;
  OR?: InputMaybe<Array<PropagationPlatesConnectionWhere>>;
  node?: InputMaybe<PlateWhere>;
};

export type PropagationPlatesCreateFieldInput = {
  node: PlateCreateInput;
};

export type PropagationPlatesDeleteFieldInput = {
  delete?: InputMaybe<PlateDeleteInput>;
  where?: InputMaybe<PropagationPlatesConnectionWhere>;
};

export type PropagationPlatesDisconnectFieldInput = {
  disconnect?: InputMaybe<PlateDisconnectInput>;
  where?: InputMaybe<PropagationPlatesConnectionWhere>;
};

export type PropagationPlatesFieldInput = {
  connect?: InputMaybe<Array<PropagationPlatesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PropagationPlatesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PropagationPlatesCreateFieldInput>>;
};

export type PropagationPlatesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PropagationPlatesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PropagationPlatesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PropagationPlatesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropagationPlatesRelationship = {
  __typename?: 'PropagationPlatesRelationship';
  cursor: Scalars['String']['output'];
  node: Plate;
};

export type PropagationPlatesUpdateConnectionInput = {
  node?: InputMaybe<PlateUpdateInput>;
};

export type PropagationPlatesUpdateFieldInput = {
  connect?: InputMaybe<Array<PropagationPlatesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PropagationPlatesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PropagationPlatesCreateFieldInput>>;
  delete?: InputMaybe<Array<PropagationPlatesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PropagationPlatesDisconnectFieldInput>>;
  update?: InputMaybe<PropagationPlatesUpdateConnectionInput>;
  where?: InputMaybe<PropagationPlatesConnectionWhere>;
};

export type PropagationRecipeAggregateInput = {
  AND?: InputMaybe<Array<PropagationRecipeAggregateInput>>;
  NOT?: InputMaybe<PropagationRecipeAggregateInput>;
  OR?: InputMaybe<Array<PropagationRecipeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PropagationRecipeNodeAggregationWhereInput>;
};

export type PropagationRecipeConnectFieldInput = {
  connect?: InputMaybe<RecipeConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RecipeConnectWhere>;
};

export type PropagationRecipeConnectOrCreateFieldInput = {
  onCreate: PropagationRecipeConnectOrCreateFieldInputOnCreate;
  where: RecipeConnectOrCreateWhere;
};

export type PropagationRecipeConnectOrCreateFieldInputOnCreate = {
  node: RecipeOnCreateInput;
};

export type PropagationRecipeConnection = {
  __typename?: 'PropagationRecipeConnection';
  edges: Array<PropagationRecipeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PropagationRecipeConnectionSort = {
  node?: InputMaybe<RecipeSort>;
};

export type PropagationRecipeConnectionWhere = {
  AND?: InputMaybe<Array<PropagationRecipeConnectionWhere>>;
  NOT?: InputMaybe<PropagationRecipeConnectionWhere>;
  OR?: InputMaybe<Array<PropagationRecipeConnectionWhere>>;
  node?: InputMaybe<RecipeWhere>;
};

export type PropagationRecipeCreateFieldInput = {
  node: RecipeCreateInput;
};

export type PropagationRecipeDeleteFieldInput = {
  delete?: InputMaybe<RecipeDeleteInput>;
  where?: InputMaybe<PropagationRecipeConnectionWhere>;
};

export type PropagationRecipeDisconnectFieldInput = {
  disconnect?: InputMaybe<RecipeDisconnectInput>;
  where?: InputMaybe<PropagationRecipeConnectionWhere>;
};

export type PropagationRecipeFieldInput = {
  connect?: InputMaybe<PropagationRecipeConnectFieldInput>;
  connectOrCreate?: InputMaybe<PropagationRecipeConnectOrCreateFieldInput>;
  create?: InputMaybe<PropagationRecipeCreateFieldInput>;
};

export type PropagationRecipeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PropagationRecipeNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PropagationRecipeNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PropagationRecipeNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropagationRecipeRecipeAggregationSelection = {
  __typename?: 'PropagationRecipeRecipeAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PropagationRecipeRecipeNodeAggregateSelection>;
};

export type PropagationRecipeRecipeNodeAggregateSelection = {
  __typename?: 'PropagationRecipeRecipeNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PropagationRecipeRelationship = {
  __typename?: 'PropagationRecipeRelationship';
  cursor: Scalars['String']['output'];
  node: Recipe;
};

export type PropagationRecipeUpdateConnectionInput = {
  node?: InputMaybe<RecipeUpdateInput>;
};

export type PropagationRecipeUpdateFieldInput = {
  connect?: InputMaybe<PropagationRecipeConnectFieldInput>;
  connectOrCreate?: InputMaybe<PropagationRecipeConnectOrCreateFieldInput>;
  create?: InputMaybe<PropagationRecipeCreateFieldInput>;
  delete?: InputMaybe<PropagationRecipeDeleteFieldInput>;
  disconnect?: InputMaybe<PropagationRecipeDisconnectFieldInput>;
  update?: InputMaybe<PropagationRecipeUpdateConnectionInput>;
  where?: InputMaybe<PropagationRecipeConnectionWhere>;
};

export type PropagationRelationInput = {
  observations?: InputMaybe<Array<PropagationObservationsCreateFieldInput>>;
  plates?: InputMaybe<Array<PropagationPlatesCreateFieldInput>>;
  recipe?: InputMaybe<PropagationRecipeCreateFieldInput>;
  sample?: InputMaybe<PropagationSampleCreateFieldInput>;
};

export type PropagationSampleAggregateInput = {
  AND?: InputMaybe<Array<PropagationSampleAggregateInput>>;
  NOT?: InputMaybe<PropagationSampleAggregateInput>;
  OR?: InputMaybe<Array<PropagationSampleAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PropagationSampleNodeAggregationWhereInput>;
};

export type PropagationSampleConnectFieldInput = {
  connect?: InputMaybe<SampleConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SampleConnectWhere>;
};

export type PropagationSampleConnectOrCreateFieldInput = {
  onCreate: PropagationSampleConnectOrCreateFieldInputOnCreate;
  where: SampleConnectOrCreateWhere;
};

export type PropagationSampleConnectOrCreateFieldInputOnCreate = {
  node: SampleOnCreateInput;
};

export type PropagationSampleConnection = {
  __typename?: 'PropagationSampleConnection';
  edges: Array<PropagationSampleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PropagationSampleConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type PropagationSampleConnectionWhere = {
  AND?: InputMaybe<Array<PropagationSampleConnectionWhere>>;
  NOT?: InputMaybe<PropagationSampleConnectionWhere>;
  OR?: InputMaybe<Array<PropagationSampleConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type PropagationSampleCreateFieldInput = {
  node: SampleCreateInput;
};

export type PropagationSampleDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<PropagationSampleConnectionWhere>;
};

export type PropagationSampleDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<PropagationSampleConnectionWhere>;
};

export type PropagationSampleFieldInput = {
  connect?: InputMaybe<PropagationSampleConnectFieldInput>;
  connectOrCreate?: InputMaybe<PropagationSampleConnectOrCreateFieldInput>;
  create?: InputMaybe<PropagationSampleCreateFieldInput>;
};

export type PropagationSampleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PropagationSampleNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PropagationSampleNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PropagationSampleNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  latitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropagationSampleRelationship = {
  __typename?: 'PropagationSampleRelationship';
  cursor: Scalars['String']['output'];
  node: Sample;
};

export type PropagationSampleSampleAggregationSelection = {
  __typename?: 'PropagationSampleSampleAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PropagationSampleSampleNodeAggregateSelection>;
};

export type PropagationSampleSampleNodeAggregateSelection = {
  __typename?: 'PropagationSampleSampleNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  latitude: FloatAggregateSelectionNonNullable;
  longitude: FloatAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type PropagationSampleUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type PropagationSampleUpdateFieldInput = {
  connect?: InputMaybe<PropagationSampleConnectFieldInput>;
  connectOrCreate?: InputMaybe<PropagationSampleConnectOrCreateFieldInput>;
  create?: InputMaybe<PropagationSampleCreateFieldInput>;
  delete?: InputMaybe<PropagationSampleDeleteFieldInput>;
  disconnect?: InputMaybe<PropagationSampleDisconnectFieldInput>;
  update?: InputMaybe<PropagationSampleUpdateConnectionInput>;
  where?: InputMaybe<PropagationSampleConnectionWhere>;
};

/** Fields to sort Propagations by. The order in which sorts are applied is not guaranteed when specifying many fields in one PropagationSort object. */
export type PropagationSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type PropagationUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PropagationUpdateInput = {
  observations?: InputMaybe<Array<PropagationObservationsUpdateFieldInput>>;
  plates?: InputMaybe<Array<PropagationPlatesUpdateFieldInput>>;
  recipe?: InputMaybe<PropagationRecipeUpdateFieldInput>;
  sample?: InputMaybe<PropagationSampleUpdateFieldInput>;
};

export type PropagationWhere = {
  AND?: InputMaybe<Array<PropagationWhere>>;
  NOT?: InputMaybe<PropagationWhere>;
  OR?: InputMaybe<Array<PropagationWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  observationsAggregate?: InputMaybe<PropagationObservationsAggregateInput>;
  /** Return Propagations where all of the related PropagationObservationsConnections match this filter */
  observationsConnection_ALL?: InputMaybe<PropagationObservationsConnectionWhere>;
  /** Return Propagations where none of the related PropagationObservationsConnections match this filter */
  observationsConnection_NONE?: InputMaybe<PropagationObservationsConnectionWhere>;
  /** Return Propagations where one of the related PropagationObservationsConnections match this filter */
  observationsConnection_SINGLE?: InputMaybe<PropagationObservationsConnectionWhere>;
  /** Return Propagations where some of the related PropagationObservationsConnections match this filter */
  observationsConnection_SOME?: InputMaybe<PropagationObservationsConnectionWhere>;
  /** Return Propagations where all of the related Observations match this filter */
  observations_ALL?: InputMaybe<ObservationWhere>;
  /** Return Propagations where none of the related Observations match this filter */
  observations_NONE?: InputMaybe<ObservationWhere>;
  /** Return Propagations where one of the related Observations match this filter */
  observations_SINGLE?: InputMaybe<ObservationWhere>;
  /** Return Propagations where some of the related Observations match this filter */
  observations_SOME?: InputMaybe<ObservationWhere>;
  platesAggregate?: InputMaybe<PropagationPlatesAggregateInput>;
  /** Return Propagations where all of the related PropagationPlatesConnections match this filter */
  platesConnection_ALL?: InputMaybe<PropagationPlatesConnectionWhere>;
  /** Return Propagations where none of the related PropagationPlatesConnections match this filter */
  platesConnection_NONE?: InputMaybe<PropagationPlatesConnectionWhere>;
  /** Return Propagations where one of the related PropagationPlatesConnections match this filter */
  platesConnection_SINGLE?: InputMaybe<PropagationPlatesConnectionWhere>;
  /** Return Propagations where some of the related PropagationPlatesConnections match this filter */
  platesConnection_SOME?: InputMaybe<PropagationPlatesConnectionWhere>;
  /** Return Propagations where all of the related Plates match this filter */
  plates_ALL?: InputMaybe<PlateWhere>;
  /** Return Propagations where none of the related Plates match this filter */
  plates_NONE?: InputMaybe<PlateWhere>;
  /** Return Propagations where one of the related Plates match this filter */
  plates_SINGLE?: InputMaybe<PlateWhere>;
  /** Return Propagations where some of the related Plates match this filter */
  plates_SOME?: InputMaybe<PlateWhere>;
  recipe?: InputMaybe<RecipeWhere>;
  recipeAggregate?: InputMaybe<PropagationRecipeAggregateInput>;
  recipeConnection?: InputMaybe<PropagationRecipeConnectionWhere>;
  recipeConnection_NOT?: InputMaybe<PropagationRecipeConnectionWhere>;
  recipe_NOT?: InputMaybe<RecipeWhere>;
  sample?: InputMaybe<SampleWhere>;
  sampleAggregate?: InputMaybe<PropagationSampleAggregateInput>;
  sampleConnection?: InputMaybe<PropagationSampleConnectionWhere>;
  sampleConnection_NOT?: InputMaybe<PropagationSampleConnectionWhere>;
  sample_NOT?: InputMaybe<SampleWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropagationsConnection = {
  __typename?: 'PropagationsConnection';
  edges: Array<PropagationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  observations: Array<Observation>;
  observationsAggregate: ObservationAggregateSelection;
  observationsConnection: ObservationsConnection;
  plates: Array<Plate>;
  platesAggregate: PlateAggregateSelection;
  platesConnection: PlatesConnection;
  propagations: Array<Propagation>;
  propagationsAggregate: PropagationAggregateSelection;
  propagationsConnection: PropagationsConnection;
  recipes: Array<Recipe>;
  recipesAggregate: RecipeAggregateSelection;
  recipesConnection: RecipesConnection;
  recordings: Array<Recording>;
  recordingsAggregate: RecordingAggregateSelection;
  recordingsConnection: RecordingsConnection;
  samples: Array<Sample>;
  samplesAggregate: SampleAggregateSelection;
  samplesConnection: SamplesConnection;
  uploadResults: Array<UploadResult>;
  uploadResultsAggregate: UploadResultAggregateSelection;
  uploadResultsConnection: UploadResultsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};


export type QueryObservationsArgs = {
  options?: InputMaybe<ObservationOptions>;
  where?: InputMaybe<ObservationWhere>;
};


export type QueryObservationsAggregateArgs = {
  where?: InputMaybe<ObservationWhere>;
};


export type QueryObservationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ObservationSort>>>;
  where?: InputMaybe<ObservationWhere>;
};


export type QueryPlatesArgs = {
  options?: InputMaybe<PlateOptions>;
  where?: InputMaybe<PlateWhere>;
};


export type QueryPlatesAggregateArgs = {
  where?: InputMaybe<PlateWhere>;
};


export type QueryPlatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PlateSort>>>;
  where?: InputMaybe<PlateWhere>;
};


export type QueryPropagationsArgs = {
  options?: InputMaybe<PropagationOptions>;
  where?: InputMaybe<PropagationWhere>;
};


export type QueryPropagationsAggregateArgs = {
  where?: InputMaybe<PropagationWhere>;
};


export type QueryPropagationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PropagationSort>>>;
  where?: InputMaybe<PropagationWhere>;
};


export type QueryRecipesArgs = {
  options?: InputMaybe<RecipeOptions>;
  where?: InputMaybe<RecipeWhere>;
};


export type QueryRecipesAggregateArgs = {
  where?: InputMaybe<RecipeWhere>;
};


export type QueryRecipesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecipeSort>>>;
  where?: InputMaybe<RecipeWhere>;
};


export type QueryRecordingsArgs = {
  options?: InputMaybe<RecordingOptions>;
  where?: InputMaybe<RecordingWhere>;
};


export type QueryRecordingsAggregateArgs = {
  where?: InputMaybe<RecordingWhere>;
};


export type QueryRecordingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecordingSort>>>;
  where?: InputMaybe<RecordingWhere>;
};


export type QuerySamplesArgs = {
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};


export type QuerySamplesAggregateArgs = {
  where?: InputMaybe<SampleWhere>;
};


export type QuerySamplesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SampleSort>>>;
  where?: InputMaybe<SampleWhere>;
};


export type QueryUploadResultsArgs = {
  options?: InputMaybe<UploadResultOptions>;
  where?: InputMaybe<UploadResultWhere>;
};


export type QueryUploadResultsAggregateArgs = {
  where?: InputMaybe<UploadResultWhere>;
};


export type QueryUploadResultsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UploadResultSort>>>;
  where?: InputMaybe<UploadResultWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

export type QueryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent: RecipeParent;
  parentConnection: RecipeParentConnection;
  type: RecipeType;
  updatedAt: Scalars['DateTime']['output'];
};


export type RecipeParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<RecipeParentWhere>;
};


export type RecipeParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeParentConnectionWhere>;
};

export type RecipeAggregateSelection = {
  __typename?: 'RecipeAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type RecipeConnectInput = {
  parent?: InputMaybe<RecipeParentConnectInput>;
};

export type RecipeConnectOrCreateInput = {
  parent?: InputMaybe<RecipeParentConnectOrCreateInput>;
};

export type RecipeConnectOrCreateWhere = {
  node: RecipeUniqueWhere;
};

export type RecipeConnectWhere = {
  node: RecipeWhere;
};

export type RecipeCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<RecipeParentCreateInput>;
  type: RecipeType;
};

export type RecipeDeleteInput = {
  parent?: InputMaybe<RecipeParentDeleteInput>;
};

export type RecipeDisconnectInput = {
  parent?: InputMaybe<RecipeParentDisconnectInput>;
};

export type RecipeEdge = {
  __typename?: 'RecipeEdge';
  cursor: Scalars['String']['output'];
  node: Recipe;
};

export type RecipeOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: RecipeType;
};

export type RecipeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more RecipeSort objects to sort Recipes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RecipeSort>>;
};

export type RecipeParent = Plate | Propagation;

export type RecipeParentConnectInput = {
  Plate?: InputMaybe<RecipeParentPlateConnectFieldInput>;
  Propagation?: InputMaybe<RecipeParentPropagationConnectFieldInput>;
};

export type RecipeParentConnectOrCreateInput = {
  Plate?: InputMaybe<RecipeParentPlateConnectOrCreateFieldInput>;
  Propagation?: InputMaybe<RecipeParentPropagationConnectOrCreateFieldInput>;
};

export type RecipeParentConnection = {
  __typename?: 'RecipeParentConnection';
  edges: Array<RecipeParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RecipeParentConnectionWhere = {
  Plate?: InputMaybe<RecipeParentPlateConnectionWhere>;
  Propagation?: InputMaybe<RecipeParentPropagationConnectionWhere>;
};

export type RecipeParentCreateFieldInput = {
  Plate?: InputMaybe<RecipeParentPlateCreateFieldInput>;
  Propagation?: InputMaybe<RecipeParentPropagationCreateFieldInput>;
};

export type RecipeParentCreateInput = {
  Plate?: InputMaybe<RecipeParentPlateFieldInput>;
  Propagation?: InputMaybe<RecipeParentPropagationFieldInput>;
};

export type RecipeParentDeleteInput = {
  Plate?: InputMaybe<RecipeParentPlateDeleteFieldInput>;
  Propagation?: InputMaybe<RecipeParentPropagationDeleteFieldInput>;
};

export type RecipeParentDisconnectInput = {
  Plate?: InputMaybe<RecipeParentPlateDisconnectFieldInput>;
  Propagation?: InputMaybe<RecipeParentPropagationDisconnectFieldInput>;
};

export type RecipeParentPlateConnectFieldInput = {
  connect?: InputMaybe<PlateConnectInput>;
  where?: InputMaybe<PlateConnectWhere>;
};

export type RecipeParentPlateConnectOrCreateFieldInput = {
  onCreate: RecipeParentPlateConnectOrCreateFieldInputOnCreate;
  where: PlateConnectOrCreateWhere;
};

export type RecipeParentPlateConnectOrCreateFieldInputOnCreate = {
  node: PlateOnCreateInput;
};

export type RecipeParentPlateConnectionWhere = {
  AND?: InputMaybe<Array<RecipeParentPlateConnectionWhere>>;
  NOT?: InputMaybe<RecipeParentPlateConnectionWhere>;
  OR?: InputMaybe<Array<RecipeParentPlateConnectionWhere>>;
  node?: InputMaybe<PlateWhere>;
};

export type RecipeParentPlateCreateFieldInput = {
  node: PlateCreateInput;
};

export type RecipeParentPlateDeleteFieldInput = {
  delete?: InputMaybe<PlateDeleteInput>;
  where?: InputMaybe<RecipeParentPlateConnectionWhere>;
};

export type RecipeParentPlateDisconnectFieldInput = {
  disconnect?: InputMaybe<PlateDisconnectInput>;
  where?: InputMaybe<RecipeParentPlateConnectionWhere>;
};

export type RecipeParentPlateFieldInput = {
  connect?: InputMaybe<RecipeParentPlateConnectFieldInput>;
  connectOrCreate?: InputMaybe<RecipeParentPlateConnectOrCreateFieldInput>;
  create?: InputMaybe<RecipeParentPlateCreateFieldInput>;
};

export type RecipeParentPlateUpdateConnectionInput = {
  node?: InputMaybe<PlateUpdateInput>;
};

export type RecipeParentPlateUpdateFieldInput = {
  connect?: InputMaybe<RecipeParentPlateConnectFieldInput>;
  connectOrCreate?: InputMaybe<RecipeParentPlateConnectOrCreateFieldInput>;
  create?: InputMaybe<RecipeParentPlateCreateFieldInput>;
  delete?: InputMaybe<RecipeParentPlateDeleteFieldInput>;
  disconnect?: InputMaybe<RecipeParentPlateDisconnectFieldInput>;
  update?: InputMaybe<RecipeParentPlateUpdateConnectionInput>;
  where?: InputMaybe<RecipeParentPlateConnectionWhere>;
};

export type RecipeParentPropagationConnectFieldInput = {
  connect?: InputMaybe<PropagationConnectInput>;
  where?: InputMaybe<PropagationConnectWhere>;
};

export type RecipeParentPropagationConnectOrCreateFieldInput = {
  onCreate: RecipeParentPropagationConnectOrCreateFieldInputOnCreate;
  where: PropagationConnectOrCreateWhere;
};

export type RecipeParentPropagationConnectOrCreateFieldInputOnCreate = {
  node: PropagationOnCreateInput;
};

export type RecipeParentPropagationConnectionWhere = {
  AND?: InputMaybe<Array<RecipeParentPropagationConnectionWhere>>;
  NOT?: InputMaybe<RecipeParentPropagationConnectionWhere>;
  OR?: InputMaybe<Array<RecipeParentPropagationConnectionWhere>>;
  node?: InputMaybe<PropagationWhere>;
};

export type RecipeParentPropagationCreateFieldInput = {
  node: PropagationCreateInput;
};

export type RecipeParentPropagationDeleteFieldInput = {
  delete?: InputMaybe<PropagationDeleteInput>;
  where?: InputMaybe<RecipeParentPropagationConnectionWhere>;
};

export type RecipeParentPropagationDisconnectFieldInput = {
  disconnect?: InputMaybe<PropagationDisconnectInput>;
  where?: InputMaybe<RecipeParentPropagationConnectionWhere>;
};

export type RecipeParentPropagationFieldInput = {
  connect?: InputMaybe<RecipeParentPropagationConnectFieldInput>;
  connectOrCreate?: InputMaybe<RecipeParentPropagationConnectOrCreateFieldInput>;
  create?: InputMaybe<RecipeParentPropagationCreateFieldInput>;
};

export type RecipeParentPropagationUpdateConnectionInput = {
  node?: InputMaybe<PropagationUpdateInput>;
};

export type RecipeParentPropagationUpdateFieldInput = {
  connect?: InputMaybe<RecipeParentPropagationConnectFieldInput>;
  connectOrCreate?: InputMaybe<RecipeParentPropagationConnectOrCreateFieldInput>;
  create?: InputMaybe<RecipeParentPropagationCreateFieldInput>;
  delete?: InputMaybe<RecipeParentPropagationDeleteFieldInput>;
  disconnect?: InputMaybe<RecipeParentPropagationDisconnectFieldInput>;
  update?: InputMaybe<RecipeParentPropagationUpdateConnectionInput>;
  where?: InputMaybe<RecipeParentPropagationConnectionWhere>;
};

export type RecipeParentRelationship = {
  __typename?: 'RecipeParentRelationship';
  cursor: Scalars['String']['output'];
  node: RecipeParent;
};

export type RecipeParentUpdateInput = {
  Plate?: InputMaybe<RecipeParentPlateUpdateFieldInput>;
  Propagation?: InputMaybe<RecipeParentPropagationUpdateFieldInput>;
};

export type RecipeParentWhere = {
  Plate?: InputMaybe<PlateWhere>;
  Propagation?: InputMaybe<PropagationWhere>;
};

export type RecipeRelationInput = {
  parent?: InputMaybe<RecipeParentCreateFieldInput>;
};

/** Fields to sort Recipes by. The order in which sorts are applied is not guaranteed when specifying many fields in one RecipeSort object. */
export type RecipeSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export enum RecipeType {
  Plate = 'PLATE',
  Propagation = 'PROPAGATION'
}

export type RecipeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RecipeUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<RecipeParentUpdateInput>;
  type?: InputMaybe<RecipeType>;
};

export type RecipeWhere = {
  AND?: InputMaybe<Array<RecipeWhere>>;
  NOT?: InputMaybe<RecipeWhere>;
  OR?: InputMaybe<Array<RecipeWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parentConnection?: InputMaybe<RecipeParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<RecipeParentConnectionWhere>;
  type?: InputMaybe<RecipeType>;
  type_IN?: InputMaybe<Array<RecipeType>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RecipesConnection = {
  __typename?: 'RecipesConnection';
  edges: Array<RecipeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Recording = {
  __typename?: 'Recording';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  samples: Array<Sample>;
  samplesAggregate?: Maybe<RecordingSampleSamplesAggregationSelection>;
  samplesConnection: RecordingSamplesConnection;
  updatedAt: Scalars['DateTime']['output'];
};


export type RecordingSamplesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};


export type RecordingSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SampleWhere>;
};


export type RecordingSamplesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RecordingSamplesConnectionSort>>;
  where?: InputMaybe<RecordingSamplesConnectionWhere>;
};

export type RecordingAggregateSelection = {
  __typename?: 'RecordingAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type RecordingConnectInput = {
  samples?: InputMaybe<Array<RecordingSamplesConnectFieldInput>>;
};

export type RecordingConnectOrCreateInput = {
  samples?: InputMaybe<Array<RecordingSamplesConnectOrCreateFieldInput>>;
};

export type RecordingConnectOrCreateWhere = {
  node: RecordingUniqueWhere;
};

export type RecordingConnectWhere = {
  node: RecordingWhere;
};

export type RecordingCreateInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  samples?: InputMaybe<RecordingSamplesFieldInput>;
};

export type RecordingDeleteInput = {
  samples?: InputMaybe<Array<RecordingSamplesDeleteFieldInput>>;
};

export type RecordingDisconnectInput = {
  samples?: InputMaybe<Array<RecordingSamplesDisconnectFieldInput>>;
};

export type RecordingEdge = {
  __typename?: 'RecordingEdge';
  cursor: Scalars['String']['output'];
  node: Recording;
};

export type RecordingOnCreateInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type RecordingOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more RecordingSort objects to sort Recordings by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RecordingSort>>;
};

export type RecordingRelationInput = {
  samples?: InputMaybe<Array<RecordingSamplesCreateFieldInput>>;
};

export type RecordingSampleSamplesAggregationSelection = {
  __typename?: 'RecordingSampleSamplesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<RecordingSampleSamplesNodeAggregateSelection>;
};

export type RecordingSampleSamplesNodeAggregateSelection = {
  __typename?: 'RecordingSampleSamplesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  latitude: FloatAggregateSelectionNonNullable;
  longitude: FloatAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type RecordingSamplesAggregateInput = {
  AND?: InputMaybe<Array<RecordingSamplesAggregateInput>>;
  NOT?: InputMaybe<RecordingSamplesAggregateInput>;
  OR?: InputMaybe<Array<RecordingSamplesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<RecordingSamplesNodeAggregationWhereInput>;
};

export type RecordingSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SampleConnectWhere>;
};

export type RecordingSamplesConnectOrCreateFieldInput = {
  onCreate: RecordingSamplesConnectOrCreateFieldInputOnCreate;
  where: SampleConnectOrCreateWhere;
};

export type RecordingSamplesConnectOrCreateFieldInputOnCreate = {
  node: SampleOnCreateInput;
};

export type RecordingSamplesConnection = {
  __typename?: 'RecordingSamplesConnection';
  edges: Array<RecordingSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RecordingSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type RecordingSamplesConnectionWhere = {
  AND?: InputMaybe<Array<RecordingSamplesConnectionWhere>>;
  NOT?: InputMaybe<RecordingSamplesConnectionWhere>;
  OR?: InputMaybe<Array<RecordingSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type RecordingSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type RecordingSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<RecordingSamplesConnectionWhere>;
};

export type RecordingSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<RecordingSamplesConnectionWhere>;
};

export type RecordingSamplesFieldInput = {
  connect?: InputMaybe<Array<RecordingSamplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RecordingSamplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RecordingSamplesCreateFieldInput>>;
};

export type RecordingSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RecordingSamplesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RecordingSamplesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RecordingSamplesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  latitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RecordingSamplesRelationship = {
  __typename?: 'RecordingSamplesRelationship';
  cursor: Scalars['String']['output'];
  node: Sample;
};

export type RecordingSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type RecordingSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<RecordingSamplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RecordingSamplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RecordingSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<RecordingSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RecordingSamplesDisconnectFieldInput>>;
  update?: InputMaybe<RecordingSamplesUpdateConnectionInput>;
  where?: InputMaybe<RecordingSamplesConnectionWhere>;
};

/** Fields to sort Recordings by. The order in which sorts are applied is not guaranteed when specifying many fields in one RecordingSort object. */
export type RecordingSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type RecordingUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RecordingUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  samples?: InputMaybe<Array<RecordingSamplesUpdateFieldInput>>;
};

export type RecordingWhere = {
  AND?: InputMaybe<Array<RecordingWhere>>;
  NOT?: InputMaybe<RecordingWhere>;
  OR?: InputMaybe<Array<RecordingWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  samplesAggregate?: InputMaybe<RecordingSamplesAggregateInput>;
  /** Return Recordings where all of the related RecordingSamplesConnections match this filter */
  samplesConnection_ALL?: InputMaybe<RecordingSamplesConnectionWhere>;
  /** Return Recordings where none of the related RecordingSamplesConnections match this filter */
  samplesConnection_NONE?: InputMaybe<RecordingSamplesConnectionWhere>;
  /** Return Recordings where one of the related RecordingSamplesConnections match this filter */
  samplesConnection_SINGLE?: InputMaybe<RecordingSamplesConnectionWhere>;
  /** Return Recordings where some of the related RecordingSamplesConnections match this filter */
  samplesConnection_SOME?: InputMaybe<RecordingSamplesConnectionWhere>;
  /** Return Recordings where all of the related Samples match this filter */
  samples_ALL?: InputMaybe<SampleWhere>;
  /** Return Recordings where none of the related Samples match this filter */
  samples_NONE?: InputMaybe<SampleWhere>;
  /** Return Recordings where one of the related Samples match this filter */
  samples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Recordings where some of the related Samples match this filter */
  samples_SOME?: InputMaybe<SampleWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RecordingsConnection = {
  __typename?: 'RecordingsConnection';
  edges: Array<RecordingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Sample = {
  __typename?: 'Sample';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  observations: Array<Observation>;
  observationsAggregate?: Maybe<SampleObservationObservationsAggregationSelection>;
  observationsConnection: SampleObservationsConnection;
  propagations: Array<Propagation>;
  propagationsAggregate?: Maybe<SamplePropagationPropagationsAggregationSelection>;
  propagationsConnection: SamplePropagationsConnection;
  recording: Recording;
  recordingAggregate?: Maybe<SampleRecordingRecordingAggregationSelection>;
  recordingConnection: SampleRecordingConnection;
  updatedAt: Scalars['DateTime']['output'];
};


export type SampleObservationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ObservationOptions>;
  where?: InputMaybe<ObservationWhere>;
};


export type SampleObservationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ObservationWhere>;
};


export type SampleObservationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SampleObservationsConnectionSort>>;
  where?: InputMaybe<SampleObservationsConnectionWhere>;
};


export type SamplePropagationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PropagationOptions>;
  where?: InputMaybe<PropagationWhere>;
};


export type SamplePropagationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PropagationWhere>;
};


export type SamplePropagationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SamplePropagationsConnectionSort>>;
  where?: InputMaybe<SamplePropagationsConnectionWhere>;
};


export type SampleRecordingArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RecordingOptions>;
  where?: InputMaybe<RecordingWhere>;
};


export type SampleRecordingAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RecordingWhere>;
};


export type SampleRecordingConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SampleRecordingConnectionSort>>;
  where?: InputMaybe<SampleRecordingConnectionWhere>;
};

export type SampleAggregateSelection = {
  __typename?: 'SampleAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  latitude: FloatAggregateSelectionNonNullable;
  longitude: FloatAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type SampleConnectInput = {
  observations?: InputMaybe<Array<SampleObservationsConnectFieldInput>>;
  propagations?: InputMaybe<Array<SamplePropagationsConnectFieldInput>>;
  recording?: InputMaybe<SampleRecordingConnectFieldInput>;
};

export type SampleConnectOrCreateInput = {
  observations?: InputMaybe<Array<SampleObservationsConnectOrCreateFieldInput>>;
  propagations?: InputMaybe<Array<SamplePropagationsConnectOrCreateFieldInput>>;
  recording?: InputMaybe<SampleRecordingConnectOrCreateFieldInput>;
};

export type SampleConnectOrCreateWhere = {
  node: SampleUniqueWhere;
};

export type SampleConnectWhere = {
  node: SampleWhere;
};

export type SampleCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  observations?: InputMaybe<SampleObservationsFieldInput>;
  propagations?: InputMaybe<SamplePropagationsFieldInput>;
  recording?: InputMaybe<SampleRecordingFieldInput>;
};

export type SampleDeleteInput = {
  observations?: InputMaybe<Array<SampleObservationsDeleteFieldInput>>;
  propagations?: InputMaybe<Array<SamplePropagationsDeleteFieldInput>>;
  recording?: InputMaybe<SampleRecordingDeleteFieldInput>;
};

export type SampleDisconnectInput = {
  observations?: InputMaybe<Array<SampleObservationsDisconnectFieldInput>>;
  propagations?: InputMaybe<Array<SamplePropagationsDisconnectFieldInput>>;
  recording?: InputMaybe<SampleRecordingDisconnectFieldInput>;
};

export type SampleEdge = {
  __typename?: 'SampleEdge';
  cursor: Scalars['String']['output'];
  node: Sample;
};

export type SampleObservationObservationsAggregationSelection = {
  __typename?: 'SampleObservationObservationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SampleObservationObservationsNodeAggregateSelection>;
};

export type SampleObservationObservationsNodeAggregateSelection = {
  __typename?: 'SampleObservationObservationsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type SampleObservationsAggregateInput = {
  AND?: InputMaybe<Array<SampleObservationsAggregateInput>>;
  NOT?: InputMaybe<SampleObservationsAggregateInput>;
  OR?: InputMaybe<Array<SampleObservationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SampleObservationsNodeAggregationWhereInput>;
};

export type SampleObservationsConnectFieldInput = {
  connect?: InputMaybe<Array<ObservationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ObservationConnectWhere>;
};

export type SampleObservationsConnectOrCreateFieldInput = {
  onCreate: SampleObservationsConnectOrCreateFieldInputOnCreate;
  where: ObservationConnectOrCreateWhere;
};

export type SampleObservationsConnectOrCreateFieldInputOnCreate = {
  node: ObservationOnCreateInput;
};

export type SampleObservationsConnection = {
  __typename?: 'SampleObservationsConnection';
  edges: Array<SampleObservationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SampleObservationsConnectionSort = {
  node?: InputMaybe<ObservationSort>;
};

export type SampleObservationsConnectionWhere = {
  AND?: InputMaybe<Array<SampleObservationsConnectionWhere>>;
  NOT?: InputMaybe<SampleObservationsConnectionWhere>;
  OR?: InputMaybe<Array<SampleObservationsConnectionWhere>>;
  node?: InputMaybe<ObservationWhere>;
};

export type SampleObservationsCreateFieldInput = {
  node: ObservationCreateInput;
};

export type SampleObservationsDeleteFieldInput = {
  delete?: InputMaybe<ObservationDeleteInput>;
  where?: InputMaybe<SampleObservationsConnectionWhere>;
};

export type SampleObservationsDisconnectFieldInput = {
  disconnect?: InputMaybe<ObservationDisconnectInput>;
  where?: InputMaybe<SampleObservationsConnectionWhere>;
};

export type SampleObservationsFieldInput = {
  connect?: InputMaybe<Array<SampleObservationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SampleObservationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SampleObservationsCreateFieldInput>>;
};

export type SampleObservationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleObservationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SampleObservationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SampleObservationsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SampleObservationsRelationship = {
  __typename?: 'SampleObservationsRelationship';
  cursor: Scalars['String']['output'];
  node: Observation;
};

export type SampleObservationsUpdateConnectionInput = {
  node?: InputMaybe<ObservationUpdateInput>;
};

export type SampleObservationsUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleObservationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SampleObservationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SampleObservationsCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleObservationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SampleObservationsDisconnectFieldInput>>;
  update?: InputMaybe<SampleObservationsUpdateConnectionInput>;
  where?: InputMaybe<SampleObservationsConnectionWhere>;
};

export type SampleOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type SampleOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more SampleSort objects to sort Samples by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SampleSort>>;
};

export type SamplePropagationPropagationsAggregationSelection = {
  __typename?: 'SamplePropagationPropagationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SamplePropagationPropagationsNodeAggregateSelection>;
};

export type SamplePropagationPropagationsNodeAggregateSelection = {
  __typename?: 'SamplePropagationPropagationsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type SamplePropagationsAggregateInput = {
  AND?: InputMaybe<Array<SamplePropagationsAggregateInput>>;
  NOT?: InputMaybe<SamplePropagationsAggregateInput>;
  OR?: InputMaybe<Array<SamplePropagationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SamplePropagationsNodeAggregationWhereInput>;
};

export type SamplePropagationsConnectFieldInput = {
  connect?: InputMaybe<Array<PropagationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PropagationConnectWhere>;
};

export type SamplePropagationsConnectOrCreateFieldInput = {
  onCreate: SamplePropagationsConnectOrCreateFieldInputOnCreate;
  where: PropagationConnectOrCreateWhere;
};

export type SamplePropagationsConnectOrCreateFieldInputOnCreate = {
  node: PropagationOnCreateInput;
};

export type SamplePropagationsConnection = {
  __typename?: 'SamplePropagationsConnection';
  edges: Array<SamplePropagationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SamplePropagationsConnectionSort = {
  node?: InputMaybe<PropagationSort>;
};

export type SamplePropagationsConnectionWhere = {
  AND?: InputMaybe<Array<SamplePropagationsConnectionWhere>>;
  NOT?: InputMaybe<SamplePropagationsConnectionWhere>;
  OR?: InputMaybe<Array<SamplePropagationsConnectionWhere>>;
  node?: InputMaybe<PropagationWhere>;
};

export type SamplePropagationsCreateFieldInput = {
  node: PropagationCreateInput;
};

export type SamplePropagationsDeleteFieldInput = {
  delete?: InputMaybe<PropagationDeleteInput>;
  where?: InputMaybe<SamplePropagationsConnectionWhere>;
};

export type SamplePropagationsDisconnectFieldInput = {
  disconnect?: InputMaybe<PropagationDisconnectInput>;
  where?: InputMaybe<SamplePropagationsConnectionWhere>;
};

export type SamplePropagationsFieldInput = {
  connect?: InputMaybe<Array<SamplePropagationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SamplePropagationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SamplePropagationsCreateFieldInput>>;
};

export type SamplePropagationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SamplePropagationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SamplePropagationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SamplePropagationsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SamplePropagationsRelationship = {
  __typename?: 'SamplePropagationsRelationship';
  cursor: Scalars['String']['output'];
  node: Propagation;
};

export type SamplePropagationsUpdateConnectionInput = {
  node?: InputMaybe<PropagationUpdateInput>;
};

export type SamplePropagationsUpdateFieldInput = {
  connect?: InputMaybe<Array<SamplePropagationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SamplePropagationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SamplePropagationsCreateFieldInput>>;
  delete?: InputMaybe<Array<SamplePropagationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SamplePropagationsDisconnectFieldInput>>;
  update?: InputMaybe<SamplePropagationsUpdateConnectionInput>;
  where?: InputMaybe<SamplePropagationsConnectionWhere>;
};

export type SampleRecordingAggregateInput = {
  AND?: InputMaybe<Array<SampleRecordingAggregateInput>>;
  NOT?: InputMaybe<SampleRecordingAggregateInput>;
  OR?: InputMaybe<Array<SampleRecordingAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SampleRecordingNodeAggregationWhereInput>;
};

export type SampleRecordingConnectFieldInput = {
  connect?: InputMaybe<RecordingConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RecordingConnectWhere>;
};

export type SampleRecordingConnectOrCreateFieldInput = {
  onCreate: SampleRecordingConnectOrCreateFieldInputOnCreate;
  where: RecordingConnectOrCreateWhere;
};

export type SampleRecordingConnectOrCreateFieldInputOnCreate = {
  node: RecordingOnCreateInput;
};

export type SampleRecordingConnection = {
  __typename?: 'SampleRecordingConnection';
  edges: Array<SampleRecordingRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SampleRecordingConnectionSort = {
  node?: InputMaybe<RecordingSort>;
};

export type SampleRecordingConnectionWhere = {
  AND?: InputMaybe<Array<SampleRecordingConnectionWhere>>;
  NOT?: InputMaybe<SampleRecordingConnectionWhere>;
  OR?: InputMaybe<Array<SampleRecordingConnectionWhere>>;
  node?: InputMaybe<RecordingWhere>;
};

export type SampleRecordingCreateFieldInput = {
  node: RecordingCreateInput;
};

export type SampleRecordingDeleteFieldInput = {
  delete?: InputMaybe<RecordingDeleteInput>;
  where?: InputMaybe<SampleRecordingConnectionWhere>;
};

export type SampleRecordingDisconnectFieldInput = {
  disconnect?: InputMaybe<RecordingDisconnectInput>;
  where?: InputMaybe<SampleRecordingConnectionWhere>;
};

export type SampleRecordingFieldInput = {
  connect?: InputMaybe<SampleRecordingConnectFieldInput>;
  connectOrCreate?: InputMaybe<SampleRecordingConnectOrCreateFieldInput>;
  create?: InputMaybe<SampleRecordingCreateFieldInput>;
};

export type SampleRecordingNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleRecordingNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SampleRecordingNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SampleRecordingNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SampleRecordingRecordingAggregationSelection = {
  __typename?: 'SampleRecordingRecordingAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SampleRecordingRecordingNodeAggregateSelection>;
};

export type SampleRecordingRecordingNodeAggregateSelection = {
  __typename?: 'SampleRecordingRecordingNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type SampleRecordingRelationship = {
  __typename?: 'SampleRecordingRelationship';
  cursor: Scalars['String']['output'];
  node: Recording;
};

export type SampleRecordingUpdateConnectionInput = {
  node?: InputMaybe<RecordingUpdateInput>;
};

export type SampleRecordingUpdateFieldInput = {
  connect?: InputMaybe<SampleRecordingConnectFieldInput>;
  connectOrCreate?: InputMaybe<SampleRecordingConnectOrCreateFieldInput>;
  create?: InputMaybe<SampleRecordingCreateFieldInput>;
  delete?: InputMaybe<SampleRecordingDeleteFieldInput>;
  disconnect?: InputMaybe<SampleRecordingDisconnectFieldInput>;
  update?: InputMaybe<SampleRecordingUpdateConnectionInput>;
  where?: InputMaybe<SampleRecordingConnectionWhere>;
};

export type SampleRelationInput = {
  observations?: InputMaybe<Array<SampleObservationsCreateFieldInput>>;
  propagations?: InputMaybe<Array<SamplePropagationsCreateFieldInput>>;
  recording?: InputMaybe<SampleRecordingCreateFieldInput>;
};

/** Fields to sort Samples by. The order in which sorts are applied is not guaranteed when specifying many fields in one SampleSort object. */
export type SampleSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  latitude?: InputMaybe<SortDirection>;
  longitude?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type SampleUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SampleUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  latitude_ADD?: InputMaybe<Scalars['Float']['input']>;
  latitude_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  longitude_ADD?: InputMaybe<Scalars['Float']['input']>;
  longitude_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  observations?: InputMaybe<Array<SampleObservationsUpdateFieldInput>>;
  propagations?: InputMaybe<Array<SamplePropagationsUpdateFieldInput>>;
  recording?: InputMaybe<SampleRecordingUpdateFieldInput>;
};

export type SampleWhere = {
  AND?: InputMaybe<Array<SampleWhere>>;
  NOT?: InputMaybe<SampleWhere>;
  OR?: InputMaybe<Array<SampleWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  latitude_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_IN?: InputMaybe<Array<Scalars['Float']['input']>>;
  latitude_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  longitude_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_IN?: InputMaybe<Array<Scalars['Float']['input']>>;
  longitude_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_LTE?: InputMaybe<Scalars['Float']['input']>;
  observationsAggregate?: InputMaybe<SampleObservationsAggregateInput>;
  /** Return Samples where all of the related SampleObservationsConnections match this filter */
  observationsConnection_ALL?: InputMaybe<SampleObservationsConnectionWhere>;
  /** Return Samples where none of the related SampleObservationsConnections match this filter */
  observationsConnection_NONE?: InputMaybe<SampleObservationsConnectionWhere>;
  /** Return Samples where one of the related SampleObservationsConnections match this filter */
  observationsConnection_SINGLE?: InputMaybe<SampleObservationsConnectionWhere>;
  /** Return Samples where some of the related SampleObservationsConnections match this filter */
  observationsConnection_SOME?: InputMaybe<SampleObservationsConnectionWhere>;
  /** Return Samples where all of the related Observations match this filter */
  observations_ALL?: InputMaybe<ObservationWhere>;
  /** Return Samples where none of the related Observations match this filter */
  observations_NONE?: InputMaybe<ObservationWhere>;
  /** Return Samples where one of the related Observations match this filter */
  observations_SINGLE?: InputMaybe<ObservationWhere>;
  /** Return Samples where some of the related Observations match this filter */
  observations_SOME?: InputMaybe<ObservationWhere>;
  propagationsAggregate?: InputMaybe<SamplePropagationsAggregateInput>;
  /** Return Samples where all of the related SamplePropagationsConnections match this filter */
  propagationsConnection_ALL?: InputMaybe<SamplePropagationsConnectionWhere>;
  /** Return Samples where none of the related SamplePropagationsConnections match this filter */
  propagationsConnection_NONE?: InputMaybe<SamplePropagationsConnectionWhere>;
  /** Return Samples where one of the related SamplePropagationsConnections match this filter */
  propagationsConnection_SINGLE?: InputMaybe<SamplePropagationsConnectionWhere>;
  /** Return Samples where some of the related SamplePropagationsConnections match this filter */
  propagationsConnection_SOME?: InputMaybe<SamplePropagationsConnectionWhere>;
  /** Return Samples where all of the related Propagations match this filter */
  propagations_ALL?: InputMaybe<PropagationWhere>;
  /** Return Samples where none of the related Propagations match this filter */
  propagations_NONE?: InputMaybe<PropagationWhere>;
  /** Return Samples where one of the related Propagations match this filter */
  propagations_SINGLE?: InputMaybe<PropagationWhere>;
  /** Return Samples where some of the related Propagations match this filter */
  propagations_SOME?: InputMaybe<PropagationWhere>;
  recording?: InputMaybe<RecordingWhere>;
  recordingAggregate?: InputMaybe<SampleRecordingAggregateInput>;
  recordingConnection?: InputMaybe<SampleRecordingConnectionWhere>;
  recordingConnection_NOT?: InputMaybe<SampleRecordingConnectionWhere>;
  recording_NOT?: InputMaybe<RecordingWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SamplesConnection = {
  __typename?: 'SamplesConnection';
  edges: Array<SampleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateObservationsMutationResponse = {
  __typename?: 'UpdateObservationsMutationResponse';
  info: UpdateInfo;
  observations: Array<Observation>;
};

export type UpdatePlatesMutationResponse = {
  __typename?: 'UpdatePlatesMutationResponse';
  info: UpdateInfo;
  plates: Array<Plate>;
};

export type UpdatePropagationsMutationResponse = {
  __typename?: 'UpdatePropagationsMutationResponse';
  info: UpdateInfo;
  propagations: Array<Propagation>;
};

export type UpdateRecipesMutationResponse = {
  __typename?: 'UpdateRecipesMutationResponse';
  info: UpdateInfo;
  recipes: Array<Recipe>;
};

export type UpdateRecordingsMutationResponse = {
  __typename?: 'UpdateRecordingsMutationResponse';
  info: UpdateInfo;
  recordings: Array<Recording>;
};

export type UpdateSamplesMutationResponse = {
  __typename?: 'UpdateSamplesMutationResponse';
  info: UpdateInfo;
  samples: Array<Sample>;
};

export type UpdateUploadResultsMutationResponse = {
  __typename?: 'UpdateUploadResultsMutationResponse';
  info: UpdateInfo;
  uploadResults: Array<UploadResult>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type UploadResult = {
  __typename?: 'UploadResult';
  filename: Scalars['String']['output'];
};

export type UploadResultAggregateSelection = {
  __typename?: 'UploadResultAggregateSelection';
  count: Scalars['Int']['output'];
  filename: StringAggregateSelectionNonNullable;
};

export type UploadResultCreateInput = {
  filename: Scalars['String']['input'];
};

export type UploadResultEdge = {
  __typename?: 'UploadResultEdge';
  cursor: Scalars['String']['output'];
  node: UploadResult;
};

export type UploadResultOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UploadResultSort objects to sort UploadResults by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UploadResultSort>>;
};

/** Fields to sort UploadResults by. The order in which sorts are applied is not guaranteed when specifying many fields in one UploadResultSort object. */
export type UploadResultSort = {
  filename?: InputMaybe<SortDirection>;
};

export type UploadResultUpdateInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
};

export type UploadResultWhere = {
  AND?: InputMaybe<Array<UploadResultWhere>>;
  NOT?: InputMaybe<UploadResultWhere>;
  OR?: InputMaybe<Array<UploadResultWhere>>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filename_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  filename_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  filename_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  filename_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type UploadResultsConnection = {
  __typename?: 'UploadResultsConnection';
  edges: Array<UploadResultEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  recordings: Array<Recording>;
  recordingsAggregate?: Maybe<UserRecordingRecordingsAggregationSelection>;
  recordingsConnection: UserRecordingsConnection;
  samples: Array<Sample>;
  samplesAggregate?: Maybe<UserSampleSamplesAggregationSelection>;
  samplesConnection: UserSamplesConnection;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserRecordingsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RecordingOptions>;
  where?: InputMaybe<RecordingWhere>;
};


export type UserRecordingsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RecordingWhere>;
};


export type UserRecordingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserRecordingsConnectionSort>>;
  where?: InputMaybe<UserRecordingsConnectionWhere>;
};


export type UserSamplesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};


export type UserSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SampleWhere>;
};


export type UserSamplesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSamplesConnectionSort>>;
  where?: InputMaybe<UserSamplesConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type UserConnectInput = {
  recordings?: InputMaybe<Array<UserRecordingsConnectFieldInput>>;
  samples?: InputMaybe<Array<UserSamplesConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  recordings?: InputMaybe<Array<UserRecordingsConnectOrCreateFieldInput>>;
  samples?: InputMaybe<Array<UserSamplesConnectOrCreateFieldInput>>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  recordings?: InputMaybe<UserRecordingsFieldInput>;
  samples?: InputMaybe<UserSamplesFieldInput>;
};

export type UserDeleteInput = {
  recordings?: InputMaybe<Array<UserRecordingsDeleteFieldInput>>;
  samples?: InputMaybe<Array<UserSamplesDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  recordings?: InputMaybe<Array<UserRecordingsDisconnectFieldInput>>;
  samples?: InputMaybe<Array<UserSamplesDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRecordingRecordingsAggregationSelection = {
  __typename?: 'UserRecordingRecordingsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserRecordingRecordingsNodeAggregateSelection>;
};

export type UserRecordingRecordingsNodeAggregateSelection = {
  __typename?: 'UserRecordingRecordingsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type UserRecordingsAggregateInput = {
  AND?: InputMaybe<Array<UserRecordingsAggregateInput>>;
  NOT?: InputMaybe<UserRecordingsAggregateInput>;
  OR?: InputMaybe<Array<UserRecordingsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserRecordingsNodeAggregationWhereInput>;
};

export type UserRecordingsConnectFieldInput = {
  connect?: InputMaybe<Array<RecordingConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RecordingConnectWhere>;
};

export type UserRecordingsConnectOrCreateFieldInput = {
  onCreate: UserRecordingsConnectOrCreateFieldInputOnCreate;
  where: RecordingConnectOrCreateWhere;
};

export type UserRecordingsConnectOrCreateFieldInputOnCreate = {
  node: RecordingOnCreateInput;
};

export type UserRecordingsConnection = {
  __typename?: 'UserRecordingsConnection';
  edges: Array<UserRecordingsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserRecordingsConnectionSort = {
  node?: InputMaybe<RecordingSort>;
};

export type UserRecordingsConnectionWhere = {
  AND?: InputMaybe<Array<UserRecordingsConnectionWhere>>;
  NOT?: InputMaybe<UserRecordingsConnectionWhere>;
  OR?: InputMaybe<Array<UserRecordingsConnectionWhere>>;
  node?: InputMaybe<RecordingWhere>;
};

export type UserRecordingsCreateFieldInput = {
  node: RecordingCreateInput;
};

export type UserRecordingsDeleteFieldInput = {
  delete?: InputMaybe<RecordingDeleteInput>;
  where?: InputMaybe<UserRecordingsConnectionWhere>;
};

export type UserRecordingsDisconnectFieldInput = {
  disconnect?: InputMaybe<RecordingDisconnectInput>;
  where?: InputMaybe<UserRecordingsConnectionWhere>;
};

export type UserRecordingsFieldInput = {
  connect?: InputMaybe<Array<UserRecordingsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserRecordingsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserRecordingsCreateFieldInput>>;
};

export type UserRecordingsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserRecordingsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserRecordingsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserRecordingsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserRecordingsRelationship = {
  __typename?: 'UserRecordingsRelationship';
  cursor: Scalars['String']['output'];
  node: Recording;
};

export type UserRecordingsUpdateConnectionInput = {
  node?: InputMaybe<RecordingUpdateInput>;
};

export type UserRecordingsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserRecordingsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserRecordingsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserRecordingsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserRecordingsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserRecordingsDisconnectFieldInput>>;
  update?: InputMaybe<UserRecordingsUpdateConnectionInput>;
  where?: InputMaybe<UserRecordingsConnectionWhere>;
};

export type UserRelationInput = {
  recordings?: InputMaybe<Array<UserRecordingsCreateFieldInput>>;
  samples?: InputMaybe<Array<UserSamplesCreateFieldInput>>;
};

export type UserSampleSamplesAggregationSelection = {
  __typename?: 'UserSampleSamplesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserSampleSamplesNodeAggregateSelection>;
};

export type UserSampleSamplesNodeAggregateSelection = {
  __typename?: 'UserSampleSamplesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  latitude: FloatAggregateSelectionNonNullable;
  longitude: FloatAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type UserSamplesAggregateInput = {
  AND?: InputMaybe<Array<UserSamplesAggregateInput>>;
  NOT?: InputMaybe<UserSamplesAggregateInput>;
  OR?: InputMaybe<Array<UserSamplesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserSamplesNodeAggregationWhereInput>;
};

export type UserSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SampleConnectWhere>;
};

export type UserSamplesConnectOrCreateFieldInput = {
  onCreate: UserSamplesConnectOrCreateFieldInputOnCreate;
  where: SampleConnectOrCreateWhere;
};

export type UserSamplesConnectOrCreateFieldInputOnCreate = {
  node: SampleOnCreateInput;
};

export type UserSamplesConnection = {
  __typename?: 'UserSamplesConnection';
  edges: Array<UserSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type UserSamplesConnectionWhere = {
  AND?: InputMaybe<Array<UserSamplesConnectionWhere>>;
  NOT?: InputMaybe<UserSamplesConnectionWhere>;
  OR?: InputMaybe<Array<UserSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type UserSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type UserSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<UserSamplesConnectionWhere>;
};

export type UserSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<UserSamplesConnectionWhere>;
};

export type UserSamplesFieldInput = {
  connect?: InputMaybe<Array<UserSamplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserSamplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserSamplesCreateFieldInput>>;
};

export type UserSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserSamplesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserSamplesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserSamplesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  latitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  latitude_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  longitude_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserSamplesRelationship = {
  __typename?: 'UserSamplesRelationship';
  cursor: Scalars['String']['output'];
  node: Sample;
};

export type UserSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type UserSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<UserSamplesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserSamplesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<UserSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserSamplesDisconnectFieldInput>>;
  update?: InputMaybe<UserSamplesUpdateConnectionInput>;
  where?: InputMaybe<UserSamplesConnectionWhere>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  createdAt?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  recordings?: InputMaybe<Array<UserRecordingsUpdateFieldInput>>;
  samples?: InputMaybe<Array<UserSamplesUpdateFieldInput>>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  recordingsAggregate?: InputMaybe<UserRecordingsAggregateInput>;
  /** Return Users where all of the related UserRecordingsConnections match this filter */
  recordingsConnection_ALL?: InputMaybe<UserRecordingsConnectionWhere>;
  /** Return Users where none of the related UserRecordingsConnections match this filter */
  recordingsConnection_NONE?: InputMaybe<UserRecordingsConnectionWhere>;
  /** Return Users where one of the related UserRecordingsConnections match this filter */
  recordingsConnection_SINGLE?: InputMaybe<UserRecordingsConnectionWhere>;
  /** Return Users where some of the related UserRecordingsConnections match this filter */
  recordingsConnection_SOME?: InputMaybe<UserRecordingsConnectionWhere>;
  /** Return Users where all of the related Recordings match this filter */
  recordings_ALL?: InputMaybe<RecordingWhere>;
  /** Return Users where none of the related Recordings match this filter */
  recordings_NONE?: InputMaybe<RecordingWhere>;
  /** Return Users where one of the related Recordings match this filter */
  recordings_SINGLE?: InputMaybe<RecordingWhere>;
  /** Return Users where some of the related Recordings match this filter */
  recordings_SOME?: InputMaybe<RecordingWhere>;
  samplesAggregate?: InputMaybe<UserSamplesAggregateInput>;
  /** Return Users where all of the related UserSamplesConnections match this filter */
  samplesConnection_ALL?: InputMaybe<UserSamplesConnectionWhere>;
  /** Return Users where none of the related UserSamplesConnections match this filter */
  samplesConnection_NONE?: InputMaybe<UserSamplesConnectionWhere>;
  /** Return Users where one of the related UserSamplesConnections match this filter */
  samplesConnection_SINGLE?: InputMaybe<UserSamplesConnectionWhere>;
  /** Return Users where some of the related UserSamplesConnections match this filter */
  samplesConnection_SOME?: InputMaybe<UserSamplesConnectionWhere>;
  /** Return Users where all of the related Samples match this filter */
  samples_ALL?: InputMaybe<SampleWhere>;
  /** Return Users where none of the related Samples match this filter */
  samples_NONE?: InputMaybe<SampleWhere>;
  /** Return Users where one of the related Samples match this filter */
  samples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Users where some of the related Samples match this filter */
  samples_SOME?: InputMaybe<SampleWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GetPropagationByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPropagationByIdQuery = { __typename?: 'Query', propagations: Array<{ __typename?: 'Propagation', id: string, recipe: { __typename?: 'Recipe', id: string, name: string }, plates: Array<{ __typename?: 'Plate', id: string, recipe: { __typename?: 'Recipe', id: string, name: string }, plates: Array<{ __typename?: 'Plate', id: string, plates: Array<{ __typename?: 'Plate', id: string, plates: Array<{ __typename?: 'Plate', id: string }> }> }> }> }> };

export type GetRecordingById_QueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRecordingById_QueryQuery = { __typename?: 'Query', recordings: Array<(
    { __typename?: 'Recording' }
    & { ' $fragmentRefs'?: { 'RecordingOverview_RecordingFragmentFragment': RecordingOverview_RecordingFragmentFragment } }
  )> };

export type GetRecordingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecordingsQuery = (
  { __typename?: 'Query' }
  & { ' $fragmentRefs'?: { 'RecordingList_QueryFragmentFragment': RecordingList_QueryFragmentFragment } }
);

export type GetSampleById_QueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetSampleById_QueryQuery = { __typename?: 'Query', samples: Array<(
    { __typename?: 'Sample' }
    & { ' $fragmentRefs'?: { 'SampleOverview_SampleFragmentFragment': SampleOverview_SampleFragmentFragment } }
  )> };

export type RecordingList_QueryFragmentFragment = { __typename?: 'Query', recordings: Array<{ __typename?: 'Recording', id: string, name: string, description: string, createdAt: any, samples: Array<{ __typename?: 'Sample', id: string }> }> } & { ' $fragmentName'?: 'RecordingList_QueryFragmentFragment' };

export type RecordingDendrogram_RecordingFragmentFragment = { __typename?: 'Recording', samples: Array<{ __typename?: 'Sample', id: string, propagations: Array<{ __typename?: 'Propagation', id: string, plates: Array<{ __typename?: 'Plate', id: string }> }> }> } & { ' $fragmentName'?: 'RecordingDendrogram_RecordingFragmentFragment' };

export type RecordingOverview_RecordingFragmentFragment = (
  { __typename?: 'Recording', id: string, name: string, description: string, createdAt: any, updatedAt: any, samples: Array<{ __typename?: 'Sample', latitude: number, longitude: number }> }
  & { ' $fragmentRefs'?: { 'RecordingDendrogram_RecordingFragmentFragment': RecordingDendrogram_RecordingFragmentFragment;'SampleList_RecordingFragmentFragment': SampleList_RecordingFragmentFragment } }
) & { ' $fragmentName'?: 'RecordingOverview_RecordingFragmentFragment' };

export type SampleList_RecordingFragmentFragment = { __typename?: 'Recording', samples: Array<{ __typename?: 'Sample', id: string, description?: string | null, longitude: number, latitude: number, createdAt: any, propagations: Array<{ __typename?: 'Propagation', id: string }> }> } & { ' $fragmentName'?: 'SampleList_RecordingFragmentFragment' };

export type PropagationList_SampleFragmentFragment = { __typename?: 'Sample', propagations: Array<{ __typename?: 'Propagation', id: string, createdAt: any, plates: Array<{ __typename?: 'Plate', id: string }>, recipe: { __typename?: 'Recipe', id: string, name: string } }> } & { ' $fragmentName'?: 'PropagationList_SampleFragmentFragment' };

export type SampleOverview_SampleFragmentFragment = (
  { __typename?: 'Sample', id: string, description?: string | null, longitude: number, latitude: number }
  & { ' $fragmentRefs'?: { 'PropagationList_SampleFragmentFragment': PropagationList_SampleFragmentFragment } }
) & { ' $fragmentName'?: 'SampleOverview_SampleFragmentFragment' };

export type CreateRecordingMutationVariables = Exact<{
  input: Array<RecordingCreateInput> | RecordingCreateInput;
}>;


export type CreateRecordingMutation = { __typename?: 'Mutation', createRecordings: { __typename?: 'CreateRecordingsMutationResponse', recordings: Array<{ __typename?: 'Recording', id: string }> } };

export type CreateSampleMutationVariables = Exact<{
  input: Array<SampleCreateInput> | SampleCreateInput;
}>;


export type CreateSampleMutation = { __typename?: 'Mutation', createSamples: { __typename?: 'CreateSamplesMutationResponse', samples: Array<{ __typename?: 'Sample', id: string }> } };

export const RecordingList_QueryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordingList_QueryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recordings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<RecordingList_QueryFragmentFragment, unknown>;
export const RecordingDendrogram_RecordingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordingDendrogram_RecordingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recording"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"propagations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RecordingDendrogram_RecordingFragmentFragment, unknown>;
export const SampleList_RecordingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SampleList_RecordingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recording"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"propagations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SampleList_RecordingFragmentFragment, unknown>;
export const RecordingOverview_RecordingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordingOverview_RecordingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recording"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordingDendrogram_RecordingFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SampleList_RecordingFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordingDendrogram_RecordingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recording"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"propagations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SampleList_RecordingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recording"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"propagations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<RecordingOverview_RecordingFragmentFragment, unknown>;
export const PropagationList_SampleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropagationList_SampleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propagations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<PropagationList_SampleFragmentFragment, unknown>;
export const SampleOverview_SampleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SampleOverview_SampleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropagationList_SampleFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropagationList_SampleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propagations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SampleOverview_SampleFragmentFragment, unknown>;
export const GetPropagationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPropagationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propagations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPropagationByIdQuery, GetPropagationByIdQueryVariables>;
export const GetRecordingById_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecordingById_Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recordings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordingOverview_RecordingFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordingDendrogram_RecordingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recording"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"propagations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SampleList_RecordingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recording"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"propagations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordingOverview_RecordingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recording"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordingDendrogram_RecordingFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SampleList_RecordingFragment"}}]}}]} as unknown as DocumentNode<GetRecordingById_QueryQuery, GetRecordingById_QueryQueryVariables>;
export const GetRecordingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecordings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordingList_QueryFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordingList_QueryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recordings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetRecordingsQuery, GetRecordingsQueryVariables>;
export const GetSampleById_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSampleById_Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"samples"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SampleOverview_SampleFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropagationList_SampleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propagations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"plates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SampleOverview_SampleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropagationList_SampleFragment"}}]}}]} as unknown as DocumentNode<GetSampleById_QueryQuery, GetSampleById_QueryQueryVariables>;
export const CreateRecordingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRecording"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecordingCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecordings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recordings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRecordingMutation, CreateRecordingMutationVariables>;
export const CreateSampleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSample"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SampleCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSamples"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"samples"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSampleMutation, CreateSampleMutationVariables>;