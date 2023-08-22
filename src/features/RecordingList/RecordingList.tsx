'use client';

import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { useMutation } from '@apollo/client';
import { Button, Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { LuBomb, LuMicroscope } from 'react-icons/lu';


const RecordingList_QueryFragment = graphql(/* GraphQL */ `
  fragment RecordingList_QueryFragment on Query {
    recordings {
      id
      code
      name
      description
      createdAt
      samples {
        id
      }
    }
  }
`);

const DeleteRecording_Mutation = graphql(/* GraphQL */ `
  mutation DeleteRecording_Mutation($id: ID!) {
    deleteRecordings(where: { id: $id }) {
      nodesDeleted
      relationshipsDeleted
    }
  }
`);

export type RecordingListProps = {
  queryRef: FragmentType<typeof RecordingList_QueryFragment>
}

export const RecordingList: React.FC<RecordingListProps> = ({ queryRef }) => {
  const query = useFragment(RecordingList_QueryFragment, queryRef);
  const [deleteRecording, { data, loading, error }] = useMutation(DeleteRecording_Mutation);

  const router = useRouter();

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Code</Table.HeadCell>
        <Table.HeadCell>Date Created</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
        <Table.HeadCell>Sample Count</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {
          query.recordings.map((recording) => (
            <Table.Row key={ recording.id } className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ recording.code }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ recording.createdAt }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ recording.name }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ recording.description }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ recording.samples.length }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Button.Group>
                  <Button
                    color="red"
                    onClick={
                      () => {
                        deleteRecording({ variables: { id: recording.id } });
                        toast.loading('Deleting Recording...');
                      }
                    }>
                    <LuBomb className="mr-3 h-5 w-5"/>
                    <p>Delete</p>
                  </Button>
                  <Button
                    color="green"
                    onClick={
                      () => {
                        router.push(`/recordings/${ recording.id }`);
                      }
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
