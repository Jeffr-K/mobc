export const QueryKeys = {
  users: {
    all: ['users'] as const,
    detail: (id: string) => ['users', 'detail', id] as const,
    settings: (id: string) => ['users', 'settings', id] as const,
  },
} as const;
