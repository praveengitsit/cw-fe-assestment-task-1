import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SearchBarContainer } from "./components/SearchBarContainer";
import { TagList } from "./components/TagList";
import type { TagType } from "./lib/types/TagType";
import { trendingTags as trendingTagsFromApi } from "./lib/constants/trendingTags";
import { forYouTags as forYouTagsFromApi } from "./lib/constants/forYouTags";
import { useSearch } from "./hooks/use-search";

async function fetchTags(type: TagType): Promise<string[]> {
  let tags: string[] = [];
  switch (type) {
    case "trending":
      tags = trendingTagsFromApi;
      break;
    case "for-you":
      tags = forYouTagsFromApi;
      break;
    default:
      tags = [];
  }
  return new Promise((resolve) => setTimeout(() => resolve(tags), ));
}

export default function App() {

  const { searchValue, setSearchValue, handleSearch } = useSearch("", (search) => {
    console.log("Searching for:", search);
  });

  const [trendingTags, setTrendingTags] = useState<string[]>([]);
  const [forYouTags, setForYouTags] = useState<string[]>([]);

  useEffect(() => {
    async function loadTags() {
      const [trending, forYou] = await Promise.all([
        fetchTags("trending"),
        fetchTags("for-you"),
      ]);
      setTrendingTags(trending);
      setForYouTags(forYou);
    }
    loadTags();
  }, []);

  const onTagClick = (tag: string) => {
    handleSearch(tag);
  }

  return (
    <main className="bg-[var(--background)] min-h-screen text-[var(--primary)] pb-10">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} onSearch={handleSearch} />
      <SearchBarContainer  searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearch={handleSearch} />
      {trendingTags.length > 0 && (
        <>
          <section aria-labelledby="trending-tags">
            <TagList title="Trending" tags={trendingTags} onTagClick={onTagClick} />
          </section>
        </>
      )}
      {forYouTags.length > 0 && (
        <>
          <section aria-labelledby="for-you-tags">
            <TagList title="For you" tags={forYouTags} onTagClick={onTagClick} />
          </section>
        </>
      )}
    </main>
  );
}
