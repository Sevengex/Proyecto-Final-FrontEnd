import { useState } from "react";

const SearchBar = ({ placeholder = "Buscar productos...", onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="searchbar"
      role="search"
      aria-label="Buscar productos"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        className="searchbar-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="searchbar-button">
        Buscar
      </button>
    </form>
  );
};

export { SearchBar }