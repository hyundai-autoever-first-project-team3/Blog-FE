import React from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center py-3 px-2">
      <div>로고로고</div>
      <div className="flex flex-row gap-3">
        <IconButton aria-label="alarm">
          <FontAwesomeIcon icon={faBell} />
        </IconButton>
        <IconButton aria-label="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconButton>
        <Button text="로그인" />
      </div>
    </div>
  );
};

export default Header;
