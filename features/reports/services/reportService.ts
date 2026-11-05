import axios from "axios";
import type { Report } from "../types/report";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getReports = async (): Promise<Report[]> => {
  const response = await api.get<Report[]>("/posts");

  return response.data;
};