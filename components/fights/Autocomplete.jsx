import React, { useState, useEffect } from 'react';

const Autocomplete = ({ options, value, onChange, name }) => {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [showOptions, setShowOptions] = useState(false);
    const [displayName, setDisplayName] = useState(""); // Nouvel état pour le nom et prénom

    useEffect(() => {
        setFilteredOptions(
            options.filter((option) => 
            option && option.label && value && option.label.toLowerCase().includes(value.toLowerCase())
            )
        );
    }, [value, options]);

    const handleSelect = (option) => {
        onChange(name, option.value); // Mettre à jour l'ID
        setDisplayName(option.label); // Mettre à jour le nom et prénom
        setShowOptions(false);
    };

    return (
      <div >
        <input
          className=" border rounded-lg hover:border-gray-400 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 shadow-sm p-2"
          type="text"
          value={displayName} // Utilisez displayName ici
          onChange={(e) => {
            onChange(e.target.name, e.target.value);
            setDisplayName(e.target.value); // Mettre à jour le nom et prénom lors de la saisie
          }}
          onFocus={() => setShowOptions(true)}
          onBlur={() => setTimeout(() => setShowOptions(false), 200)}
          name={name}
        />
        {showOptions && (
          <ul className="border rounded-lg shadow-sm">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)} // Utilisez handleSelect ici
                className="cursor-pointer hover:bg-gray-200 p-2"

              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};


export default Autocomplete;
