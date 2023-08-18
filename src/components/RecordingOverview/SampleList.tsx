'use client';

import ID from '@/components/ID';
import { FragmentType, useFragment } from '@/graphql/fragment-masking';
import { graphql } from '@/graphql/gql';
import { Table } from 'flowbite-react';
import Link from 'next/link';


const SampleList_RecordingFragment = graphql(/* GraphQL */ `
  fragment SampleList_RecordingFragment on Recording {
    samples {
      id
      description
      longitude
      latitude
      createdAt
      propagations {
        id
      }
    }
  }
`);

export type SampleListProps = {
  recordingFragmentRef: FragmentType<typeof SampleList_RecordingFragment>
}

export const SampleList: React.FC<SampleListProps> = ({ recordingFragmentRef }) => {
  const query = useFragment(SampleList_RecordingFragment, recordingFragmentRef);

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Date Created</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
        <Table.HeadCell>Geolocation</Table.HeadCell>
        <Table.HeadCell>Propagation Count</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            View
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {
          query.samples.map((sample) => (
            <Table.Row key={ sample.id } className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"><ID>{ sample.id }</ID></Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ sample.createdAt }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ sample.description }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ sample.longitude }, { sample.latitude }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ sample.propagations.length }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Link href={ `/samples/${ sample.id }` }>View</Link>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};
