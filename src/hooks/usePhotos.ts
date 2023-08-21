import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import photos from "../data/photos";

export interface Photos {
  id: string;
  urls: {
    regular: string;
  };
}

const usePhotos = () => {
  // TODO: React Query to useTopics
  //   const [photos, setPhotos] = useState<Photos[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   setLoading(true);
  //   apiClient
  //     .get<Photos[]>("/photos", { signal: controller.signal })
  //     .then((res) => {
  //       setPhotos(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });

  //   return () => controller.abort();
  // }, []);

  // Change topics to featured
  return { data: photos, error, isLoading };
};

export default usePhotos;
