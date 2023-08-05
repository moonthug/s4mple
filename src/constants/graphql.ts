export const SERVER_PROTOCOL = process.env.SERVER_PROTOCOL || 'https';

export const SERVER_URL =
  `${ SERVER_PROTOCOL }://${ process.env.VERCEL_URL || process.env.SERVER_URL }/api/graphql`;
