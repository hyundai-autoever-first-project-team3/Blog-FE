import { useQuery } from "@tanstack/react-query";
import { getTILDetail } from "../api/main";

export const useGetTILDetail = ({ postId }) => {
  const queryKey = ["tilDetail", postId];

  const queryFn = async () => {
    if (postId) {
      const response = await getTILDetail({ tilId: postId });
      return response.data;
    }
    throw new Error("Missing parameters");
  };

  const { isLoading, isError, data, error, isSuccess, refetch } = useQuery({
    queryKey,
    queryFn,
    enabled: !!postId,
  });

  return { isLoading, isError, data, error, isSuccess, refetch };
};
