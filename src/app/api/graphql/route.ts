import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { IMAGE_BUCKET } from '@/constants/s3';
import { getNextCodeAndIncrement } from '@/lib/code';
import { driver } from '@/lib/neo4j';
import { upload } from '@/lib/s3';
import { typeDefs } from '@/lib/typeDefs';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { Neo4jGraphQLCallback } from '@neo4j/graphql/dist/types';
import { createYoga } from 'graphql-yoga';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';


const codeCallback: Neo4jGraphQLCallback = async (_parent, _args, context) => {
  console.log('RUN!', context);
  // const session = await getServerSession(authOptions);
  const code = await getNextCodeAndIncrement((context.session as Session).user.id, 'Recording');
  return code;
};

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  features: {
    authorization: {
      key: process.env.NEXTAUTH_SECRET,
      globalAuthentication: true,
    },
    populatedBy: {
      callbacks: {
        code: codeCallback
      }
    }
  },
  resolvers: {
    Mutation: {
      upload: async (_source, args, context) => {
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
  schema: await neoSchema.getSchema(),
  graphqlEndpoint: '/api/graphql',
  context: async function createContext(ctx) {
    const session = await getServerSession(authOptions);

    if (!session) {
      return;
    }

    return { session };
  },
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
