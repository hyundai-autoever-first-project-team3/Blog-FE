import React, { useEffect, useState } from "react";
import PageContainer from "../components/common/PageContainer";
import Header from "../components/common/Header";
import TabBar from "../components/common/TabBar";
import Card from "../components/common/Card";
import ChallengeCard from "../components/challenge/ChallengeCard";
import { getChallenges, getTIL } from "../api/main";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../api/cookie";
import { Pagination } from "@mui/material";

const MainPage = () => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("total");
  const [postsData, setPostsData] = React.useState([]);
  const [challenges, setChallenges] = React.useState([]);
  const { content: posts, totalPages } = postsData;
  const [pageNumber, setPageNumber] = React.useState(0);
  const handleChange = (event, pageNumber) => {
    setPageNumber(pageNumber);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    getTIL({ pageNumber: pageNumber }).then((res) => setPostsData(res.data));
    getChallenges({ pageSize: 0 }).then((res) =>
      setChallenges(res.data.content)
    );
    window.scrollTo(0, 0);
  }, [pageNumber]);

  return (
    <>
      <Header />
      <PageContainer>
        <TabBar value={selectedTab} handleChange={handleTabChange} />
        {selectedTab === "total" && (
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
        )}
        {selectedTab === "challenge" && (
          <div className="grid gap-2 px-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {challenges.map((item) => (
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
        )}
        <div className="flex flex-row items-center justify-center w-full my-5">
          <Pagination
            count={totalPages}
            page={pageNumber}
            onChange={handleChange}
          />
        </div>
      </PageContainer>
    </>
  );
};

export default MainPage;
