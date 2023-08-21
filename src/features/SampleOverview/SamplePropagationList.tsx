'use client';

import { PropagationList } from '@/features/PropagationList';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';


export const PropagationList_SampleFragment = graphql(/* GraphQL */ `
  fragment PropagationList_SampleFragment on Sample {
    propagations {
      ...PropagationListItem_PropagationFragment
    }
  }
`);

export type PropagationListProps = {
  sampleFragmentRef: FragmentType<typeof PropagationList_SampleFragment>
}

export const SamplePropagationList: React.FC<PropagationListProps> = ({
  sampleFragmentRef
}) => {
  const query = useFragment(PropagationList_SampleFragment, sampleFragmentRef);

  // @TODO Fix as any
  return <PropagationList
    propagations={ query.propagations as any }
  />;
};
