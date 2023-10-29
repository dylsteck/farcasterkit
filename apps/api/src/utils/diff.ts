export const diff = (value: any[], origin: any[]) => {
  const diff = value
    .map((item) => {
      const originItem = origin.find((i) => i.id === item.id);
      if (originItem) {
        if (JSON.stringify(originItem) === JSON.stringify(item)) {
          return null;
        } else {
          return {
            ...item,
            method: "update",
          };
        }
      }
      return {
        ...item,
        method: "create",
      };
    })
    .filter((item) => !!item);
  const deletes = origin
    .filter((item) => !value.find((i) => i.id === item.id))
    .map((item) => ({ ...item, method: "delete" }));
  return [...diff, ...deletes];
};
