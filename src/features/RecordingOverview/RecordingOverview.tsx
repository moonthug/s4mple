'use client';

import Divider from '@/components/Divider';
import EntityTitleId from '@/components/text/EntityTitleId';
import RecordingNetworkGraph from '@/features/RecordingOverview/RecordingNetworkGraph';
import RecordingSampleMap from '@/features/RecordingOverview/RecordingSampleMap';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { Button, Tabs } from 'flowbite-react';
import React, { useState } from 'react';
import { LuTestTube2 } from 'react-icons/lu';
import { PiGraphFill, PiMapPinBold } from 'react-icons/pi';
import { CircleLayer } from 'react-map-gl';
import CreateSampleModal from './CreateSampleModal';
import { SampleList } from './SampleList';


const RecordingOverview_RecordingFragment = graphql(/* GraphQL */ `
  fragment RecordingOverview_RecordingFragment on Recording {
    id
    name
    description
    createdAt
    updatedAt
    ...RecordingSampleMap_RecordingFragment
    ...RecordingNetworkGraph_RecordingFragment
    ...SampleList_RecordingFragment
  }
`);

export const sampleLayer: CircleLayer = {
  id: 'sample-position',
  source: 'samples',
  type: 'circle',
  paint: {
    'circle-color': '#00ccff',
    'circle-radius': 5
  }
};

type RecordingProps = {
  recordingFragmentRef: FragmentType<typeof RecordingOverview_RecordingFragment>
}

export const RecordingOverview: React.FC<RecordingProps> = ({
  recordingFragmentRef
}) => {
  const recording = useFragment(RecordingOverview_RecordingFragment, recordingFragmentRef);

  const [isCreateSampleModalOpen, setIsCreateSampleModalOpen] = useState(false);

  return (
    <div>

      <CreateSampleModal
        isOpen={ isCreateSampleModalOpen }
        recordingId={ recording.id }
        setIsOpen={ setIsCreateSampleModalOpen }
      />

      <div className="flex gap-8">
        <div className="flex-grow">
          <EntityTitleId id={ recording.id } title={ recording.name }/>

          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ recording.description } fdsa fads fdsaf dsafsdafsdafdsafdsafsadfasdfasdfsdadfas</dd>
          </dl>

          <Button
            gradientDuoTone="greenToBlue"
            outline
            onClick={ () => setIsCreateSampleModalOpen(true) }
          >
            <LuTestTube2 className="mr-3 h-5 w-5"/>
            Create Sample
          </Button>

        </div>

        <div className="flex-none">
          <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
          >
            <Tabs.Item
              active
              icon={ PiMapPinBold }
              title="Map"
            >
              <RecordingSampleMap recordingFragmentRef={ recording }/>
            </Tabs.Item>
            <Tabs.Item
              active
              icon={ PiGraphFill }
              title="Nodes"
            >
              <RecordingNetworkGraph
                recordingFragmentRef={ recording }
                width={ 600 }
                height={ 300 }
              />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>

      <Divider/>

      <SampleList recordingFragmentRef={ recording }/>
    </div>
  );
};

export default RecordingOverview;
