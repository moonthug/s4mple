'use client';

import { PropagationList } from '@/features/PropagationList';
import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';


export const PropagationList_PlateFragment = graphql(/* GraphQL */ `
  fragment PropagationList_PlateFragment on Plate {
    propagations {
      ...PropagationListItem_PropagationFragment
    }
  }
`);

export type PropagationListProps = {
  plateFragmentRef: FragmentType<typeof PropagationList_PlateFragment>
}

export const PlatePropagationList: React.FC<PropagationListProps> = ({
  plateFragmentRef
}) => {
  const query = useFragment(PropagationList_PlateFragment, plateFragmentRef);

  // @TODO Fix as any
  return <PropagationList
    propagations={ query.propagations as any }
  />;
};
