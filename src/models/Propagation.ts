import { ogm } from '@/lib/neo4j';
import { Plate } from '@/models/Plate';
import { Recipe } from '@/models/Recipe';


export type Propagation = {
  id: string;

  createdAt: string;
  updatedAt: string;

  plates: Plate[];
  recipe: Recipe;
}

export const PropagationModel = ogm.model('Propagation');
