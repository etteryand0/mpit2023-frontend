import { UserRole } from '@/generated/graphql';
import { atom } from 'jotai';

type UserAtom = {
  id: string;
  username: string;
  role: UserRole;
} | null;

export const userAtom = atom<UserAtom>(null);
