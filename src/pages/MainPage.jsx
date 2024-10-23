import React, { useEffect, useState } from "react";
import PageContainer from "../components/common/PageContainer";
import Header from "../components/common/Header";
import TabBar from "../components/common/TabBar";
import Card from "../components/common/Card";
import ChallengeCard from "../components/challenge/ChallengeCard";
import { setCookie } from "../api/cookie";
import { getTIL } from "../api/main";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState("total");

  const [posts, setPosts] = React.useState(null);

  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    setCookie(
      "accessToken",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi7J207Zqo7JuQIiwic29jaWFsIjoia2FrYW8iLCJlbWFpbCI6InltajA3MTY4QG5hdmVyLmNvbSIsInByb2ZpbGVJbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9kZkFXemcvYnRzSm43bVlmZm8vYzdhZ3Frb2NZTjQ1Zjd4SEIyMXN2Sy9pbWdfNjQweDY0MC5qcGciLCJyb2xlIjoiTUVNQkVSIiwiaWF0IjoxNzI5NjgwMDIwLCJleHAiOjE3Mjk2ODM2MjB9.u2lfSAabfwXrCeuMH-lr0FAGVq4ZNM2PlqAe6qwBZ1o"
    );
    getTIL({ pageNumber: 0 }).then((res) => setPosts(res.data.content));
  }, []);
  return (
    <PageContainer>
      <Header />
      <TabBar value={selectedTab} handleChange={handleTabChange} />
      {selectedTab === "total" && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 px-2">
          {posts?.map((item) => (
            <Card
              id={item.tilId}
              title={item.title}
              content={item.content}
              thumbnail={item.thumbnail}
              likeCount={item.likeCount}
              createdAt={item.createdAt}
              writerNickname={item.writerNickname}
              onClick={() => navigate(`posts/${item.tilId}`)}
            />
          ))}
        </div>
      )}
      {selectedTab === "challenge" && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 px-2">
          {Array(9)
            .fill(0)
            .map((item) => (
              <ChallengeCard />
            ))}
        </div>
      )}
    </PageContainer>
  );
};

export default MainPage;
