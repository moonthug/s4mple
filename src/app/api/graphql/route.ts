import { IMAGE_BUCKET } from '@/constants/s3';
import { driver } from '@/lib/neo4j';
import { upload } from '@/lib/s3';
import { typeDefs } from '@/lib/typeDefs';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { createYoga } from 'graphql-yoga';
import { NextApiRequest, NextApiResponse } from 'next';
import * as process from 'process';


const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  features: {
    authorization: {
      key: process.env.NEXTAUTH_SECRET
    }
  },
  resolvers: {
    Mutation: {
      upload: async (source, args, context, info) => {
        const { file } = args;

        const filename = await upload(file, IMAGE_BUCKET);

        return { filename };
      }
    }
  },
});

const { handleRequest } = createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  // context: async (ctx) => {
  //   const session = await getSession(ctx);
  //   return {
  //     req: {
  //       headers: {
  //         authorization: session?.user.token
  //     }
  //   };
  // },
  schema: await neoSchema.getSchema(),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
