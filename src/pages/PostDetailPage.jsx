import React from "react";
import Header from "../components/common/Header";
import InfoBar from "../components/postdetail/InfoBar";
import PageContainer from "../components/common/PageContainer";
import Pagination from "@mui/material/Pagination";
import Chip from "@mui/material/Chip";
import Footer from "../components/postdetail/Footer";
import { Tag } from "@mui/icons-material";

const PostDetailPage = () => {
  return (
    <div>
      <Header />
      <PageContainer className="xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3">
        <h1 className="text-5xl font-extrabold mb-8 mt-10 lg:mt-20">
          글제목 Lorem ipsum dolor sit amet.
        </h1>
        <InfoBar />
        <div className="tagwrap">
          <Chip
            icon={<Tag />}
            label="DFS"
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
          <span className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at aut
            dolor quidem quam iste impedit ipsa nihil consequuntur deserunt
            eaque, quae ex minima saepe? Explicabo natus quibusdam debitis
            consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Illo at aut dolor quidem quam iste impedit ipsa nihil
            consequuntur deserunt eaque, quae ex minima saepe? Explicabo natus
            quibusdam debitis consequatur.
          </span>

          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
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
