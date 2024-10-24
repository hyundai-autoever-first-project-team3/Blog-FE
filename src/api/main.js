// import client from "./client";
import client from "./client";

// TIL 글 목록 조회
export const getTIL = async ({ pageNumber }) => {
  return await client.get(`/api/tils?page=${pageNumber}`);
};

// 챌린지 목록 조회
export const getChallenges = async ({ pageSize }) => {
  return await client.get(`/api/challenges?page=${pageSize}`);
};

// TIL 글 상세 조회
export const getTILDetail = async ({ tilId }) => {
  console.log(tilId);
  return await client.get(`/api/tils/${tilId}`);
};

// 챌린지 상세 문제 조회
export const getChallengeDetail = async ({ challengeId }) => {
  return await client.get(`/api/challenges/${challengeId}`);
};
