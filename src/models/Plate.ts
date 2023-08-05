import { ogm } from '@/lib/neo4j';
import { Recipe } from '@/models/Recipe';


export type Plate = {
  id: string;
  name: string;
  description: string;

  createdAt: string;
  updatedAt: string;

  recipe: Recipe;
  plates: Plate[];
}

export const RecipeModel = ogm.model('Recipe');
