export const QueryKeys = {
  user: {
    me: ["user", "me"] as const,
    settings: ["user", "settings"] as const,
  },
  users: {
    all: ["users"] as const,
    detail: (id: string) => ["users", "detail", id] as const,
    settings: (id: string) => ["users", "settings", id] as const,
  },
} as const;
