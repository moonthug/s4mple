import { kv } from '@vercel/kv';


export type Entity = 'recording' | 'sample' | 'propagation' | 'plate';

const prefixForEntity = new Map<Entity, string>([
  ['recording', 'RC'],
  ['sample', 'SP'],
  ['propagation', 'PR'],
  ['plate', 'PL'],
]);

export async function getNextCode(userId: string, entity: Entity) {
  const codeKey = `code-pointer/${ userId }/${ entity }`;

  const value = await kv.get(codeKey) as number || 0;
  const code = String(value + 1).padStart(5, '0');
  
  return `${ prefixForEntity.get(entity) }${ code }`;
}

export async function getNextCodeAndIncrement(userId: string, entity: Entity) {
  const codeKey = `code-pointer/${ userId }/${ entity }`;

  const code = String(await kv.incr(codeKey)).padStart(5, '0');

  return `${ prefixForEntity.get(entity) }${ code }`;
}
