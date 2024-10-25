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
    // setCookie(
    //   "accessToken",
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiTUVNQkVSIiwicHJvZmlsZUltYWdlIjoiaHR0cDovL2sua2FrYW9jZG4ubmV0L2RuL2RmQVd6Zy9idHNKbjdtWWZmby9jN2FncWtvY1lONDVmN3hIQjIxc3ZLL2ltZ182NDB4NjQwLmpwZyIsImVtYWlsIjoieW1qMDcxNjhAbmF2ZXIuY29tIiwic29jaWFsIjoia2FrYW8iLCJuYW1lIjoi7J207Zqo7JuQIiwiaWF0IjoxNzI5ODI0NTk1LCJleHAiOjE3Mjk4NjA1OTV9.aLplzRNPNM18uJIp1Yu9KNK6c8bhY0iOkou9qPP_I_Q"
    // );
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
        <div className="w-full flex flex-row items-center justify-center my-5">
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
