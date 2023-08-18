export const SERVER_PROTOCOL = process.env.NEXT_PUBLIC_SERVER_PROTOCOL || 'https';

export const SERVER_HOST = process.env.NEXT_PUBLIC_VERCEL_URL
  ? process.env.NEXT_PUBLIC_VERCEL_URL
  : process.env.NEXT_PUBLIC_SERVER_URL;

export const SERVER_URL =
  `${ SERVER_PROTOCOL }://${ SERVER_HOST }/api/graphql`;
