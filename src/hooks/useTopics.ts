import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import topics from "../data/topics";
interface Topic {
  id: number;
  title: string;
}

const useTopics = () => {
  const [featured, setFeatured] = useState<Topic[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   setLoading(true);
  //   apiClient
  //     .get<Topic[]>("/topics", { signal: controller.signal })
  //     .then((res) => {
  //       setFeatured(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });

  //   return () => controller.abort();
  // }, []);

  // Change topics to featured
  return { topics, error, isLoading };
};

export default useTopics;
