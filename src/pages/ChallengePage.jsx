import React, { useEffect } from "react";
import Header from "../components/common/Header";
import PageContainer from "../components/common/PageContainer";
import ProblemCard from "../components/challenge/ProblemCard";
import { getChallengeDetail } from "../api/main";
import { useParams } from "react-router-dom";

const ChallengePage = () => {

  const [challengeDetail, setChallengeDetail] = React.useState([])
  const {challengeId} = useParams("challengeId");
  const formattedDate = new Date(challengeDetail[0]?.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(()=>{
    getChallengeDetail({challengeId: challengeId}).then((res)=>{
      // console.log(res.data)
      setChallengeDetail(res.data)
  })},[challengeId]);

  return (
    <div>
      <PageContainer className="xl:px-[150px] lg:px-[100px] md:px-50 sm:px-10">
        {/* <PageContainer className="xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3"> */}
        <Header />
        <div className="flex text-5xl font-extrabold py-6 ">
          오늘의 챌린지 문제
         

        </div>
        <div className="text-3xl mb-10">
          {formattedDate}
          </div>
        <div>
            {challengeDetail?.map(problem => (
                <ProblemCard
                    problemId={problem.id}
                    title={problem.title}
                    site={problem.site}
                    siteKinds={problem.siteKinds}
                    level={problem.level}
                />
            ))}

        </div>
        
        
      </PageContainer>
    </div>
  );
};

export default ChallengePage;
