import { useEffect, useState } from "react";
import { getCookie } from "../api/cookie";

// useAuth 커스텀 훅
export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      setIsLoggedIn(true); // accessToken이 있으면 로그인 상태로 설정
    }
  }, []);

  return { isLoggedIn };
};
