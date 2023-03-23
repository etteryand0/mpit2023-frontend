import { atom } from 'jotai';

export const userAtom = atom<null | { username: string }>(null);
