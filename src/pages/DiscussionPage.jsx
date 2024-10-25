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
