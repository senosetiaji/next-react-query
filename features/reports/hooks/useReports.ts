import { useQuery } from "@tanstack/react-query";
import { getReports } from "../services/reportService";

export const useReports = () => {
  return useQuery({
    queryKey: ["reports"],
    queryFn: getReports,
  });
};