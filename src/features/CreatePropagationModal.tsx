'use client';

import CreatePropagationForm, { CreatePropagationFormData } from '@/components/forms/CreatePropagationForm';
import { graphql } from '@/graphql/gql';
import { createConfetti } from '@/lib/confetti';
import { useMutation } from '@apollo/client';
import { Modal } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { LuBeer } from 'react-icons/lu';


const CreatePropagation_Mutation = graphql(`
  mutation CreatePropagation($input: [PropagationCreateInput!]!) {
    createPropagations(input: $input) {
      propagations {
        id
      }
    }
  }
`);

type ParentType = 'sample' | 'plate' | 'propagation'

function createAdditionalRelationshipForParentType(parentType: ParentType, parentId: string) {
  if (parentType === 'sample') {
    return { plate: { connect: { where: { node: { id: parentId } } } } };
  }

  if (parentType === 'plate') {
    return { sample: { connect: { where: { node: { id: parentId } } } } };
  }

  return { propagation: { connect: { where: { node: { id: parentId } } } } };
}

type CreateModalProps = {
  isOpen: boolean;
  parentType: ParentType;
  parentId: string;
  setIsOpen: (isOpen: boolean) => void;
}

const CreatePropagationModal: React.FC<CreateModalProps> = ({
  setIsOpen,
  parentType,
  parentId,
  isOpen = false
}) => {
  const router = useRouter();

  const [createPropagation, { data, loading, error }] = useMutation(CreatePropagation_Mutation);

  const {
    formState: { errors }
  } = useForm<CreatePropagationFormData>();

  //
  // @TODO Move to server actions
  const onSubmit: SubmitHandler<CreatePropagationFormData> = data => {
    const additionalRelationship = createAdditionalRelationshipForParentType(parentType, parentId);

    createPropagation({
      variables: {
        input: {
          code: data.code,
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
        setIsOpen(false);
        createConfetti();
        router.refresh();
      })
      .catch(e => {
        toast.error(e.toString());
      });
  };

  return (
    <Modal show={ isOpen } onClose={ () => setIsOpen(false) }>
      <Modal.Header>
        <LuBeer className="inline mr-2 h-10 w-10"/>
        New Propagation
      </Modal.Header>
      <Modal.Body>
        <CreatePropagationForm
          onSubmit={ onSubmit }
        />
      </Modal.Body>
    </Modal>
  );
};

export default CreatePropagationModal;
