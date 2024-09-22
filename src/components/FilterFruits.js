import { useState } from 'react';

const FilterFruits = () => {
    const [filter, setFilter] = useState('');
    const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Pineapple'];
  
    const filteredFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <div>
        <h2>Filter Fruits</h2>
        <input
          type="text"
          placeholder="Filter fruits..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {filteredFruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default FilterFruits;