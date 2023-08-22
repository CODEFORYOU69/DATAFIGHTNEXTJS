import React, { useCallback } from 'react';

const IncrementDecrementField = ({ value, onChange }) => {
    const handleIncrement = useCallback(() => {
        onChange(value + 1);
    }, [value, onChange]);

    const handleDecrement = useCallback(() => {
        onChange(value - 1);
    }, [value, onChange]);

    return (
        <div className="flex flex-col items-center justify-between text-center ">
            <div className="flex items-center">
                <button
                    onClick={handleDecrement}
                    className="bg-blue-500 text-white  p-2 rounded-l w-2 h-10 flex items-center justify-center"
                >
                    -
                </button>
                <input
                    type="text"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="p-2 border-t border-b border-blue-500 text-center w-10 h-10"
                />
                <button
                    onClick={handleIncrement}
                    className="bg-blue-500 text-white p-2 rounded-r w-2 h-10 flex items-center justify-center"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default IncrementDecrementField;
