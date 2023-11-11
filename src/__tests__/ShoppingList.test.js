import React, { useState } from 'react';

function ShoppingList() {

  const items = [
    { id: 1, name: 'Item 1', category: 'Category A' },
    { id: 2, name: 'Item 2', category: 'Category B' },
    { id: 3, name: 'Item 3', category: 'Category A' },

  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <div>
      {}
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {}
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
      </select>
      {}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
