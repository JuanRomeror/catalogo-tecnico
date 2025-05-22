import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import ItemCard from './components/ItemCard';
import ItemDetail from './components/ItemDetail';
import itemsData from './data/items.json';

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setItems(itemsData);
  }, []);

  return (
    <div className="flex">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1 p-4">
        <SearchBar query={query} setQuery={setQuery} />
        {!selectedItem ? (
          <div className="grid grid-cols-3 gap-4">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
            ))}
          </div>
        ) : (
          <ItemDetail item={selectedItem} onBack={() => setSelectedItem(null)} />
        )}
      </div>
    </div>
  );
}
