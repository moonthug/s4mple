'use client';

import Divider from '@/components/Divider';
import UpsertPropagationModal from '@/components/modal/UpsertPropagationModal';
import EntityTitleId from '@/components/text/EntityTitleId';
import SampleMap from '@/features/RecordingOverview/SampleMap';
import SampleNetworkGraph from '@/features/SampleOverview/SampleNetworkGraph';
import { SamplePropagationList } from '@/features/SampleOverview/SamplePropagationList';
import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import { objectHasGeolocation } from '@/lib/utils/geo';
import { useMutation } from '@apollo/client';
import { Button, Dropdown, Tabs } from 'flowbite-react';

import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LuFlaskConical } from 'react-icons/lu';
import { PiGraphFill, PiMapPinBold } from 'react-icons/pi';


const SampleOverview_SampleFragment = graphql(/* GraphQL */ `
  fragment SampleOverview_SampleFragment on Sample {
    id
    code
    description
    longitude
    latitude
    ...SampleMap_SampleFragment
    ...SampleNetworkGraph_SampleFragment
    ...PropagationList_SampleFragment
  }
`);

const DeleteSample_Mutation = graphql(/* GraphQL */ `
  mutation DeleteSample_Mutation($id: ID!) {
    deleteSamples(where: { id: $id }) {
      nodesDeleted
      relationshipsDeleted
    }
  }
`);

type SampleOverviewProps = {
  sampleFragmentRef: FragmentType<typeof SampleOverview_SampleFragment>
}

export const SampleOverview: React.FC<SampleOverviewProps> = ({
  sampleFragmentRef
}) => {
  const sample = useFragment(SampleOverview_SampleFragment, sampleFragmentRef);
  const [deleteSample, { data, loading, error }] = useMutation(DeleteSample_Mutation);

  const [isCreatePropagationModalOpen, setIsCreatePropagationModalOpen] = useState(false);

  return (
    <div>
      <UpsertPropagationModal
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
              <LuFlaskConical className="mr-3 h-5 w-5"/>
              Create Propagation
            </Button>
            <Dropdown
              inline
              className="bg-white inline-block"
              arrowIcon={ false }
              label={
                <div className="p-2 rounded-lg hover:bg-gray-100">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                  </svg>
                </div>
              }
            >
              <Dropdown.Item>Share</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item
                onClick={ () => {
                  deleteSample({ variables: { id: sample.id } });
                  toast.loading('Deleting Sample...');
                } }>Delete</Dropdown.Item>
            </Dropdown>
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
              <SampleNetworkGraph
                sampleFragmentRef={ sample }
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
