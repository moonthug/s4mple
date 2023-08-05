import CreateRecordingForm from '@/components/forms/CreateRecordingForm';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';


export const metadata: Metadata = {
  title: 'Recordings - Create',
  description: 'TEST',
};

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      <h3>Create</h3>
      <CreateRecordingForm/>
    </div>
  );
}
