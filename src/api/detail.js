import client from "./client";
import { getCookie } from "./cookie";

const token = getCookie("accessToken");

// TIL 글 상세 조회
export const getTILDetail = async ({ tilId }) => {
  return await client.get(`/api/tils/${tilId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// TIL 글 작성 조회
export const postTIL = async (tilData) => {
  return await client.post(`/api/til`, tilData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// TIL 글 알고리즘 조회
export const getAlgorithms = async () => {
  return await client.get(`/api/algorithms`);
};

// TIL 글 수정 조회
export const putTIL = async ({ tilId }) => {
  console.log(tilId);
  return await client.put(`/api/tils/${tilId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// TIL 글 삭제 조회
export const deleteTIL = async ({ tilId }) => {
  console.log(tilId);
  return await client.delete(`/api/tils/${tilId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// 댓글 생성
export const postComment = async ({ tilId, content }) => {
  return await client.post(
    `/api/comment`,
    { tilId: tilId, content: content },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// 좋아요 추가
export const postLike = async ({ tilId }) => {
  return await client.post(
    `/api/like`,
    { tilId: tilId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// 좋아요 삭제
export const deleteLike = async ({ tilId }) => {
  return await client.delete(
    `/api/like`,
    { tilId: tilId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
