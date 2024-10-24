import React from "react";
import Header from "../components/common/Header";
import PageContainer from "../components/common/PageContainer";
import ProblemCard from "../components/challenge/ProblemCard";

const ChallengePage = () => {
  return (
    <div>
      <PageContainer className="xl:px-[150px] lg:px-[100px] md:px-50 sm:px-10">
        {/* <PageContainer className="xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3"> */}
        <Header />
        <div className="flex text-5xl font-extrabold py-6 ">
          오늘의 챌린지 문제
        </div>
        <div className="text-3xl mb-10">2024년 10월 22일</div>

        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
      </PageContainer>
    </div>
  );
};

export default ChallengePage;
