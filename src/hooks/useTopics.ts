import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Topic {
  id: number;
  title: string;
}

const useTopics = () => {
  const [featured, setFeatured] = useState<Topic[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Topic[]>("/topics", { signal: controller.signal })
      .then((res) => {
        setFeatured(res.data);
      })
      .catch((err) => setError(err));

    return () => controller.abort();
  }, []);

  return { featured, error };
};

export default useTopics;
