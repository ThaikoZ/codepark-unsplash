import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Search {
  total: number;
  results: [
    {
      id: number;
      tags: [
        {
          title: string;
          rank: number;
        }
      ];
    }
  ];
}

const searchServices = (searchQuery: string) => {
  const fetchData = () =>
    apiClient
      .get<Search>("/search/photos", {
        params: {
          query: searchQuery,
          per_page: 25,
        },
      })
      .then((res) => res.data);

  return useQuery<Search, Error>({
    queryKey: ["search", searchQuery],
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default searchServices;
