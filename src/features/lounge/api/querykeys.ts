export const QueryKeys = {
  categories: ["categories"] as const, // 문자열에서 배열로 변경
  feeds: {
    list: ["feeds", "list"] as const,
  },
} as const;
