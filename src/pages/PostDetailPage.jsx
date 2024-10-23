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
  const [token, setToken] = React.useState("");
  const [postsDetail, setPostsDetail] = React.useState(null);
  const { postId } = useParams("postId");

  console.log(postsDetail);

  useEffect(() => {
    setCookie(
      "accessToken",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb2NpYWwiOiJrYWthbyIsImVtYWlsIjoiZ29jaGVsaW5AbmF2ZXIuY29tIiwicHJvZmlsZUltYWdlIjoiaHR0cDovL2sua2FrYW9jZG4ubmV0L2RuL29iT0dmL2J0c0pOZmxZb09XL0QxS2lzNU5ycTBkOExQWFliYjlHNzEvaW1nXzY0MHg2NDAuanBnIiwicm9sZSI6Ik1FTUJFUiIsIm5hbWUiOiLqs6DssYTrprAiLCJpYXQiOjE3Mjk3MTQxMjUsImV4cCI6MTcyOTc1MDEyNX0.rEgpc45T-Gu0My17Bp8tkjOiUEb-N43tfsBWBP4ZwUI"
    );

    getTILDetail({ tilId: postId }).then((res) => setPostsDetail(res.data.til));
  }, [postId]);

  return (
    <div>
      <Header />
      <PageContainer className="xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3">
        <h1 className="text-5xl font-extrabold mb-8 mt-10 lg:mt-20">
          {postsDetail?.title}
        </h1>
        <InfoBar />
        <div className="tagwrap">
          <Chip
            icon={<Tag />}
            // label="DFS"
            label={postsDetail?.tag}
            variant="outlined"
            color="success"
            className="m-1 my-2"
          />
          <Chip
            icon={<Tag />}
            label="BFS"
            variant="outlined"
            color="success"
            className="m-1 my-2"
          />
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
    </div>
  );
};

export default PostDetailPage;
