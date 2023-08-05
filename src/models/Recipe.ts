import { ogm } from '@/lib/neo4j';


export type Recipe = {
  id: string;
  name: string;
  description: string;

  createdAt: string;
  updatedAt: string;
}

export const RecipeModel = ogm.model('Recipe');
