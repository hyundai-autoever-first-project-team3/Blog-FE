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
    // setCookie(
    //   "accessToken",
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiTUVNQkVSIiwicHJvZmlsZUltYWdlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91Lzk3OTM5MjA3P3Y9NCIsImVtYWlsIjoicGptMjU3MUBjb2RpbmdjYXJlLnNpdGUiLCJzb2NpYWwiOiJnaXRodWIiLCJuYW1lIjoicGptMjU3MSIsImlhdCI6MTcyOTY5NjA0MywiZXhwIjoxNzI5NzMyMDQzfQ.EClHdQL2KGQKw99Gh_El3Clu6dwDKV9c1FhTCGz1X2Q"
    // );
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
