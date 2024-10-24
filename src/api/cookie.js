//패키지 임포트
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const options = {
  path: "/",
};
//쿠키에 값을 저장할때
export const setCookie = (name, value, option) => {
  return new Promise((resolve) => {
    cookies.set(name, value, { options, ...option });
    resolve();
  });
};
//쿠키에 있는 값을 꺼낼때
export const getCookie = (name) => {
  return cookies.get(name);
};
//쿠키를 지울때
export const removeCookie = (name) => {
  return new Promise((resolve) => {
    cookies.remove(name);
    resolve();
  });
};
