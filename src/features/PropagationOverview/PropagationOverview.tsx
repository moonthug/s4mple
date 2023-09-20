'use client';

import Divider from '@/components/Divider';
import UpsertPropagationModal from '@/components/modal/UpsertPropagationModal';
import EntityTitleId from '@/components/text/EntityTitleId';
import PropagationNetworkGraph from '@/features/PropagationOverview/PropagationNetworkGraph';
import { PropagationPropagationList } from '@/features/PropagationOverview/PropagationPropagationList';
import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import { useMutation } from '@apollo/client';
import { Button, Dropdown, Tabs } from 'flowbite-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LuFlaskConical, LuPipette } from 'react-icons/lu';
import { PiGraphFill } from 'react-icons/pi';
import { PlateList } from './PlateList';


const PropagationOverview_PropagationFragment = graphql(/* GraphQL */ `
  fragment PropagationOverview_PropagationFragment on Propagation {
    id
    code
    recipe {
      name
    }
    ...PlateList_PropagationFragment
    ...PropagationNetworkGraph_PropagationFragment
    ...PropagationList_PropagationFragment
    ...UpsertPropagationModal_PropagationFragment
  }
`);

const DeletePropagation_Mutation = graphql(/* GraphQL */ `
  mutation DeletePropagation_Mutation($id: ID!) {
    deletePropagations(where: { id: $id }) {
      nodesDeleted
      relationshipsDeleted
    }
  }
`);

enum UpsertPropagationModalState {
  InsertPropagation,
  UpdatePropagation,
  Closed
}

type PropagationOverviewProps = {
  propagationFragmentRef: FragmentType<typeof PropagationOverview_PropagationFragment>
}

export const PropagationOverview: React.FC<PropagationOverviewProps> = ({
  propagationFragmentRef
}) => {
  const propagation = useFragment(PropagationOverview_PropagationFragment, propagationFragmentRef);
  const [deletePropagation, { data, loading, error }] = useMutation(DeletePropagation_Mutation);

  const [upsertPropagationModalState, setUpsertPropagationModalState] = useState<UpsertPropagationModalState>(UpsertPropagationModalState.Closed);

  return (
    <div>
      <UpsertPropagationModal
        isOpen={ upsertPropagationModalState !== UpsertPropagationModalState.Closed }
        parentId={ propagation.id }
        parentType="propagation"
        propagationFragmentRef={
          upsertPropagationModalState === UpsertPropagationModalState.UpdatePropagation ? propagation : undefined
        }
        setIsOpen={ () => {
          setUpsertPropagationModalState(UpsertPropagationModalState.Closed);
        } }
      />

      <div className="flex gap-8">
        <div className="flex-grow">
          <EntityTitleId code={ propagation.code } title="Propagation"/>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Recipe</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{ propagation.recipe.name }</dd>
          </dl>
          <div className="flex gap-4">
            <Button
              gradientDuoTone="pinkToOrange"
              onClick={ () => setIsUpsertPropagationModalOpen(true) }
              outline
            >
              <LuPipette className="mr-3 h-5 w-5"/>
              Create Plate
            </Button>
            <Button
              gradientDuoTone="purpleToBlue"
              onClick={ () => setUpsertPropagationModalState(UpsertPropagationModalState.InsertPropagation) }
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
                  setUpsertPropagationModalState(UpsertPropagationModalState.UpdatePropagation);
                } }>Edit</Dropdown.Item>
              <Dropdown.Item
                onClick={ () => {
                  deletePropagation({ variables: { id: propagation.id } });
                  toast.loading('Deleting Propagation...');
                } }>Delete</Dropdown.Item>
            </Dropdown>
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
              <PropagationNetworkGraph
                propagationFragmentRef={ propagation }
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
