'use client';

import { gql, useMutation } from '@apollo/client';
import { Button, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';


const CreateSample_Mutation = gql`
  mutation CreateSample($input: [SampleCreateInput!]!) {
    createSamples(input: $input) {
      samples {
        id
      }
    }
  }
`;

const CreateSampleForm: React.FC = () => {
  const [createSample, { data, loading, error }] = useMutation(CreateSample_Mutation);

  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={ (e) => {
        e.preventDefault();
        debugger;
        createSample({
          variables: {
            input: {
              name: (e.currentTarget.name as any as { value: string }).value,
              description: e.currentTarget.description.value
            }
          }
        })
          .then(({ data }) => {
            const { id } = data.createSamples.samples[0];
            router.push(`/samples/${ id }`);
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
          placeholder="My new yeast sample"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="description"
            value="My sample description"
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

export default CreateSampleForm;
