import React, { useEffect, useState } from "react";
import PageContainer from "../components/common/PageContainer";
import Header from "../components/common/Header";
import TabBar from "../components/common/TabBar";
import Card from "../components/common/Card";
import ChallengeCard from "../components/challenge/ChallengeCard";
import { getChallenges, getTIL } from "../api/main";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // 쿼리 파라미터에서 초기 탭 값을 가져옴
  const initialTab = searchParams.get("tab") || "total";
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [postsData, setPostsData] = React.useState([]);
  const [challengeData, setChallengeData] = React.useState([]);
  const { content: posts, totalPages } = postsData;
  const { content: challenges, challengeTotalPages } = challengeData;
  const [pageNumber, setPageNumber] = React.useState(1);
  const [challengePages, setChallengePages] = React.useState(1);

  const handleChallengeChange = (event, pageNumber) => {
    setChallengePages(pageNumber);
  };

  const handleChange = (event, pageNumber) => {
    setPageNumber(pageNumber);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSearchParams({ tab: newValue }); // 쿼리 파라미터에 탭 정보 저장
  };

  useEffect(() => {
    getTIL({ pageNumber: pageNumber - 1 }).then((res) => {
      setPostsData(res.data);
      window.scrollTo(0, 0);
    });
  }, [pageNumber]);

  useEffect(() => {
    getChallenges({ pageSize: challengePages - 1 }).then((res) => {
      setChallengeData(res.data);
      window.scrollTo(0, 0);
    });
  }, [challengePages]);

  return (
    <>
      <Header />
      <PageContainer>
        <TabBar value={selectedTab} handleChange={handleTabChange} />
        {selectedTab === "total" && (
          <>
            <div className="grid gap-3 px-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {posts?.map((item) => (
                <Card
                  key={item.tilId}
                  id={item.tilId}
                  title={item.title}
                  content={item.content}
                  thumbnail={item.thumbnailImage}
                  likeCount={item.likeCount}
                  createdAt={item.createdAt}
                  writerNickname={item.writerNickname}
                  writerProfile={item.writerProfileImage}
                  onClick={() => {
                    console.log("dd");
                    navigate(`/posts/${item.tilId}`);
                  }}
                />
              ))}
            </div>
            <div className="w-full flex flex-row items-center justify-center my-5">
              <Pagination
                count={totalPages}
                page={pageNumber}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        {selectedTab === "challenge" && (
          <>
            <div className="grid gap-2 px-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {challenges?.map((item) => (
                <ChallengeCard
                  key={item.challengeId}
                  id={item.challengeId}
                  algorithm={item.algorithm}
                  viewCount={item.views}
                  createdAt={item.createdAt}
                  onClick={() => navigate(`/challenges/${item.challengeId}`)}
                />
              ))}
            </div>
            <div className="w-full flex flex-row items-center justify-center my-5">
              <Pagination
                count={challengeTotalPages}
                page={challengePages}
                onChange={handleChallengeChange}
              />
            </div>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default MainPage;
