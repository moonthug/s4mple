'use client';

import ID from '@/components/ID';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { Table } from 'flowbite-react';
import Link from 'next/link';


const RecordingList_QueryFragment = graphql(/* GraphQL */ `
  fragment RecordingList_QueryFragment on Query {
    recordings {
      id
      name
      description
      createdAt
      samples {
        id
      }
    }
  }
`);


export type RecordingListProps = {
  queryRef: FragmentType<typeof RecordingList_QueryFragment>
}

export const RecordingList: React.FC<RecordingListProps> = ({ queryRef }) => {
  const query = useFragment(RecordingList_QueryFragment, queryRef);

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
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
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"><ID>{ recording.id }</ID></Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ recording.createdAt }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ recording.name }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ recording.description }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ recording.samples.length }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Link href={ `/recordings/${ recording.id }` }>View</Link>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};
