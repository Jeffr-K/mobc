import { atom } from "jotai";
import { User } from "@/entities/user/model/user.model";

export const userAtom = atom<User | null>(null) as unknown as ReturnType<typeof atom<User | null>>;
