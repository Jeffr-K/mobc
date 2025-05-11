export const QueryKeys = {
  analytics: {
    detail: (userId: number) => ["analytics", "detail", userId] as const,
  },
  introduction: {
    detail: (userId: number) => ["introduction", "detail", userId] as const,
  },
  profile: {
    me: ["profile", "me"] as const,
    persona: ["persona", "persona"] as const,
    experiences: ["experiences", "experiences"] as const,
    activities: ["activities", "activities"] as const,
    garages: ["garages", "garages"] as const,
  },
} as const;
