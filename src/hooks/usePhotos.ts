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

const usePhotos = (pageSize: number = 10) => {
  const fetchData = ({ pageParam = 1 }) =>
    apiClient
      .get<Photo[]>("/photos", {
        params: {
          page: (pageParam - 1) * pageSize,
          per_page: pageSize,
        },
      })
      .then((res) => res.data);

  const { data, error, isLoading } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: fetchData,
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
  console.log(data);
  return { photos: data, error, isLoading };
};

export default usePhotos;
