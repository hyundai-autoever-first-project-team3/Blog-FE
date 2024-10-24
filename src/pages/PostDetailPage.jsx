import React, { useEffect } from "react";
import Header from "../components/common/Header";
import InfoBar from "../components/postdetail/InfoBar";
import PageContainer from "../components/common/PageContainer";
import Pagination from "@mui/material/Pagination";
import Chip from "@mui/material/Chip";
import Footer from "../components/postdetail/Footer";
import { Tag } from "@mui/icons-material";
import { setCookie } from "../api/cookie";
import { getTILDetail } from "../api/main";
import { useParams } from "react-router-dom";
import PostComment from "../components/postdetail/PostComment";
import MDEditor from "@uiw/react-md-editor/nohighlight";
import { Button, TextField } from "@mui/material";

const PostDetailPage = () => {
  const [postsDetail, setPostsDetail] = React.useState(null);
  const [newComment, setNewComment] = React.useState("");

  const { postId } = useParams("postId");

  useEffect(() => {
    getTILDetail({ tilId: postId }).then((res) => setPostsDetail(res.data));
  }, [postId]);

  return (
    <>
      <Header />
      <PageContainer className="px-3 xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3">
        <h1 className="text-5xl font-extrabold mb-8 mt-10 lg:mt-20">
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
        />
        <div className="tagwrap">
          {postsDetail?.site && (
            <Chip
              icon={<Tag />}
              label={postsDetail?.site}
              variant="outlined"
              color="success"
              className="m-1 my-2"
            />
          )}
          {postsDetail?.language && (
            <Chip
              icon={<Tag />}
              label={postsDetail?.language}
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
        <div className="mt-10">
          <MDEditor.Markdown
            source={postsDetail?.content}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
        <Footer
          nickname={postsDetail?.memberWriterDto.nickname}
          intro={postsDetail?.memberWriterDto.intro}
          profileImage={postsDetail?.memberWriterDto.profileImage}
        />
        <div className="flex items-center justify-center w-full my-10">
          <Pagination count={10} color="success" />
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="text-2xl font-semibold self-start">
            {postsDetail?.commentCounts}개의 댓글
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
          >
            댓글 작성
          </Button>
        </div>
        <div className="mt-12">
          {postsDetail?.commentDetailDtos.map((item) => (
            <PostComment
              id={postsDetail?.commentDetailDtos.id}
              content={postsDetail?.commentDetailDtos.content}
              nickName={postsDetail?.commentDetailDtos.writerNickname}
              profile={postsDetail?.commentDetailDtos.writerProfileImage}
            />
          ))}
        </div>
      </PageContainer>
    </>
  );
};

export default PostDetailPage;
