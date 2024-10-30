import React, { useState } from "react";
import Header from "../components/common/Header";
import PageContainer from "../components/common/PageContainer";
import { useGetProblemComments } from "../hooks/useGetProblemComments";
import { useParams } from "react-router-dom";
import { Button, Chip, TextField } from "@mui/material";
import { postProblemComment } from "../api/challenge";
import PostComment from "../components/postdetail/PostComment";
import { Tag } from "@mui/icons-material";

const DiscussionPage = () => {
  const { challengeId, problemId } = useParams();
  const { data, refetch } = useGetProblemComments({
    challengeId: challengeId,
    problemId: problemId,
  });

  const [newComment, setNewComment] = useState("");

  const handlePostProblemComment = () => {
    postProblemComment({
      challengeId: challengeId,
      problemId: problemId,
      content: newComment,
    }).then((res) => {
      console.log(res);
      refetch();
      setNewComment("");
    });
  };

  return (
    <>
      <Header />
      <PageContainer className="xl:px-[150px] lg:px-[100px] md:px-50 sm:px-10 mt-5">
        <div className="flex flex-row gap-3 mb-5">
          <Chip
            icon={<Tag />}
            label={data?.problemTitle}
            variant="outlined"
            color="success"
            sx={{
              padding: "10px",
              "& .MuiChip-label": {
                fontSize: "24px !important", // Chip 내 레이블에 대한 폰트 크기 설정
                fontWeight: 600,
              },
            }}
          />
          <Chip
            icon={<Tag />}
            label={data?.siteKinds}
            variant="outlined"
            color="success"
            sx={{
              padding: "10px",
              "& .MuiChip-label": {
                fontSize: "24px !important", // Chip 내 레이블에 대한 폰트 크기 설정
                fontWeight: 600,
              },
            }}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="self-start text-2xl font-semibold">
            {data?.problemCommentsList?.content.length || 0}개의 댓글
          </div>
          <TextField
            value={newComment}
            multiline
            rows={5}
            placeholder="댓글을 작성하세요"
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            sx={{
              alignSelf: "end",
            }}
            onClick={handlePostProblemComment}
            disabled={!newComment}
          >
            댓글 작성
          </Button>
        </div>
        {data?.problemCommentsList?.content.map((item) => (
          <PostComment
            id={item.id}
            key={item.id}
            writerNickname={item.nickname}
            writerProfileImage={item.profileImage}
            createdAt={item.createdAt}
            content={item.content}
          />
        ))}
      </PageContainer>
    </>
  );
};

export default DiscussionPage;
