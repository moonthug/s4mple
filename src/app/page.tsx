import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'TEST',
};

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
    </main>
  );
}
