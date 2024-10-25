import client from "./client";

// 특정 문제에 대한 댓글 목록 조회


export const getProblemComments = async ({challengeId, problemId }) => {
    return await client(`/api/challenges/${challengeId}/problems/${problemId}`);
};
