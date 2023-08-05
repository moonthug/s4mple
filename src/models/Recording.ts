import { ogm } from '@/lib/neo4j';
import { Sample } from '@/models/Sample';


export type Recording = {
  id: string;
  name: string;
  description: string;

  createdAt: string;
  updatedAt: string;

  samples: Sample[];
}

export const RecordingModel = ogm.model('Recording');
