'use client';

import ID from '@/components/ID';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { Table } from 'flowbite-react';
import Link from 'next/link';


const PropagationList_SampleFragment = graphql(/* GraphQL */ `
  fragment PropagationList_SampleFragment on Sample {
    propagations {
      id
      createdAt
      plates {
        id
      }
      recipe {
        id
        name
      }
    }
  }
`);

export type PropagationListProps = {
  sampleFragmentRef: FragmentType<typeof PropagationList_SampleFragment>
}

export const PropagationList: React.FC<PropagationListProps> = ({ sampleFragmentRef }) => {
  const query = useFragment(PropagationList_SampleFragment, sampleFragmentRef);

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Date Created</Table.HeadCell>
        <Table.HeadCell>Recipe</Table.HeadCell>
        <Table.HeadCell>Plate Count</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            View
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {
          query.propagations.map((propagation) => (
            <Table.Row key={ propagation.id } className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"><ID>{ propagation.id }</ID></Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ propagation.createdAt }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ propagation.recipe.name }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ propagation.plates.length }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Link href={ `/propagations/${ propagation.id }` }>View</Link>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};
