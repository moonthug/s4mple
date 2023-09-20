'use client';

import { getNextCodeAction } from '@/actions/getNextCode';
import RecipeSelect from '@/components/input/RecipeSelect';
import { FragmentType, useFragment } from '@/graphql/generated';
import { graphql } from '@/graphql/generated/gql';
import { RecipeType } from '@/graphql/generated/graphql';
import { createConfetti } from '@/lib/confetti';
import { useMutation } from '@apollo/client';
import { Button, Label, Modal, Tabs, TabsRef, Textarea } from 'flowbite-react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import print from 'print-js';
import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { LuFlaskConical, LuPrinter, LuSave, LuText, LuXCircle } from 'react-icons/lu';
import { PiBarcode } from 'react-icons/pi';


const Barcode = dynamic(
  () => import('@/components/Barcode'),
  { ssr: false }
);

type ParentType = 'sample' | 'plate' | 'propagation'

function createAdditionalRelationshipForParentType(parentType: ParentType, parentId: string) {
  if (parentType === 'sample') {
    return { sample: { connect: { where: { node: { id: parentId } } } } };
  }

  if (parentType === 'plate') {
    return { plate: { connect: { where: { node: { id: parentId } } } } };
  }

  return { propagation: { connect: { where: { node: { id: parentId } } } } };
}

const CreatePropagation_Mutation = graphql(`
  mutation CreatePropagation($input: [PropagationCreateInput!]!) {
    createPropagations(input: $input) {
      propagations {
        ...UpsertPropagationModal_PropagationFragment
      }
    }
  }
`);

export const UpsertPropagationModal_PropagationFragment = graphql(/* GraphQL */ `
  fragment UpsertPropagationModal_PropagationFragment on Propagation {
    id
    code
    description
    recipe {
      id
    }
  }
`);

export type UpsertPropagationFormData = {
  description?: string | null;
  recipeId: string;
};


type CreateModalProps = {
  isOpen: boolean;
  parentType: ParentType;
  parentId: string;
  propagationFragmentRef?: FragmentType<typeof UpsertPropagationModal_PropagationFragment>;
  setIsOpen: (isOpen: boolean) => void;
}

const UpsertPropagationModal: React.FC<CreateModalProps> = ({
  setIsOpen,
  parentType,
  parentId,
  propagationFragmentRef,
  isOpen = false
}) => {
  const router = useRouter();

  const propagation = useFragment(UpsertPropagationModal_PropagationFragment, propagationFragmentRef);
  const [createPropagation, { data, loading, error }] = useMutation(CreatePropagation_Mutation);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpsertPropagationFormData>({
    defaultValues: {
      description: propagation?.description,
      recipeId: propagation?.recipe.id
    }
  });

  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);

  //
  // @TODO Move to server actions
  const onSubmit: SubmitHandler<UpsertPropagationFormData> = async (data) => {
    const additionalRelationship = createAdditionalRelationshipForParentType(parentType, parentId);

    createPropagation({
      variables: {
        input: {
          code: await getNextCodeAction('propagation'),
          recipe: {
            connect: {
              where: {
                node: {
                  id: data.recipeId
                }
              }
            }
          },
          ...additionalRelationship
        }
      }
    })
      .then(({ data }) => {
        if (!data) throw new Error('Couldnt create propagation');

        toast('Propagation created!');
        createConfetti();

        setActiveTab(1);
      })
      .catch(e => {
        toast.error(e.toString());
      });
  };

  return (
    <Modal show={ isOpen } onClose={ () => setIsOpen(false) }>
      <Modal.Header>
        <LuFlaskConical className="inline mr-2 h-10 w-10"/>
        { propagationFragmentRef ? 'Update Propagation' : 'New Propagation' }
      </Modal.Header>
      <Modal.Body>
        <form
          className="flex flex-col gap-4"
          onSubmit={ handleSubmit(onSubmit) }
        >
          <Tabs.Group
            style="fullWidth"
            ref={ tabsRef }
            onActiveTabChange={ (tab) => setActiveTab(tab) }
          >
            <Tabs.Item
              active
              icon={ LuText }
              title="Details"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="recipe" value="Recipe"/>
                </div>
                <RecipeSelect register={ register } type={ RecipeType.Wort }/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description"/>
                </div>
                <Textarea
                  id="description"
                  { ...register('description') }
                />
              </div>
            </Tabs.Item>
            <Tabs.Item
              icon={ PiBarcode }
              title="Meta"
            >
              { propagation?.code &&
                <Barcode isLoading={ false } value={ propagation.code }/>
              }
              <Button
                color="gray"
                onClick={ () => {
                  print('barcode', 'html');
                } }
              >
                <LuPrinter className="inline mr-3 h-5 w-5"/>
                Print
              </Button>
            </Tabs.Item>
          </Tabs.Group>

          <div className="flex gap-4 justify-end">
            <Button
              color="gray" onClick={ () => setIsOpen(false) }
            >
              <LuXCircle className="inline mr-3 h-5 w-5"/>
              Close
            </Button>
            <Button
              type="submit"
              gradientDuoTone="greenToBlue"
            >
              <LuSave className="inline mr-3 h-5 w-5"/>
              Save
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UpsertPropagationModal;
