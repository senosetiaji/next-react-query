import axios from "axios";
import type { User } from "../types/users";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/users");

  return response.data;
};