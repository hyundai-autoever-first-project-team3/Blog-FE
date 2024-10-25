import { useQuery } from "@tanstack/react-query";
import { getProblemComments } from "../api/challenge";

export const useGetProblemComments = ({ challengeId, problemId }) => {
  const queryKey = ["tilDetail", [challengeId, problemId]];

  const queryFn = async () => {
    if (challengeId && problemId) {
      const response = await getProblemComments({
        challengeId: challengeId,
        problemId: problemId,
      });
      return response.data;
    }
    throw new Error("Missing parameters");
  };

  const { isLoading, isError, data, error, isSuccess, refetch } = useQuery({
    queryKey,
    queryFn,
    enabled: !!challengeId && !!problemId,
  });

  return { isLoading, isError, data, error, isSuccess, refetch };
};
