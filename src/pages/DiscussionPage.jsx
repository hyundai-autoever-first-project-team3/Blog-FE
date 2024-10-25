import React, { useEffect } from "react";
import Header from "../components/common/Header";
import PageContainer from "../components/common/PageContainer";
import { DiscussionHeader } from "../components/challenge/DiscussionHeader";
import { Comment } from "../components/challenge/Comment";
import { getProblemComments } from "../api/problem";
import { useParams } from "react-router-dom";
import { setCookie } from "../api/cookie";

const DiscussionPage = () => {
  const {challengeId, problemId} = useParams();
  const [problemInfo, setProblemInfo] = React.useState([])
  
 
  useEffect(()=>{
    
    getProblemComments({problemId: problemId, challengeId:challengeId}).then((res)=>{
      setProblemInfo(res.data)
    })
  },[problemId, challengeId]);
  
  console.log(problemInfo)
  console.log(problemInfo.problemCommentsList?.content)
  

  
  return (
    <>
      
      <Header />
      <PageContainer className="xl:px-[150px] lg:px-[100px] md:px-50 sm:px-10">
        <DiscussionHeader 
        problemTitle={problemInfo.problemTitle} 
        siteKinds={problemInfo.siteKinds}
        />
        
        {problemInfo?.problemCommentsList?.content?.map((comment) => (
          <Comment
          key={comment.nickname}
          nickname={comment.nickname} // 닉네임
          profileImage={comment.profileImage} // 프로필 이미지
          content={comment.content} // 댓글 내용
          createdAt={comment.createdAt} // 작성 시간 (필요할 경우)
        />)
        )}
        
        
      </PageContainer>
    </>
  );
};

export default DiscussionPage;
