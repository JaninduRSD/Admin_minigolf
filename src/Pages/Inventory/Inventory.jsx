import React, { useState } from 'react';

const initialInventory = [
  { id: 1, name: 'Golf Balls', stock: 500 },
  { id: 2, name: 'Golf Clubs', stock: 120 },
  { id: 3, name: 'Golf Tees', stock: 1000 },
  { id: 4, name: 'Golf Carts', stock: 20 }
];

const InventoryTable = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [editableId, setEditableId] = useState(null);
  const [updatedStock, setUpdatedStock] = useState('');

  const handleEdit = (id, stock) => {
    setEditableId(id);
    setUpdatedStock(stock);
  };

  const handleSave = (id) => {
    setInventory(
      inventory.map(item =>
        item.id === id ? { ...item, stock: updatedStock } : item
      )
    );
    setEditableId(null);
  };

  return (
    <div className="container mx-auto  p-6 bg-yellow-50 rounded-lg shadow-sm">
      <h2 className="text-4xl font-bold mb-6 text-green-700">Inventory Stock</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="py-4 px-6 text-left text-sm font-semibold">Item</th>
            <th className="py-4 px-6 text-left text-sm font-semibold">Stock</th>
            <th className="py-4 px-6 text-left text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id} className="border-t hover:bg-yellow-100 transition duration-300">
              <td className="py-3 px-6 text-sm font-medium text-gray-700">{item.name}</td>
              <td className="py-3 px-6">
                {editableId === item.id ? (
                  <input
                    type="number"
                    value={updatedStock}
                    onChange={(e) => setUpdatedStock(e.target.value)}
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                ) : (
                  <span className="text-gray-700">{item.stock}</span>
                )}
              </td>
              <td className="py-3 px-6">
                {editableId === item.id ? (
                  <button
                    onClick={() => handleSave(item.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(item.id, item.stock)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
