'use client';

import { useState } from 'react';
import { useItemContext } from '../../context/ItemContext';
import { formatCurrency, sortItems, searchItems } from '../../helpers/utils';

export default function Exam3cPage() {
  const { items, setItems } = useItemContext();
  const [sortKey, setSortKey] = useState<keyof typeof items[0]>('name');
  const [sortAsc, setSortAsc] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const [newItem, setNewItem] = useState({ name: '', category: '', price: 0 });

  const sorted = sortItems(searchItems(items, searchTerm), sortKey, sortAsc);
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const paginated = sorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const addItem = () => {
    setItems(prev => [
      ...prev,
      { id: Date.now(), ...newItem, price: Number(newItem.price) },
    ]);
    setNewItem({ name: '', category: '', price: 0 });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4 space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSortKey(e.target.value as keyof typeof items[0])} className="border p-2">
          <option className='text-black' value="name">Sort by Name</option>
          <option className='text-black' value="category">Sort by Category</option>
          <option className='text-black' value="price">Sort by Price</option>
        </select>
        <button onClick={() => setSortAsc(!sortAsc)} className="border p-2">
          {sortAsc ? 'Asc' : 'Desc'}
        </button>
      </div>

      <table className="w-full border mb-4">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Price</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(item => (
            <tr key={item.id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.category}</td>
              <td className="border p-2">{formatCurrency(item.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`mx-1 px-3 py-1 border ${page === currentPage ? 'bg-blue-500 text-white' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="p-4 border rounded">
        <h2 className="font-semibold mb-2">Add New Item</h2>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
          className="border p-2 mr-2"
        />
        <button onClick={addItem} className="bg-green-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
    </div>
  );
}
