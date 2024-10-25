import client from "./client";
import { getCookie } from "./cookie";

const token = getCookie("accessToken");

// 이미지 업로드
export const postImageUpload = async (formData) => {
  return await client.post(`/api/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};
