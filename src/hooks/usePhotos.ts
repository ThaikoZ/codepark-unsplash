import apiClient from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";

interface User {
  first_name: string;
  last_name: string | null;
  profile_image: { small: string };
}

export interface Photo {
  id: string;
  urls: { regular: string };
  user: User;
}

interface PostQuery {
  pageSize: number;
  query: string | undefined;
}

const usePhotos = (query: PostQuery) => {
  const fetchData = ({ pageParam = 1 }) =>
    apiClient
      .get<Photo[]>(
        query.query ? "/search/photos" : "/photos",
        query.query
          ? {
              params: {
                page: (pageParam - 1) * query.pageSize,
                per_page: query.pageSize,
                query: query.query,
              },
            }
          : {
              params: {
                page: (pageParam - 1) * query.pageSize,
                per_page: query.pageSize,
              },
            }
      )
      .then((res) => res.data);

  return useInfiniteQuery<Photo[], Error>({
    queryKey: ["photos", query],
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000, //24h
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePhotos;
