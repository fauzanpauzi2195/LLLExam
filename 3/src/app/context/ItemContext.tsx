'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Item = {
  id: number;
  name: string;
  category: string;
  price: number;
};

type ItemContextType = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const initialItems: Item[] = [
  { id: 1, name: "Apple", category: "Fruit", price: 100 },
  { id: 2, name: "Banana", category: "Fruit", price: 80 },
  { id: 3, name: "Cherry", category: "Fruit", price: 300 },
  { id: 4, name: "Cabbage", category: "Vegetable", price: 150 },
  { id: 5, name: "Carrot", category: "Vegetable", price: 120 },
];

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>(initialItems);
  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) throw new Error('useItemContext must be used within ItemProvider');
  return context;
};
