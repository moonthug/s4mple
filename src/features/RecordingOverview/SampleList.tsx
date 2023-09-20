'use client';

import { FragmentType, useFragment } from '@/graphql/generated/fragment-masking';
import { graphql } from '@/graphql/generated/gql';
import { Button, Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { LuMicroscope } from 'react-icons/lu';


const SampleList_RecordingFragment = graphql(/* GraphQL */ `
  fragment SampleList_RecordingFragment on Recording {
    samples {
      id
      code
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
  const router = useRouter();

  const query = useFragment(SampleList_RecordingFragment, recordingFragmentRef);

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Code</Table.HeadCell>
        <Table.HeadCell>Date Created</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
        <Table.HeadCell>Geolocation</Table.HeadCell>
        <Table.HeadCell>Propagation Count</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Actions
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {
          query.samples.map((sample) => (
            <Table.Row key={ sample.id } className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ sample.code }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ sample.createdAt }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ sample.description }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ sample.longitude }, { sample.latitude }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ sample.propagations.length }</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Button
                  color="green"
                  onClick={
                    () => {
                      router.push(`/samples/${ sample.id }`);
                    }
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
