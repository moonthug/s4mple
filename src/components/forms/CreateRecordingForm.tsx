'use client';

import { graphql } from '@/graphql/gql';
import { useMutation } from '@apollo/client';
import { Button, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';


const CreateRecording_Mutation = graphql(`
  mutation CreateRecording($input: [RecordingCreateInput!]!) {
    createRecordings(input: $input) {
      recordings {
        id
      }
    }
  }
`);

const CreateRecordingForm: React.FC = () => {
  const [createRecording, { data, loading, error }] = useMutation(CreateRecording_Mutation);

  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={ (e) => {
        e.preventDefault();
        debugger;
        createRecording({
          variables: {
            input: {
              name: (e.currentTarget.name as any as { value: string }).value,
              description: e.currentTarget.description.value
            }
          }
        })
          .then(({ data }) => {
            if (data) {
              const { id } = data.createRecordings.recordings[0];
              router.push(`/recordings/${ id }`);
            }
          })
          .catch(e => {
            debugger;
            toast.error(e.toString());
          });
      } }
    >
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Name"
          />
        </div>
        <TextInput
          id="name"
          placeholder="My new yeast recording"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="description"
            value="My recording description"
          />
        </div>
        <TextInput
          id="description"
          required
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreateRecordingForm;
