import { atom } from "jotai";
import { User } from "@/features/user/core/model/user.model";

export const userAtom = atom<User | null>(null) as unknown as ReturnType<typeof atom<User | null>>;
