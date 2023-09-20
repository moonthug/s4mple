'use client';

import CreateSampleForm, { CreateSampleFormData } from '@/components/forms/CreateSampleForm';
import { graphql } from '@/graphql/generated/gql';
import { createConfetti } from '@/lib/confetti';
import { useMutation } from '@apollo/client';
import { Modal } from 'flowbite-react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { LuTestTube2 } from 'react-icons/lu';


const CreateSample_Mutation = graphql(`
  mutation CreateSample($input: [SampleCreateInput!]!) {
    createSamples(input: $input) {
      samples {
        id
      }
    }
  }
`);

type CreateModalProps = {
  isOpen: boolean
  recordingId: string;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateSampleModal: React.FC<CreateModalProps> = ({
  setIsOpen,
  recordingId,
  isOpen = false
}) => {
  const [createSample, { data, loading, error }] = useMutation(CreateSample_Mutation);

  const {
    formState: { errors }
  } = useForm<CreateSampleFormData>({
    defaultValues: {
      latitude: 0,
      longitude: 0
    }
  });

  const onSubmit: SubmitHandler<CreateSampleFormData> = data => {
    createSample({
      variables: {
        input: {
          code: data.code,
          description: data.description,
          type: data.type,
          longitude: data.longitude,
          latitude: data.latitude,
          recording: {
            connect: {
              where: {
                node: {
                  id: recordingId
                }
              }
            }
          }
        }
      }
    })
      .then(({ data }) => {
        if (!data) throw new Error('Couldnt create sample');

        toast('Sample created!');
        setIsOpen(false);
        createConfetti();
      })
      .catch(e => {
        toast.error(e.toString());
      });
  };

  return (
    <Modal show={ isOpen } onClose={ () => setIsOpen(false) }>
      <Modal.Header>
        <LuTestTube2 className="inline mr-2 h-10 w-10"/>
        New Sample
      </Modal.Header>
      <Modal.Body>
        <CreateSampleForm
          onSubmit={ onSubmit }
        />
      </Modal.Body>
    </Modal>
  );
};

export default CreateSampleModal;
