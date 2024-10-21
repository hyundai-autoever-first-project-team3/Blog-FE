import React from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";

function InfoBar() {
  return (
    <div>
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
          <FavoriteIcon />
          카운트
        </Button>
      </div>
    </div>
  );
}

export default InfoBar;
