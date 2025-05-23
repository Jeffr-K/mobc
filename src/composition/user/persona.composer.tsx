import { PersonaCards } from "@/features/user/presentation/organisms/persona.component";
import { DEFAULT_PERSONA } from "@/features/user/infrastructure/constants/profile.constants";
import { useAtomValue } from "jotai";
import { profilePersonaAtom } from "@/features/user/infrastructure/adapter/query/profile.query";

export function ProfilePersona() {
  const { data: persona, isLoading, error } = useAtomValue(profilePersonaAtom);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return <PersonaCards {...(persona?.data || DEFAULT_PERSONA)} />;
}
