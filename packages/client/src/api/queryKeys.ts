const queryKeys = {
  items: (filters: string) => ["items", filters] as const,
  item: (id: string) => ["items", id] as const,
};

export { queryKeys };
