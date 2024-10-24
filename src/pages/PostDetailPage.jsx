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

const PostDetailPage = () => {
  const [postsDetail, setPostsDetail] = React.useState(null);
  const { postId } = useParams("postId");

  // 날짜 가공
  const formattedDate = new Date(postsDetail?.createdAt).toLocaleDateString(
    "ko-KR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  useEffect(() => {
    getTILDetail({ tilId: postId }).then((res) => setPostsDetail(res.data.til));
  }, [postId]);

  return (
    <>
      <Header />
      <PageContainer className="xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3">
        <h1 className="text-5xl font-extrabold mb-8 mt-10 lg:mt-20">
          {postsDetail?.title}
        </h1>
        <InfoBar createdAt={formattedDate} />
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
          <span className="text-lg">{postsDetail?.content}</span>

          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            // src="{postDetail?.img}"
            alt=""
          />
        </div>
        <Footer />
        <div className="flex items-center justify-center w-full my-10">
          <Pagination count={10} color="success" />
        </div>
      </PageContainer>
    </>
  );
};

export default PostDetailPage;
