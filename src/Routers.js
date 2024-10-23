import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostWritePage from "./pages/PostWritePage";
import ChallengePage from "./pages/ChallengePage";
import MyPage from "./pages/MyPage";
import SettingPage from "./pages/SettingPage";
import DiscussionPage from "./pages/DiscussionPage";

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
        {/* 챌린지 상세 페이지 - 일일 코딩테스트 문제 리스트 */}
        <Route element={<ChallengePage />} path="/challenges/:challengeId" />
        {/* 챌린지 문제토론 페이지 -  */}
        <Route
          element={<DiscussionPage />}
          path="/challenges/:challengeId/discussion/:discussionId"
        />
        {/* 마이페이지 */}
        <Route element={<MyPage />} path="/mypage" />
        {/* 설정페이지 */}
        <Route element={<SettingPage />} path="/setting" />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
