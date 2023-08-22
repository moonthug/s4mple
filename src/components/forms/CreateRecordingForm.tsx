'use client';

import { getNextCodeAction } from '@/actions/getNextCode';
import { graphql } from '@/graphql/gql';
import { useMutation } from '@apollo/client';
import { Button, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
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
  const [code, setCode] = useState('');

  const router = useRouter();

  useEffect(() => {
    getNextCodeAction('recording').then(code => setCode(code));
  }, []);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={ (e) => {
        e.preventDefault();
        createRecording({
          variables: {
            input: {
              name: (e.currentTarget.name as any as { value: string }).value,
              description: e.currentTarget.description.value,
              code
            }
          }
        })
          .then(({ data }) => {
            if (data) {
              if (!data) throw new Error('Couldnt create sample');
              router.push(`/recordings/${ data?.createRecordings.recordings[0].id }`);
            }
          })
          .catch(e => {
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
          placeholder="My new Yeast recording"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="description"
            value="Description"
          />
        </div>
        <TextInput
          id="description"
          placeholder="My recording description..."
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="code"
            value="Code"
          />
        </div>
        <pre>{ code }</pre>
      </div>
      <Button
        type="submit"
        isProcessing={ loading }
        disabled={ loading }
      >Submit</Button>
    </form>
  );
};

export default CreateRecordingForm;
