import React from "react";

import Header from "../components/common/Header";
import InfoBar from "../components/postdetail/InfoBar";
import PageContainer from "../components/common/PageContainer";

import Button from "@mui/material/Button";
import Footer from "../components/postdetail/Footer";

const PostDetailPage = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <h1
          className="text-5xl font-extrabold"
          style={{ marginBottom: "2rem" }}
        >
          글제목 Lorem ipsum dolor sit amet.
        </h1>

        <InfoBar />

        <div className="tagwrap">
          <Button
            variant="outlined"
            color="success"
            style={{ borderRadius: "1rem", margin: "1rem" }}
          >
            #DFS
          </Button>
          <Button
            variant="outlined"
            color="success"
            style={{ borderRadius: "1rem" }}
          >
            #BFS
          </Button>
        </div>
        <div>
          <span>
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
      </PageContainer>
    </div>
  );
};

export default PostDetailPage;
