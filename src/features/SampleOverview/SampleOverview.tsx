'use client';

import Divider from '@/components/Divider';
import EntityTitleId from '@/components/text/EntityTitleId';
import CreatePropagationModal from '@/features/CreatePropagationModal';
import SampleMap from '@/features/RecordingOverview/SampleMap';
import { SamplePropagationList } from '@/features/SampleOverview/SamplePropagationList';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { objectHasGeolocation } from '@/lib/utils/geo';
import { Button, Tabs } from 'flowbite-react';

import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import { LuBeer } from 'react-icons/lu';
import { PiGraphFill, PiMapPinBold } from 'react-icons/pi';
import SampleDendrogram from './SampleDendrogram';


const SampleOverview_SampleFragment = graphql(/* GraphQL */ `
  fragment SampleOverview_SampleFragment on Sample {
    id
    code
    description
    longitude
    latitude
    ...SampleMap_SampleFragment
    ...PropagationList_SampleFragment
  }
`);

type SampleOverviewProps = {
  sampleFragmentRef: FragmentType<typeof SampleOverview_SampleFragment>
}

export const SampleOverview: React.FC<SampleOverviewProps> = ({
  sampleFragmentRef
}) => {
  const sample = useFragment(SampleOverview_SampleFragment, sampleFragmentRef);

  const [isCreatePropagationModalOpen, setIsCreatePropagationModalOpen] = useState(false);

  return (
    <div>
      <CreatePropagationModal
        isOpen={ isCreatePropagationModalOpen }
        parentId={ sample.id }
        parentType="sample"
        setIsOpen={ setIsCreatePropagationModalOpen }
      />

      <div className="flex gap-8">
        <div className="flex-grow">
          <EntityTitleId code={ sample.code } title="Sample"/>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ sample.description }</dd>
          </dl>
          { objectHasGeolocation(sample) &&
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">LonLat</dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ `${ sample.longitude }, ${ sample.latitude }` }</dd>
            </dl>
          }
          <div className="flex gap-4">
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
            { objectHasGeolocation(sample) &&
              <Tabs.Item
                active
                icon={ PiMapPinBold }
                title="Map"
              >
                <SampleMap sampleFragmentRef={ sample }/>
              </Tabs.Item>
            }
            <Tabs.Item
              active
              icon={ PiGraphFill }
              title="Nodes"
            >
              <SampleDendrogram
                sample={ sample }
                width={ 600 }
                height={ 300 }
              />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>

      <Divider/>

      <SamplePropagationList sampleFragmentRef={ sample }/>
    </div>
  );
};

export default SampleOverview;
