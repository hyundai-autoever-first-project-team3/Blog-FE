import React from "react";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth } from "../../hooks/useAuth";

const InfoBar = ({ updatedAt, writerNickname, likeCount, onClick }) => {
  // 날짜 가공

  const { isLoggedIn } = useAuth;
  const formattedDate = new Date(updatedAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold" style={{ marginRight: "1rem" }}>
            {writerNickname}
          </span>
          <span>{formattedDate}</span>
        </div>
        <div>
          {/* 로그인 여부에 따라 버튼 노출 달라짐 */}
          <div className="flex">
            <Button variant="outlined">삭제</Button>
            <Button variant="outlined">수정</Button>
          </div>
          <Button
            size="medium"
            variant="outlined"
            color="#eee"
            startIcon={<FavoriteIcon sx={{ color: "#F20789" }} />}
            sx={{ borderRadius: "1rem" }}
          >
            {likeCount}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
