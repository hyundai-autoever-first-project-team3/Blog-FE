// import client from "./client";
import client from "./client";

// TIL 글 목록 조회
export const getTIL = async ({ pageNumber }) => {
  return await client.get(`/api/tils?page=${pageNumber}`);
};
