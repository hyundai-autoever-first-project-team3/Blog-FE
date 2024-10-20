import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const PostDetailPage = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "space-between",
          alignItems: "center",
          width: `calc(100% - 2rem)`,
        }}
      >
        <h2>LOGO</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SearchIcon style={{ marginRight: "0.5rem" }} />
          <Button
            variant="contained"
            color="success"
            style={{ borderRadius: "1rem" }}
          >
            로그인
          </Button>
        </div>
      </div>

      <div
        className="head-wrapper"
        style={{ width: "768px", marginLeft: "auto", marginRight: "auto" }}
      >
        <h1 style={{ marginBottom: "2rem" }}>
          글제목 Lorem ipsum dolor sit amet.
        </h1>
        <div
          className="info"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ marginRight: "1rem" }}>작성자</span>
            <span>작성날짜</span>
          </div>
          <Button
            variant="outlined"
            color="success"
            style={{ borderRadius: "1rem" }}
          >
            좋아요
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
