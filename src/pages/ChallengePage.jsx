import React from "react";
import Header from "../components/common/Header";
import PageContainer from "../components/common/PageContainer";
import ProblemCard from "../components/challenge/ProblemCard";
import { useParams } from "react-router-dom";
import { useGetProblems } from "../hooks/useGetProblems";
import { Skeleton } from "@mui/material";

const ChallengePage = () => {
  const { challengeId } = useParams("challengeId");
  const { data: challengeDetail, isLoading } = useGetProblems(challengeId);
  const formattedDate = new Date(
    challengeDetail?.[0]?.createdAt
  ).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <PageContainer className="px-2 xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3 pt-3">
        <div className="flex text-5xl font-extrabold py-6 ">
          오늘의 챌린지 문제
        </div>
        {isLoading ? (
          <Skeleton variant="text" className="min-h-[50px] w-[200px]" />
        ) : (
          <div className="text-3xl mb-10">{formattedDate}</div>
        )}
        <div>
          {isLoading ? (
            <div className="flex flex-col gap-4">
              <Skeleton
                variant="rectangular"
                className="flex flex-row border min-h-32 rounded-md p-5 basis-2/6 flex-grow items-center w-full"
              />
              <Skeleton
                variant="rectangular"
                className="flex flex-row border min-h-32 rounded-md p-5 basis-2/6 flex-grow items-center w-full"
              />
              <Skeleton
                variant="rectangular"
                className="flex flex-row border min-h-32 rounded-md p-5 basis-2/6 flex-grow items-center w-full"
              />
            </div>
          ) : (
            challengeDetail
              ?.slice()
              .reverse()
              .map((problem) => (
                <ProblemCard
                  problemId={problem.id}
                  title={problem.title}
                  site={problem.site}
                  siteKinds={problem.siteKinds}
                  level={problem.level}
                  isLoading={isLoading}
                />
              ))
          )}
        </div>
      </PageContainer>
    </>
  );
};

export default ChallengePage;
