// atoms.ts
import { atom } from 'jotai';
import type { User } from './user.types';

// primitiveAtom 사용
export const userAtom = atom<User | null>(null) as unknown as ReturnType<typeof atom<User | null>>;
