import React from "react";
import ChallengeCard from "../components/challenge/ChallengeCard";
import Header from "../components/common/Header";
import PageContainer from "../components/common/PageContainer";

const ChallengePage = () => {
  return (
    <div>
      <PageContainer>
        <Header />
        <div className="flex text-5xl font-extrabold py-10 mb-32 justify-center">
          오늘의 챌린지 문제
        </div>
        <ChallengeCard />
      </PageContainer>
    </div>
  );
};

export default ChallengePage;
