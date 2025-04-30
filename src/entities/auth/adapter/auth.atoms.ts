import { atom, useAtom } from "jotai";
import { Session } from "../entities/auth.entity";

export const sessionAtom = atom<Session | null>(null);

export const useSessionStore = () => {
  const [session, setSession] = useAtom(sessionAtom);

  return { session, setSession };
};
