import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const DebounceTester = () => {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 1000); // 1 sec delay

  return (
    <div>
      <h2>Debounce Hook Tester</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <p>Debounced Text: {debouncedText}</p>
    </div>
  );
};

export default DebounceTester;