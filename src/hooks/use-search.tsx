import { useState } from "react";

export function useSearch(initialValue: string, onSearch: (search: string) => void) {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSearch = (search?: string) => {
    if (search !== undefined) {
      setSearchValue(search);
      onSearch(search);
      return;
    }
    
    onSearch(searchValue);
  };

  return { searchValue, setSearchValue, handleSearch };
}