'use client';

import Divider from '@/components/Divider';
import EntityTitleId from '@/components/text/EntityTitleId';
import CreatePropagationModal from '@/features/CreatePropagationModal';
import { PropagationPropagationList } from '@/features/PropagationOverview/PropagationPropagationList';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { Button, Tabs } from 'flowbite-react';
import React, { useState } from 'react';
import { LuBeer, LuPipette } from 'react-icons/lu';
import { PiGraphFill } from 'react-icons/pi';
import { PlateList } from './PlateList';
import PropagationDendrogram from './PropagationDendrogram';


const PropagationOverview_PropagationFragment = graphql(/* GraphQL */ `
  fragment PropagationOverview_PropagationFragment on Propagation {
    id
    recipe {
      name
    }
    ...PlateList_PropagationFragment
    ...PropagationList_PropagationFragment
  }
`);

type PropagationOverviewProps = {
  propagationFragmentRef: FragmentType<typeof PropagationOverview_PropagationFragment>
}

export const PropagationOverview: React.FC<PropagationOverviewProps> = ({
  propagationFragmentRef
}) => {
  const propagation = useFragment(PropagationOverview_PropagationFragment, propagationFragmentRef);

  const [isCreatePropagationModalOpen, setIsCreatePropagationModalOpen] = useState(false);

  return (
    <div>
      <CreatePropagationModal
        isOpen={ isCreatePropagationModalOpen }
        parentId={ propagation.id }
        parentType="propagation"
        setIsOpen={ setIsCreatePropagationModalOpen }
      />

      <div className="flex gap-8">
        <div className="flex-grow">
          <EntityTitleId id={ propagation.id } title="Propagation"/>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Recipe</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ propagation.recipe.name }</dd>
          </dl>
          <div className="flex gap-4">
            <Button
              gradientDuoTone="pinkToOrange"
              onClick={ () => setIsCreatePropagationModalOpen(true) }
              outline
            >
              <LuPipette className="mr-3 h-5 w-5"/>
              Create Plate
            </Button>
            <Button
              gradientDuoTone="purpleToBlue"
              onClick={ () => setIsCreatePropagationModalOpen(true) }
              outline
            >
              <LuBeer className="mr-3 h-5 w-5"/>
              Create Propagation
            </Button>
          </div>
        </div>
        <div className="flex-none">
          <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
          >
            <Tabs.Item
              active
              icon={ PiGraphFill }
              title="Nodes"
            >
              <PropagationDendrogram
                propagation={ propagation }
                width={ 600 }
                height={ 300 }
              />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
      <Divider/>
      <h2>Plates</h2>
      <PlateList propagationFragmentRef={ propagation }/>

      <h2>Propagations</h2>
      <PropagationPropagationList propagationFragmentRef={ propagation }/>
    </div>
  );
};

export default PropagationOverview;
