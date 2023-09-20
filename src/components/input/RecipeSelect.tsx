import { graphql } from '@/graphql/generated';
import { RecipeType } from '@/graphql/generated/graphql';
import { useQuery } from '@apollo/client';
import { Select } from 'flowbite-react';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';


const GetRecipes_Query = graphql(`
  query GetRecipes($type: RecipeType) {
    recipes(where: { type: $type }) {
      id
      name
    }
  }
`);

type FormWithRecipeId = {
  recipeId: string;
}

type RecipeSelectProps = {
  register: UseFormRegister<FormWithRecipeId>
  type: RecipeType
}

const RecipeSelect: React.FC<RecipeSelectProps> = ({
  register,
  type
}) => {
  const { loading, error, data } = useQuery(GetRecipes_Query, { variables: { type } });

  return (
    <Select
      id="recipe"
      required
      { ...register('recipeId') }
    >
      <option>Select a Recipe...</option>
      { data?.recipes.map(recipe => (
        <option key={ recipe.id } value={ recipe.id }>{ recipe.name }</option>))
      }
    </Select>
  );
};

export default RecipeSelect;
