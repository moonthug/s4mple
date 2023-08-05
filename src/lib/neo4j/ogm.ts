import { OGM } from '@neo4j/graphql-ogm';

import { driver } from '@/lib/neo4j';
import { typeDefs } from '@/lib/typeDefs';

export const ogm = new OGM({ typeDefs, driver });

(async () => {
  await ogm.init();
})();
