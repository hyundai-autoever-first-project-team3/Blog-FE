import React from "react";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth } from "../../hooks/useAuth";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { getCookie } from "../../api/cookie";
import { deleteTIL } from "../../api/detail";
import { useNavigate } from "react-router-dom";

const InfoBar = ({
  tilId,
  isOwner,
  updatedAt,
  writerNickname,
  likeCount = 0,
}) => {
  const navigate = useNavigate();
  const { data } = useGetUserInfo(getCookie("accessToken"));
  const formattedDate = new Date(updatedAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { isLoggedIn } = useAuth();

  const handleDeletePost = () => {
    deleteTIL({ tilId: tilId }).then((res) => {
      navigate("/");
    });
  };

  const handlePatchPost = () => {
    navigate(`/posts/${tilId}`);
  };

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
          {isOwner ? (
            <div className="flex">
              <Button variant="outlined" onClick={handleDeletePost}>
                삭제
              </Button>
              <Button variant="outlined" onClick={handlePatchPost}>
                수정
              </Button>
            </div>
          ) : (
            <Button
              size="medium"
              variant="outlined"
              color="#eee"
              startIcon={<FavoriteIcon sx={{ color: "#F20789" }} />}
              sx={{ borderRadius: "1rem" }}
              disabled={!isLoggedIn}
            >
              {likeCount}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
