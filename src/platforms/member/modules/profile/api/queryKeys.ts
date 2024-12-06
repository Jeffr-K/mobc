export const QueryKeys = {
  analytics: {
    detail: (userId: string) => ['analytics', 'detail', userId] as const,
  },
  introduction: {
    detail: (userId: string) => ['introduction', 'detail', userId] as const,
  },
  profile: {
    me: ['profile', 'me'] as const,
  },
} as const;
