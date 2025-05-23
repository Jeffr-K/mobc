import { Session } from "@/features/user/core/model/auth.model";
import { atom, useAtom } from "jotai";

export const sessionAtom = atom<Session | null>(null);

export const useSessionStore = () => {
  const [session, setSession] = useAtom(sessionAtom);

  return { session, setSession };
};
