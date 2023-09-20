'use client';

import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import { Button, Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { LuMicroscope } from 'react-icons/lu';


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

export type RecordingListProps = {
  queryRef: FragmentType<typeof RecordingList_QueryFragment>
}

export const RecordingList: React.FC<RecordingListProps> = ({ queryRef }) => {
  const query = useFragment(RecordingList_QueryFragment, queryRef);

  const router = useRouter();

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Code</Table.HeadCell>
        <Table.HeadCell className="hidden md:table-cell">Date Created</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell className="hidden md:table-cell">Description</Table.HeadCell>
        <Table.HeadCell className="hidden md:table-cell">Sample Count</Table.HeadCell>
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
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">{ recording.code }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 hidden md:table-cell">{ recording.createdAt }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">{ recording.name }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 hidden md:table-cell">{ recording.description }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 hidden md:table-cell">{ recording.samples.length }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                <Button
                  color="green"
                  onClick={
                    () => {
                      router.push(`/recordings/${ recording.id }`);
                    }
                  }>
                  <LuMicroscope className="mr-0 h-5 w-5 md:mr-3"/>
                  <p className="hidden md:block">View</p>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};
