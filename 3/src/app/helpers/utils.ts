import { Item } from '../context/ItemContext';

export const formatCurrency = (value: number) => `RM${value}`;

export const sortItems = (items: Item[], key: keyof Item, asc = true): Item[] =>
  [...items].sort((a, b) => {
    if (typeof a[key] === 'number') return asc ? (a[key] as number) - (b[key] as number) : (b[key] as number) - (a[key] as number);
    return asc
      ? (a[key] as string).localeCompare(b[key] as string)
      : (b[key] as string).localeCompare(a[key] as string);
  });

export const filterByCategory = (items: Item[], category: string) =>
  category ? items.filter((item) => item.category === category) : items;

export const searchItems = (items: Item[], term: string): Item[] => {
  const lower = term.toLowerCase();
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(lower) ||
      item.category.toLowerCase().includes(lower) ||
      item.price.toString().includes(lower)
  );
};
