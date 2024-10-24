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
import { getLikeCount, getlikeCount } from "../api/postdetail";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
  const [token, setToken] = React.useState("");
  const [postsDetail, setPostsDetail] = React.useState(null);

  const { postId } = useParams("postId");

  console.log(postsDetail);
  // console.log(postsDetail.til);
  // console.log(postsDetail.memberWriterDto);
  // console.log(likeCounts);

  useEffect(() => {
    getTILDetail({ tilId: postId }).then((res) => setPostsDetail(res.data));
  }, [postId]);

  return (
    <>
      <Header />
      <PageContainer className="xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3">
        <h1 className="text-5xl font-extrabold mb-8 mt-10 lg:mt-20">
          {/* {postId?.til.title} */}
          {postsDetail?.til.title}
        </h1>
        <InfoBar
          updatedAt={postsDetail?.til.updatedAt}
          likeCount={postsDetail?.likeCounts}
          writerNickname={postsDetail?.memberWriterDto.nickname}
        />
        <div className="tagwrap">
          <Chip
            icon={<Tag />}
            // label="DFS"
            label={postsDetail?.algorithm}
            // label={postsDetail?.til.algorithm}
            variant="outlined"
            color="success"
            className="m-1 my-2"
          />
        </div>
        <div className="mt-10">
          <span className="text-lg">{postsDetail?.til.content}</span>

          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt=""
          />
        </div>
        <Footer
          nickname={postsDetail.memberWriterDto.nickname}
          intro={postsDetail.memberWriterDto.intro}
          profileImage={postsDetail.memberWriterDto.profileImage}
        />
        <div className="flex items-center justify-center w-full my-10">
          <Pagination count={10} color="success" />
        </div>
      </PageContainer>
    </>
  );
};

export default PostDetailPage;
