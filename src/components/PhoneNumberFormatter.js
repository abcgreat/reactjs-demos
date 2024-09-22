import React, { useState, useRef, useEffect } from 'react';

const PhoneNumberInput = ({ maxLength = 10 }) => {
    const [input, changeInput] = useState("");
    const inputRef = useRef(null);
    const carretPositionRef = useRef(0);

    const InputChange = (e) => {
        const target = e.target;
        const currentValue = target.value;
        const selectionStart = target.selectionStart;
        const numbers = currentValue.replace(/[^0-9]/g, "");
        const size = numbers.length;

        if (size > maxLength) return;

        const formattedValue = [];
        for (let i = 0; i < size; i++) {
            if (size > 3 && i === 0) {
                formattedValue.push("(");  
            }

            formattedValue.push(numbers[i]);

            if (size > 6 && i === 5) {
                formattedValue.push("-");
            }

            if (size > 3 && i === 2) {
                formattedValue.push(")");
            }
        }

        const diff = formattedValue.length - currentValue.length;
        if (selectionStart) {
            carretPositionRef.current = selectionStart + diff;
        }

        changeInput(formattedValue.join(""));
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setSelectionRange(
                carretPositionRef.current,
                carretPositionRef.current
            );
        }
    }, [input]);

    return (
        <input
          type="text"
          value={input}
          onChange={InputChange}
          ref={inputRef}
          data-testid="phone-number-input"
        />
    );
  };
  

const PhoneNumberFormatter = () => {
    return (
        <div>
            <h2>Debounce Hook Tester</h2>
            <PhoneNumberInput maxLength={10} />
        </div>
    );
};

export default PhoneNumberFormatter;