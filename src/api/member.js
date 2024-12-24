import client from "./client";
import { getCookie } from "./cookie";

const token = getCookie("accessToken");

// 회원 정보 수정 API
export const updateMemberProfile = async (memberData) => {
  return await client.patch(`/api/member`, memberData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// 프로필 이미지 업로드 API
export const uploadProfileImage = async (formData) => {
  return await client.post(`/api/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};