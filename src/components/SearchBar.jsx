import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SearchBar = ({ placeholder = "Buscar productos..." }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("q") ?? "";
  const [value, setValue] = useState(initial);
  const inputRef = useRef(null);

  useEffect(() => {
    setValue(searchParams.get("q") ?? "");
  }, [searchParams]);

  const onSubmit = (e) => {
    e.preventDefault();
    const next = value.trim();
    if (next) setSearchParams({ q: next });
    else setSearchParams({});
  };

  const onClear = () => {
    setValue("");
    setSearchParams({});
    inputRef.current?.focus();
  };

  return (
    <form className="searchbar" role="search" aria-label="Buscar productos" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="search"
        className="searchbar-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="searchbar-button">Buscar</button>
    </form>
  );
};

export { SearchBar };