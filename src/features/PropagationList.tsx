'use client';

import { DocumentType, graphql } from '@/graphql/generated/gql';
import { Button, Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { LuMicroscope } from 'react-icons/lu';


const PropagationList_PropagationFragment = graphql(/* GraphQL */ `
  fragment PropagationListItem_PropagationFragment on Propagation {
    id
    code
    createdAt
    plates {
      id
    }
    propagations {
      id
    }
    recipe {
      id
      name
    }
  }
`);

export type PropagationListProps = {
  propagations: DocumentType<typeof PropagationList_PropagationFragment>[]
}

export const PropagationList: React.FC<PropagationListProps> = ({
  propagations
}) => {
  const router = useRouter();

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Code</Table.HeadCell>
        <Table.HeadCell>Date Created</Table.HeadCell>
        <Table.HeadCell>Recipe</Table.HeadCell>
        <Table.HeadCell>Plate Count</Table.HeadCell>
        <Table.HeadCell>Propagation Count</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Actions
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {
          propagations.map(propagation => (
            <Table.Row key={ propagation.id } className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ propagation.code }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ propagation.createdAt }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ propagation.recipe.name }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ propagation.plates.length }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ propagation.propagations.length }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Button
                  color="green"
                  onClick={
                    () => router.push(`/propagations/${ propagation.id }`)
                  }>
                  <LuMicroscope className="mr-3 h-5 w-5"/>
                  <p>View</p>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};
