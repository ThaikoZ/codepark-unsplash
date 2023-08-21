// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

// export interface Tag {
//   title: string;
//   rank: number;
// }

// export interface Search {
//   id: number;
//   tags: Tag[];
// }

// export interface Searches {
//   total: number;
//   results: Search[];
// }

// interface SearchTag {
//   title: string;
//   rank: number;
// }

// const useSearches = (searchQuery: string) => {
//   const [searches, setSearches] = useState<Searches>();
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   const [tags, setTags] = useState([""]);

//   const tagsFilter = (data: Searches) => {
//     let tagsList: SearchTag[] = [];

//     data.results.map((item) =>
//       item.tags.map((tag) => {
//         tagsList.push({ title: tag.title, rank: rankWord(tag.title) });
//       })
//     );

//     // Sortowanie według rankingu
//     tagsList.sort((a, b) => b.rank - a.rank);

//     // Usuwanie powtórek
//     tagsList = removeDuplicates(tagsList);

//     // Wybieranie TOP 5
//     const newTagsList = [];
//     for (let i = 0; i < 5; i++) newTagsList.push(tagsList[i].title);

//     console.log(newTagsList);
//     setLoading(false);
//     setTags(newTagsList);
//   };

//   const rankWord = (word: string) => {
//     let score = 0;

//     for (let i = 0; i < word.length && i < searchQuery.length; i++) {
//       if (word[i] === searchQuery[i]) score++;
//     }
//     return score;
//   };

//   const removeDuplicates = (tags: SearchTag[]): SearchTag[] => {
//     const uniqueTags: SearchTag[] = [];
//     const tagTitles: Set<string> = new Set();

//     for (const tag of tags) {
//       if (!tagTitles.has(tag.title)) {
//         tagTitles.add(tag.title);
//         uniqueTags.push(tag);
//       }
//     }

//     return uniqueTags;
//   };

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     if (searchQuery.length > 2) {
//       apiClient
//         .get<Searches>("/search/photos", {
//           signal: controller.signal,
//           params: {
//             query: searchQuery,
//             per_page: 25,
//           },
//         })
//         .then((res) => tagsFilter(res.data))
//         .catch((err) => {
//           setError(err);
//           setLoading(false);
//         });
//     }
//     return () => controller.abort();
//   }, [searchQuery]);

//   return { tags, error, isLoading };
// };

// export default useSearches;
