import React, { useEffect } from "react";
import Header from "../components/common/Header";
import InfoBar from "../components/postdetail/InfoBar";
import PageContainer from "../components/common/PageContainer";
import Chip from "@mui/material/Chip";
import Footer from "../components/postdetail/Footer";
import { Tag } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import PostComment from "../components/postdetail/PostComment";
import MDEditor from "@uiw/react-md-editor/nohighlight";
import { Button, TextField } from "@mui/material";
import { useGetTILDetail } from "../hooks/useGetTILDetail";
import { postComment } from "../api/detail";

const PostDetailPage = () => {
  // const [postsDetail, setPostsDetail] = React.useState(null);
  const [newComment, setNewComment] = React.useState("");
  const { postId } = useParams("postId");
  const { data: postsDetail, refetch } = useGetTILDetail({ postId: postId });

  console.log(newComment);
  const handlePostComment = () => {
    postComment({ tilId: postId, content: newComment }).then((res) => {
      console.log(res);
      refetch();
      setNewComment("");
    });
  };

  // postId가 변경될 때마다 데이터 갱신
  useEffect(() => {
    if (postId) {
      refetch();
    }
  }, [postId]); // postsDetail 의존성 제거

  return (
    <>
      <Header />
      <PageContainer className="px-2 xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3 pt-3">
        <h1 className="mt-10 mb-8 text-5xl font-extrabold lg:mt-20">
          {postsDetail?.til.title}
        </h1>
        <InfoBar
          tilId={postsDetail?.til.id}
          isOwner={postsDetail?.isOwner}
          userId={postsDetail?.memberWriterDto.id}
          writerId={postsDetail?.til.memberId}
          updatedAt={postsDetail?.til.updatedAt}
          likeCount={postsDetail?.likeCounts}
          writerNickname={postsDetail?.memberWriterDto.nickname}
          liked={postsDetail?.liked}
        />
        <div className="tagwrap">
          {postsDetail?.site && (
            <Chip
              icon={<Tag />}
              label={postsDetail?.til.site}
              variant="outlined"
              color="success"
              className="m-1 my-2"
            />
          )}
          {postsDetail?.language && (
            <Chip
              icon={<Tag />}
              label={postsDetail?.til.language}
              variant="outlined"
              color="success"
              className="m-1 my-2"
            />
          )}
          {postsDetail?.algorithm && (
            <Chip
              icon={<Tag />}
              label={postsDetail?.algorithm}
              variant="outlined"
              color="success"
              className="m-1 my-2"
            />
          )}
        </div>
        <div className="mt-10" data-color-mode="light">
          <MDEditor.Markdown
            source={postsDetail?.til.content}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
        <Footer
          nickname={postsDetail?.memberWriterDto.nickname}
          intro={postsDetail?.memberWriterDto.intro}
          profileImage={postsDetail?.memberWriterDto.profileImage}
        />
        <div className="flex flex-col w-full gap-2">
          <div className="self-start text-2xl font-semibold">
            {postsDetail?.commentCounts || 0}개의 댓글
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
            onClick={handlePostComment}
          >
            댓글 작성
          </Button>
        </div>
        <div className="mt-12">
          {postsDetail?.commentDetailDtos.map((item) => (
            <PostComment
              key={item.id} // Ensure each child has a unique key
              id={item.id}
              content={item.content}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              writerId={item.writerId}
              writerNickname={item.writerNickname}
              writerProfileImage={item.writerProfileImage}
            />
          ))}
        </div>
      </PageContainer>
    </>
  );
};

export default PostDetailPage;
