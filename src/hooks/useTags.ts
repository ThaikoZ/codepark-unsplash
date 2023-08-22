import { useQuery } from "@tanstack/react-query";
import Search, { SearchResponse, Tag } from "../services/search-services";

const search = new Search();

const tagsFilter = (searchQuery: string, data: SearchResponse) => {
  let tagsList: Tag[] = [];

  data.results.map((item) =>
    item.tags.map((tag) => {
      tagsList.push({
        title: tag.title,
        rank: 0,
      });
    })
  );

  // // Usuwanie powtórek
  tagsList = removeDuplicates(tagsList);

  tagsList.map((item) => {
    item.rank = rankWord(searchQuery, item.title);
  });

  tagsList.sort((a, b) => b.rank - a.rank);

  tagsList = tagsList.slice(0, 5);

  return [...tagsList.map((tag) => tag.title)];
};

const rankWord = (searchQuery: string, word: string) => {
  let score = 0;

  for (let i = 0; i < word.length && i < searchQuery.length; i++) {
    if (word[i] === searchQuery[i]) score++;
  }
  return score;
};

const removeDuplicates = (tags: Tag[]): Tag[] => {
  const uniqueTags: Tag[] = [];
  const tagTitles: Set<string> = new Set();

  for (const tag of tags) {
    if (!tagTitles.has(tag.title)) {
      tagTitles.add(tag.title);
      uniqueTags.push(tag);
    }
  }

  return uniqueTags;
};

const useTags = (searchQuery: string) => {
  const fetchData = () =>
    search.getPhotosByQuery({
      params: {
        query: searchQuery,
        per_page: 25,
      },
    });

  const { data, error, isLoading } = useQuery<SearchResponse, Error>({
    queryKey: ["search", searchQuery],
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000, //24h
    retry: 1,
  });

  // BUG: While is loading it returns an empty array. During this time it should keep returning previous array.
  let tagsList: string[] = [];

  if (data) tagsList = tagsFilter(searchQuery, data);

  return { tags: tagsList, error, isLoading };
};

export default useTags;
