import { driver } from '@/lib/neo4j';
import { typeDefs } from '@/lib/typeDefs';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { createYoga } from 'graphql-yoga';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';


const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver
});

const { handleRequest } = createYoga<{
  req: NextApiRequest
  res: NextApiResponse
},
  {
    session: Session | null
  }
>({
  schema: await neoSchema.getSchema(),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
