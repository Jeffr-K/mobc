import { Persona } from "../../model/profile.model";

type PersonaQuery = Required<Pick<Persona, "contact" | "personal" | "identity" | "location">>;

export const DEFAULT_PERSONA: PersonaQuery = {
  contact: { email: "", github: "", blog: "" },
  personal: { name: "", description: "", job: "", personality: "", interests: [] },
  identity: { frontend: "", backend: "", tools: "" },
  location: { address: "", education: "", experience: "" },
};
