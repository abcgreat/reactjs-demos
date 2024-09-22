import React, { useState } from 'react';
import './App.css';
import FilterFruits from './components/FilterFruits';
import DebounceTester from './components/DebounceTester';
import PhoneNumberFormatter from './components/PhoneNumberFormatter';

const demos = [
  { id: 1, name: "Filter Fruits" },
  { id: 2, name: "Debounce Hook Tester" },
  { id: 3, name: "Phone Number Formatter" }
];

const App = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [filter, setFilter] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleDemoClick = (id) => {
    setSelectedDemo(id);
  };

  const filteredDemos = demos.filter((demo) =>
    demo.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <div className={`left-column ${isCollapsed ? 'collapsed' : ''}`}>
        <button className="buttonExpandCollapse" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Expand" : "Collapse"}
        </button>

        <input
          type="text"
          placeholder="Filter demos..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {filteredDemos.map((demo) => (
            <li key={demo.id} onClick={() => handleDemoClick(demo.id)}>
              {demo.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-column">
        {selectedDemo === 1 && <FilterFruits />}
        {selectedDemo === 2 && <DebounceTester />}
        {selectedDemo === 3 && <PhoneNumberFormatter />}
      </div>
    </div>
  );
};

export default App;
