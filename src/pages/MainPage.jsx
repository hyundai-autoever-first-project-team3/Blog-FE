import React, { useEffect, useState } from "react";
import PageContainer from "../components/common/PageContainer";
import Header from "../components/common/Header";
import TabBar from "../components/common/TabBar";
import Card from "../components/common/Card";
import ChallengeCard from "../components/challenge/ChallengeCard";
import { getChallenges, getTIL } from "../api/main";
import { useNavigate } from "react-router-dom";

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
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb2NpYWwiOiJrYWthbyIsImVtYWlsIjoieW1qMDcxNjhAbmF2ZXIuY29tIiwicHJvZmlsZUltYWdlIjoiaHR0cDovL2sua2FrYW9jZG4ubmV0L2RuL2RmQVd6Zy9idHNKbjdtWWZmby9jN2FncWtvY1lONDVmN3hIQjIxc3ZLL2ltZ182NDB4NjQwLmpwZyIsInJvbGUiOiJNRU1CRVIiLCJuYW1lIjoi7J207Zqo7JuQIiwiaWF0IjoxNzI5NzUxMDg1LCJleHAiOjE3Mjk3ODcwODV9.hvJm84rtzssOWMjVbF3SCjH4rkFRqCIVikIxQc_36_s"
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
                key={item.id}
                algorithm={item.algorithm}
                viewCount={item.views}
                createdAt={item.createdAt}
                onClick={() => navigate(`/challenges/${item.id}`)}
              />
            ))}
          </div>
        )}
      </PageContainer>
    </>
  );
};

export default MainPage;
