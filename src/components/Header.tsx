import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

interface HeaderProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onSearch: () => void;
}

export function Header({ searchValue, setSearchValue, onSearch }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[var(--background)] border-b border-[var(--border)]">
      {/* Left: Logo and App Name */}
      <div className="flex items-center gap-4">
        <img src="/task1/logo.png" alt="Wortionary Logo" className="w-10 h-10 bg-black" />
        <div className="text-[var(--primary)] font-semibold text-lg">Wortionary</div>
      </div>
      {/* Right: Search and Avatar */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
            <Search className="text-gray-400 text-base" aria-hidden="true" />
          </span>
          <Input
            type="text"
            aria-label="Enter search query"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onSearch();
              }
            }}
            className="pl-10 pr-4 py-2 bg-[var(--input-background)] text-[var(--input-text)] border-[var(--border)] focus:ring-0 rounded-full w-64 transition-all duration-200"
          />
        </div>
        <Avatar className="w-8 h-8">
          <AvatarImage src="./assets/avatar.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}