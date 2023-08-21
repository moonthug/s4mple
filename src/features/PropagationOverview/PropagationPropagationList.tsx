'use client';

import { PropagationList } from '@/features/PropagationList';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';


export const PropagationList_PropagationFragment = graphql(/* GraphQL */ `
  fragment PropagationList_PropagationFragment on Propagation {
    propagations {
      ...PropagationListItem_PropagationFragment
    }
  }
`);

export type PropagationListProps = {
  propagationFragmentRef: FragmentType<typeof PropagationList_PropagationFragment>
}

export const PropagationPropagationList: React.FC<PropagationListProps> = ({
  propagationFragmentRef
}) => {
  const query = useFragment(PropagationList_PropagationFragment, propagationFragmentRef);

  // @TODO Fix as any
  return <PropagationList
    propagations={ query.propagations as any }
  />;
};
