import React from 'react';
export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Buscar por equipo, marca, modelo..."
      className="w-full border rounded p-2 mb-4"
    />
  );
}
