import searchServices, { Search } from "../services/searchServices";

interface SearchTag {
  title: string;
  rank: number;
}

const tagsFilter = (searchQuery: string, data: Search) => {
  let tagsList: SearchTag[] = [];

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

const removeDuplicates = (tags: SearchTag[]): SearchTag[] => {
  const uniqueTags: SearchTag[] = [];
  const tagTitles: Set<string> = new Set();

  for (const tag of tags) {
    if (!tagTitles.has(tag.title)) {
      tagTitles.add(tag.title);
      uniqueTags.push(tag);
    }
  }

  return uniqueTags;
};

const useSearch = (searchQuery: string) => {
  const { data, isLoading } = searchServices(searchQuery);
  let tagsList = [""];

  if (data) tagsList = tagsFilter(searchQuery, data);

  if (tagsList.length === 1 && tagsList[0] == "") tagsList.pop();

  return { tags: tagsList, isLoading };
};

export default useSearch;
