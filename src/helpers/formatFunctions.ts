export const formatMoneyValue = (value: number | string): string => {
  return Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};
