'use client';

import ID from '@/components/ID';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { Table } from 'flowbite-react';
import Link from 'next/link';


const PlateList_PropagationFragment = graphql(/* GraphQL */ `
  fragment PlateList_PropagationFragment on Propagation {
    id
    plates {
      id
      createdAt
      recipe {
        id
        name
      }
    }
  }
`);


export type PlateListProps = {
  propagationFragmentRef: FragmentType<typeof PlateList_PropagationFragment>
}

export const PlateList: React.FC<PlateListProps> = ({ propagationFragmentRef }) => {
  const query = useFragment(PlateList_PropagationFragment, propagationFragmentRef);

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Date Created</Table.HeadCell>
        <Table.HeadCell>Recipe</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            View
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {
          query.plates.map((plate) => (
            <Table.Row key={ plate.id } className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"><ID>{ plate.id }</ID></Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ plate.createdAt }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ plate.recipe.name }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Link href={ `/plate/${ plate.id }` }>View</Link>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};
