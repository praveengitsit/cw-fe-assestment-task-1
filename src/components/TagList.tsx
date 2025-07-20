import { Badge } from "./ui/badge";

interface TagListProps {
  title: string;
  tags: string[];
  onTagClick: (tag: string) => void;
}

export function TagList({ title, tags, onTagClick }: TagListProps) {
  return (
    <div className="mt-8 px-6 max-w-5xl mx-auto">
      <div className="text-[var(--primary)] text-lg font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            tabIndex={0}
            aria-label={`Tag: ${tag}`}
            
            onClick={() => onTagClick(tag)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onTagClick(tag);
              }
            }}
          >
            <Badge className="bg-[var(--background)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] cursor-pointer border border-[var(--primary)] transition-colors duration-200 outline-none focus:ring-2 focus:ring-[var(--primary)] px-3 py-1 rounded-full">{tag}</Badge>
          </button>
        ))}
      </div>
    </div>
  );
}