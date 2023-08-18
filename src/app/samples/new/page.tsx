import CreateSampleForm from '@/components/forms/CreateSampleForm';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Samples - Create',
  description: 'TEST',
};

export default async function Home() {
  return (
    <div>
      <h3>Create</h3>
      <CreateSampleForm/>
    </div>
  );
}
