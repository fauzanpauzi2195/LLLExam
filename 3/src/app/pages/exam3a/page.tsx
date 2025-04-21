'use client';

import { useItemContext } from '../../context/ItemContext';
import { formatCurrency } from '../../helpers/utils';

export default function Exam3aPage() {
  const { items } = useItemContext();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, category, price }) => (
            <tr key={id}>
              <td className="p-2 border">{id}</td>
              <td className="p-2 border">{name}</td>
              <td className="p-2 border">{category}</td>
              <td className="p-2 border">{formatCurrency(price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
