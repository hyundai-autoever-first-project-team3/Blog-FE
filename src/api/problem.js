import client from "./client";

// 특정 문제에 대한 댓글 목록 조회

export const getProblemComments = async ({ problem }) => {
    return await client(`/api/problems/3/problem_comments?page=${problem}`);
};
