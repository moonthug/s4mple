import FAB from '@/components/FAB';
import { RecordingList } from '@/components/RecordingList/RecordingList';
import { graphql } from '@/graphql/gql';

import { getClient } from '@/lib/apollo';
import { Metadata } from 'next';
import Link from 'next/link';
import { MdExposurePlus1 } from 'react-icons/md';


export const metadata: Metadata = {
  title: 'Recordings',
  description: 'TEST',
};

const GetRecordings_Query = graphql(`
  query GetRecordings {
    ...RecordingList_QueryFragment
  }
`);

export default async function Recordings() {
  const { loading, data } = await getClient().query({ query: GetRecordings_Query });

  return (
    <main>
      <RecordingList queryRef={ data }/>
      
      <Link href="/recordings/new">
        <FAB
          icon={
            () => <MdExposurePlus1
              className="inline"
              color="#fff"
              size={ 24 }
            />
          }/>
      </Link>
    </main>
  );
}
