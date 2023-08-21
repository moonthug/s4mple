'use client';

import Barcode, { Renderer } from '@/components/Barcode';
import { graphql } from '@/graphql/gql';
import { useQuery } from '@apollo/client';
import { Button, Label, Select } from 'flowbite-react';
import print from 'print-js';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuPrinter, LuSave } from 'react-icons/lu';


const GetRecipes_Query = graphql(`
  query GetRecipes {
    recipes(where: { type: WORT }) {
      id
      name
    }
  }
`);

export type CreatePropagationFormData = {
  recipeId: string;
};

type CreatePropagationFormProps = {
  onSubmit: SubmitHandler<CreatePropagationFormData>;
}

const CreatePropagationForm: React.FC<CreatePropagationFormProps> = ({
  onSubmit,
}) => {
  const { loading, error, data } = useQuery(GetRecipes_Query);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreatePropagationFormData>();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="type" value="Type"/>
        </div>
        <Select
          required
          { ...register('recipeId') }
        >
          { data?.recipes.map(recipe => (
            <option key={ recipe.id } value={ recipe.id }>{ recipe.name }</option>))
          }
        </Select>
      </div>
      <div>
        <Barcode options={ { format: 'code128' } } renderer={ Renderer.canvas } value="P00001"/>
      </div>
      <div className="flex gap-4 justify-end">
        <Button
          color="gray"
          onClick={ () => {
            print('barcode', 'html');
          } }
        >
          <LuPrinter className="inline mr-3 h-5 w-5"/>
          Print
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
  );
};

export default CreatePropagationForm;
