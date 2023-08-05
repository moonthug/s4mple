import { ogm } from '@/lib/neo4j';
import { Propagation } from '@/models/Propagation';


export type Sample = {
  id: string;
  description: string;
  latitude: number;
  longitude: number;

  createdAt: string;
  updatedAt: string;

  propagations: Propagation[];
}

export const SampleModel = ogm.model('Sample');
