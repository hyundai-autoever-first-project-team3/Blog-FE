import React from "react";
import { Box, Button, IconButton, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [modal, setModal] = React.useState(false);

  const handleKakaoLogin = () => {
    window.location.href =
      "https://192.168.202.135:8080/oauth2/authorization/kakao";
  };
  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center py-3 px-2">
        <div>로고로고</div>
        <div className="flex flex-row gap-3">
          <IconButton aria-label="alarm">
            <FontAwesomeIcon icon={faBell} />
          </IconButton>
          <IconButton aria-label="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </IconButton>
          <Button
            variant="contained"
            sx={{ color: "white", backgroundColor: "black" }}
            onClick={handleOpenModal}
          >
            로그인
          </Button>
        </div>
      </div>
      <Modal open={modal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 5, right: 5 }}
          >
            <FontAwesomeIcon icon={faX} />
          </IconButton>
          <div className="flex flex-col ">
            <div className="text-lg font-semibold">로그인 모달</div>
            <div className="text-base">소셜 계정으로 로그인</div>
            <div>
              <button onClick={handleKakaoLogin}>카카오</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Header;
