import React from "react";
import { Box, Button, IconButton, Menu, MenuItem, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faX,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { getCookie, removeCookie } from "../../api/cookie";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width:550px)");
  const { data, refetch } = useGetUserInfo(getCookie("accessToken"));

  // 프로필 메뉴 클릭
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (url) => {
    handleMenuClose();
    navigate(url);
  };

  const handleKakaoLogin = () => {
    window.location.href =
      "https://codingcare.site/api/oauth2/authorization/kakao";
  };
  const handleGithubLogin = () => {
    window.location.href =
      "https://codingcare.site/api/oauth2/authorization/github";
  };

  // 로그인 모달
  const handleModalOpen = () => {
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
  };
  const handleLogout = () => {
    handleMenuClose();
    removeCookie("accessToken");
    navigate("/");
    refetch();
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between p-3 shadow-sm">
        <div className="w-full max-w-[1400px] m-auto flex flex-row justify-between">
          <div
            className="text-2xl font-extrabold cursor-pointer"
            onClick={() => navigate("/")}
          >
            CodingCare
          </div>
          <div className="flex flex-row items-center gap-3">
            <IconButton aria-label="alarm">
              <FontAwesomeIcon icon={faBell} />
            </IconButton>
            <IconButton aria-label="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </IconButton>
            {data ? (
              <div className="flex flex-row items-center gap-1">
                <img
                  src={data?.profileImage}
                  alt="profile"
                  className="object-cover w-10 h-10 rounded-full"
                />
                <IconButton
                  onClick={handleMenuClick}
                  size="small"
                  aria-controls={menuOpen ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={menuOpen ? "true" : undefined}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                </IconButton>
              </div>
            ) : (
              <Button
                variant="contained"
                sx={{ color: "white", backgroundColor: "black" }}
                onClick={handleModalOpen}
              >
                로그인
              </Button>
            )}
          </div>
        </div>
      </div>
      <Modal open={modal} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "70%" : 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            paddingY: 3,
            paddingX: 4,
            borderRadius: "8px",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleModalClose}
            sx={{ position: "absolute", top: 5, right: 5 }}
          >
            <FontAwesomeIcon icon={faX} />
          </IconButton>
          <div className="flex flex-col">
            <div className="text-xl font-semibold">로그인</div>
            <div className="mb-5 text-lg">소셜 계정으로 로그인</div>
            <div className="flex flex-col gap-3">
              <button
                className="py-3 bg-yellow-400 rounded-md text-yellow-950"
                onClick={handleKakaoLogin}
              >
                카카오 계정으로 로그인
              </button>
              <button
                className="py-3 text-white bg-black rounded-md"
                onClick={handleGithubLogin}
              >
                GitHub 계정으로 로그인
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={menuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 2,
            minWidth: "200px",
          },
        }}
        MenuListProps={{
          sx: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{ paddingY: "12px" }}
          onClick={() => handleMenuItemClick("/posts/write")}
        >
          새 글 작성
        </MenuItem>
        <MenuItem
          sx={{ paddingY: "12px" }}
          onClick={() => handleMenuItemClick("/mypage")}
        >
          마이페이지
        </MenuItem>
        <MenuItem
          sx={{ paddingY: "12px" }}
          onClick={() => handleMenuItemClick("/setting")}
        >
          설정
        </MenuItem>
        <MenuItem sx={{ paddingY: "12px" }} onClick={handleLogout}>
          로그아웃
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
