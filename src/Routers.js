import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostWritePage from "./pages/PostWritePage";
import ChallengePage from "./pages/ChallengePage";
import MyPage from "./pages/MyPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 - 전체 글 목록 / 날짜별 챌린지 목록 */}
        <Route element={<MainPage />} path="/" exact />
        {/* 글 상세 페이지 */}
        <Route element={<PostDetailPage />} path="/posts/:postId" />
        {/* 글 작성 페이지 */}
        <Route element={<PostWritePage />} path="/posts/write" />
        {/* 챌리지 상세 페이지 - 일일 코딩테스트 문제 리스트 */}
        <Route element={<ChallengePage />} path="/challenges/:challengeId" />
        {/* 마이페이지 */}
        <Route element={<MyPage />} path="/mypage" />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
