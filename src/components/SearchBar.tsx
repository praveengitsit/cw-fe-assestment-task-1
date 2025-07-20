import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onSearch: (search: string) => void;
}

export function SearchBar({
  searchValue,
  setSearchValue,
  onSearch,
}: SearchBarProps) {

  return (
    <div className="flex items-center bg-[var(--background)] px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(searchValue);
        }}
        className="flex items-center w-full"
      >
        <Search className="text-gray-400 mr-3" aria-hidden="true" />
        <Input
          aria-label="Enter search query"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Type to search..."
          className="flex-1 bg-transparent border-none text-[var(--foreground)] placeholder:text-gray-400 focus:ring-0"
        />
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white ml-4 rounded-full cursor-pointer"
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
}