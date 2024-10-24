import React, { useEffect, useState } from "react";
import PageContainer from "../components/common/PageContainer";
import Header from "../components/common/Header";
import TabBar from "../components/common/TabBar";
import Card from "../components/common/Card";
import ChallengeCard from "../components/challenge/ChallengeCard";
import { getChallenges, getTIL } from "../api/main";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../api/cookie";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState("total");
  const [posts, setPosts] = React.useState([]);
  const [challenges, setChallenges] = React.useState([]);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    // setCookie(
    //   "accessToken",
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb2NpYWwiOiJnaXRodWIiLCJlbWFpbCI6InBqbTI1NzFAY29kaW5nY2FyZS5zaXRlIiwicHJvZmlsZUltYWdlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91Lzk3OTM5MjA3P3Y9NCIsInJvbGUiOiJNRU1CRVIiLCJuYW1lIjoicGptMjU3MSIsImlhdCI6MTcyOTc1MDc0NCwiZXhwIjoxNzI5Nzg2NzQ0fQ.eeH_NF5e1602oFiyivKFPnokdFRerLvpmqfafgNK1i8"
    // );
    getTIL({ pageNumber: 0 }).then((res) => setPosts(res.data.content));
    getChallenges({ pageSize: 0 }).then((res) =>
      setChallenges(res.data.content)
    );
  }, []);
  return (
    <>
      <Header />
      <PageContainer>
        <TabBar value={selectedTab} handleChange={handleTabChange} />
        {selectedTab === "total" && (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 px-2">
            {posts?.map((item) => (
              <Card
                key={item.tilId}
                id={item.tilId}
                title={item.title}
                content={item.content}
                thumbnail={item.thumbnail}
                likeCount={item.likeCount}
                createdAt={item.createdAt}
                writerNickname={item.writerNickname}
                onClick={() => {
                  console.log("dd");
                  navigate(`/posts/${item.tilId}`);
                }}
              />
            ))}
          </div>
        )}
        {selectedTab === "challenge" && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 px-2">
            {challenges.map((item) => (
              <ChallengeCard
                key={item.id}
                algorithm={item.algorithm}
                viewCount={item.viewCount}
                createdAt={item.createdAt}
              />
            ))}
          </div>
        )}
      </PageContainer>
    </>
  );
};

export default MainPage;
