import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

export interface Tag {
  title: string;
  rank: number;
}

export interface SearchResponse {
  total: number;
  results: [
    {
      id: number;
      tags: Tag[];
    }
  ];
}

class Search {
  getPhotos = (config?: AxiosRequestConfig) => {
    return apiClient
      .get<SearchResponse>("/photos", config)
      .then((res) => res.data);
  };
  getPhotosByQuery = (config?: AxiosRequestConfig) => {
    return apiClient
      .get<SearchResponse>("/search/photos", config)
      .then((res) => res.data);
  };
}

export default Search;
