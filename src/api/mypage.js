import client from "./client";

// 내 글 목록 조회
export const getMyTILs = async ({ pageSize }) => {
  return await client.get(`/api/mypage/tils?page=${pageSize}`);
};

// 좋아요 글 목록 조회
export const getLikeTILs = async ({ pageSize }) => {
  return await client.get(`/api/mypage/likes?page=${pageSize}`);
};
