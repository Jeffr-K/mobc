export const QueryKeys = {
  auth: {
    login: ["auth", "login"] as const,
    socialLogin: (provider: string) => ["auth", "social", provider] as const,
  },
} as const;
