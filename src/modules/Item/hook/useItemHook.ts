export const useItemHook = (price: { count: number, currency: string }) => {
  const correctPrice = new Intl.NumberFormat("ru-RU", {style: "currency", currency: price.currency}).format(
    price.count / 100,
  );

  return {correctPrice};
};