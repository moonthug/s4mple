import CreateRecordingForm from '@/components/forms/CreateRecordingForm';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Recordings - Create',
  description: 'TEST',
};

export default async function Home() {
  return (
    <div>
      <h3>Create</h3>
      <CreateRecordingForm/>
    </div>
  );
}
