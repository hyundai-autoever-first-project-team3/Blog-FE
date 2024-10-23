import React from "react";
import { Box, Button, IconButton, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [modal, setModal] = React.useState(false);

  // const handleKakaoLogin = () => {
  //   window.location.href =
  //     "https://codingcare.site/api/oauth2/authorization/kakao";
  // };
  // const handleGithubLogin = () => {
  //   window.location.href =
  //     "https://codingcare.site/api/oauth2/authorization/github";
  // };
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
            paddingY: 3,
            paddingX: 4,
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
          <div className="flex flex-col">
            <div className="text-xl font-semibold">로그인</div>
            <div className="text-lg mb-5">소셜 계정으로 로그인</div>
            <div className="flex flex-col gap-3">
              <button className="bg-yellow-400 text-yellow-950 rounded-md py-3">
                카카오 계정으로 로그인
              </button>
              <button className="bg-black text-white rounded-md py-3">
                GitHub 계정으로 로그인
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Header;
