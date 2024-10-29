import { useQuery } from "@tanstack/react-query";
import { getStatistics } from "../api/mypage";

export const useGetStatistics = (token) => {
  const queryKey = ["statistics", token];

  const queryFn = async () => {
    if (token) {
      const response = await getStatistics();
      return response.data;
    }
    throw new Error("Missing parameters");
  };

  const { isLoading, isError, data, error, isSuccess, refetch } = useQuery({
    queryKey,
    queryFn,
    enabled: !!token,
  });

  return { isLoading, isError, data, error, isSuccess, refetch };
};
