'use client';

import Divider from '@/components/Divider';
import UpsertPropagationModal from '@/components/modal/UpsertPropagationModal';
import EntityTitleId from '@/components/text/EntityTitleId';
import PlateNetworkGraph from '@/features/PlateOverview/PlateNetworkGraph';
import { PlatePropagationList } from '@/features/PlateOverview/PlatePropagationList';
import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import { Button, Tabs } from 'flowbite-react';

import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import { LuFlaskConical } from 'react-icons/lu';
import { PiGraphFill } from 'react-icons/pi';


const PlateOverview_PlateFragment = graphql(/* GraphQL */ `
  fragment PlateOverview_PlateFragment on Plate {
    id
    code
    recipe {
      __typename
    }
    ...PlateNetworkGraph_PlateFragment
    ...PropagationList_PlateFragment
  }
`);

type PlateOverviewProps = {
  plateFragmentRef: FragmentType<typeof PlateOverview_PlateFragment>
}

export const PlateOverview: React.FC<PlateOverviewProps> = ({
  plateFragmentRef
}) => {
  const plate = useFragment(PlateOverview_PlateFragment, plateFragmentRef);

  const [isCreatePropagationModalOpen, setIsCreatePropagationModalOpen] = useState(false);

  return (
    <div>
      <UpsertPropagationModal
        isOpen={ isCreatePropagationModalOpen }
        parentId={ plate.id }
        parentType="plate"
        setIsOpen={ setIsCreatePropagationModalOpen }
      />

      <div className="flex gap-8">
        <div className="flex-grow">
          <EntityTitleId code={ plate.code } title="Plate"/>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Recipe</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ plate.recipe.__typename }</dd>
          </dl>
          <div className="flex gap-4">
            <Button
              gradientDuoTone="purpleToBlue"
              onClick={ () => setIsCreatePropagationModalOpen(true) }
              outline
            >
              <LuFlaskConical className="mr-3 h-5 w-5"/>
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
              <PlateNetworkGraph
                plateFragmentRef={ plate }
                width={ 600 }
                height={ 300 }
              />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>

      <Divider/>

      <PlatePropagationList plateFragmentRef={ plate }/>
    </div>
  );
};

export default PlateOverview;
