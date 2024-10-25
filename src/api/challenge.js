import client from "./client";
import { getCookie } from "./cookie";

const token = getCookie("accessToken");

// 문제 댓글 조회
export const getProblemComments = async ({
  challengeId,
  problemId,
  pageSize = 0,
}) => {
  return await client.get(
    `/api/challenges/${challengeId}/problems/${problemId}?page=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// 문제 댓글 조회
export const postProblemComment = async ({ problemId, content }) => {
  return await client.post(
    `/api/problem_comment`,
    { problemId: problemId, content: content },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
