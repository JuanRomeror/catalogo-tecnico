import React from 'react';
export default function ItemCard({ item, onClick }) {
  return (
    <div onClick={onClick} className="border rounded p-4 cursor-pointer hover:shadow">
      <img
        src={item.imageUrl || 'https://via.placeholder.com/150'}
        alt={item.name}
        className="mb-2 h-32 w-full object-cover"
      />
      <h3 className="font-semibold">{item.name}</h3>
    </div>
  );
}
