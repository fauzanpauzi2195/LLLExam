'use client';

import { useState } from 'react';
import { useItemContext } from '../../context/ItemContext';
import { formatCurrency, filterByCategory } from '../../helpers/utils';

export default function Exam3bPage() {
  const { items, setItems } = useItemContext();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('');

  const filtered = filterByCategory(items, categoryFilter);

  const handleDelete = (id: number) => setItems(items.filter(item => item.id !== id));

  const handleEdit = (id: number, key: string, value: string | number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, [key]: key === 'price' ? parseFloat(value as string) : value } : item
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <select
        className="border p-2 mb-4"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option className='text-black' value="">All Categories</option>
        <option className='text-black' value="Fruit">Fruit</option>
        <option className='text-black' value="Vegetable">Vegetable</option>
      </select>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(item => (
            <tr key={item.id}>
              <td className="border p-2">
                {editingId === item.id ? (
                  <input
                    value={item.name}
                    onChange={(e) => handleEdit(item.id, 'name', e.target.value)}
                    className="border p-1"
                  />
                ) : item.name}
              </td>
              <td className="border p-2">
                {editingId === item.id ? (
                  <input
                    value={item.category}
                    onChange={(e) => handleEdit(item.id, 'category', e.target.value)}
                    className="border p-1"
                  />
                ) : item.category}
              </td>
              <td className="border p-2">
                {editingId === item.id ? (
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => handleEdit(item.id, 'price', e.target.value)}
                    className="border p-1"
                  />
                ) : formatCurrency(item.price)}
              </td>
              <td className="border p-2 space-x-2">
                {editingId === item.id ? (
                  <button onClick={() => setEditingId(null)} className="text-green-600">Save</button>
                ) : (
                  <button onClick={() => setEditingId(item.id)} className="text-blue-600">Edit</button>
                )}
                <button onClick={() => handleDelete(item.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
