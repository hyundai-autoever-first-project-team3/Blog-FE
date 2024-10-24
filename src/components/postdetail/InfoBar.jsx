import React from "react";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const InfoBar = ({
  id,
  createdAt,
  updatedAt,
  writerNickname,
  likeCount = 0,
  onClick,
  thumbnailImage,
}) => {

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold" style={{ marginRight: "1rem" }}>
            {}
          </span>
          <span>{createdAt}</span>
        </div>
        <div>
          {/* 로그인 여부에 따라 버튼 노출 달라짐 */}
          <div className="flex">
            <Button variant="outlined">삭제</Button>
            <Button variant="outlined">수정</Button>
          </div>
          <Button
            variant="outlined"
            color="#eee"
            startIcon={<FavoriteIcon sx={{ color: "#F20789" }} />}
            sx={{ borderRadius: "1rem" }}
          >
            101
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
