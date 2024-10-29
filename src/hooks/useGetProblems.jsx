import { useQuery } from "@tanstack/react-query";
import { getChallengeDetail } from "../api/main";

export const useGetProblems = (challengeId) => {
  const queryKey = ["statistics", challengeId];

  const queryFn = async () => {
    if (challengeId) {
      const response = await getChallengeDetail({ challengeId: challengeId });
      return response.data;
    }
    throw new Error("Missing parameters");
  };

  const { isLoading, isError, data, error, isSuccess, refetch } = useQuery({
    queryKey,
    queryFn,
    enabled: !!challengeId,
  });

  return { isLoading, isError, data, error, isSuccess, refetch };
};
