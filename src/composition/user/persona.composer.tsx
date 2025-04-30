import { useQueryProfilePersonaHook } from "@/entities/user/interface/profile.hooks";
import { PersonaCards } from "@/features/user/x/persona.x-component";
import { DEFAULT_PERSONA } from "@/entities/user/lib/constants/profile.constants";
import { Persona } from "@/entities/user/model/profile.model";

export function ProfilePersona() {
  const { data: persona }: { data: Persona | undefined } = useQueryProfilePersonaHook();
  
  return (
    <PersonaCards {...(persona || DEFAULT_PERSONA)} />
  );
}