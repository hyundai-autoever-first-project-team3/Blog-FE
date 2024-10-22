import React from "react";
import PageContainer from "../components/common/PageContainer";
import Header from "../components/common/Header";
import TabBar from "../components/common/TabBar";
import Card from "../components/common/Card";
import ChallengeCard from "../components/challenge/ChallengeCard";

const MainPage = () => {
  return (
    <PageContainer>
      <Header />
      <TabBar />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 px-2">
        {Array(9)
          .fill(0)
          .map((item) => (
            <ChallengeCard />
          ))}
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 px-2">
        {Array(9)
          .fill(0)
          .map((item) => (
            <Card />
          ))}
      </div>
    </PageContainer>
  );
};

export default MainPage;
