import { SearchBar } from "./SearchBar";

interface SearchBarContainerProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onSearch: (search: string) => void;
}

export function SearchBarContainer({
  searchValue,
  setSearchValue,
  onSearch,
}: SearchBarContainerProps) {


  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img src="/task1/hero-bg.png" alt="Abstract app background image" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <SearchBar searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={onSearch} />
      </div>
    </div>
  );
}