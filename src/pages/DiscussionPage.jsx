import React, { useEffect } from "react";
import Header from "../components/common/Header";
import PageContainer from "../components/common/PageContainer";
import { DiscussionHeader } from "../components/challenge/DiscussionHeader";
import { Comment } from "../components/challenge/Comment";
import { getProblemComments } from "../api/problem";
import { useParams } from "react-router-dom";

const DiscussionPage = () => {
  const {problem} = useParams("problem");
  const [problemInfo, setProblemInfo] = React.useState([])
   
  useEffect(()=>{

    setCookie(
      "accessToken",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiTUVNQkVSIiwicHJvZmlsZUltYWdlIjoiaHR0cDovL2sua2FrYW9jZG4ubmV0L2RuL29iT0dmL2J0c0pOZmxZb09XL0QxS2lzNU5ycTBkOExQWFliYjlHNzEvaW1nXzY0MHg2NDAuanBnIiwiZW1haWwiOiJnb2NoZWxpbkBuYXZlci5jb20iLCJzb2NpYWwiOiJrYWthbyIsIm5hbWUiOiLqs6DssYTrprAiLCJpYXQiOjE3Mjk4MjcwNDcsImV4cCI6MTcyOTg2MzA0N30.65ymYUDaknecqGFtACg0GUcurIEisjRFMvV944kxd6M"
    );
    getProblemComments({problem:problem}).then((res)=>{
      setProblemInfo(res.data)
    })
  },[problemInfo]);
  
  console.log(problemInfo)

  
  return (
    <>
      
      <Header />
      <PageContainer className="xl:px-[150px] lg:px-[100px] md:px-50 sm:px-10">
        <DiscussionHeader />
        
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </PageContainer>
    </>
  );
};

export default DiscussionPage;
