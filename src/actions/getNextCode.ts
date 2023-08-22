'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Entity, getNextCode } from '@/lib/code';
import { getServerSession } from 'next-auth/next';


export async function getNextCodeAction(entity: Entity) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new Error('No Session to fetch Code!');
  }

  return getNextCode(session.user.id, entity);
}
