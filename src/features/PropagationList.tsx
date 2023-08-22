'use client';

import { DocumentType, graphql } from '@/graphql/gql';
import { useMutation } from '@apollo/client';
import { Button, Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { LuBomb, LuMicroscope } from 'react-icons/lu';


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

const DeletePropagation_Mutation = graphql(/* GraphQL */ `
  mutation DeletePropagation_Mutation($id: ID!) {
    deletePropagations(where: { id: $id }) {
      nodesDeleted
      relationshipsDeleted
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

  const [deletePropagation, { data, loading, error }] = useMutation(DeletePropagation_Mutation);

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
                <Button.Group>
                  <Button
                    color="red"
                    onClick={
                      () => {
                        deletePropagation({ variables: { id: propagation.id } })
                          .catch((e => toast.error('Couldn\'t delete propagation!')));
                        toast.loading('Deleting Propagation...');
                      }
                    }>
                    <LuBomb className="mr-3 h-5 w-5"/>
                    <p>Delete</p>
                  </Button>
                  <Button
                    color="green"
                    onClick={
                      () => router.push(`/propagations/${ propagation.id }`)
                    }>
                    <LuMicroscope className="mr-3 h-5 w-5"/>
                    <p>View</p>
                  </Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};
