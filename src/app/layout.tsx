import NavBar from '@/features/NavBar';
import { ApolloProvider } from '@/lib/apollo';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';


const title = 'Next.js Prisma Postgres Auth Starter';
const description =
  'This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.';

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
  themeColor: '#FFF',
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
    <body>
    <ApolloProvider>
      <NavBar session={ session }/>
      <Toaster/>
      <main className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        { children }
      </main>
      {/*<Suspense fallback="Loading...">*/ }
      {/*  /!* @ts-expect-error Async Server Component *!/*/ }
      {/*  <AuthStatus />*/ }
      {/*</Suspense>*/ }
    </ApolloProvider>
    </body>
    </html>
  );
}
