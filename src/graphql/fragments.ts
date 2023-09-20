import { graphql } from '@/graphql/generated/gql';


export const PropagationFields_PropagationFragment = graphql(`
  fragment PropagationFields_PropagationFragment on Propagation {
    __typename
    id
    code
  }
`);

export const PlateFields_PlateFragment = graphql(`
  fragment PlateFields_PlateFragment on Plate {
    __typename
    id
    code
  }
`);
