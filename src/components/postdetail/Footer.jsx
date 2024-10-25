import React from "react";
import { Button } from "@mui/material";

const Footer = ({ nickname, profileImage, intro }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center my-20 h-32 ">
        <div className="flex flex-row items-center">
          <img className="size-32 rounded-full" src={profileImage} alt="" />
          <div className="flex flex-col px-4">
            <div className="text-2xl font-bold">{nickname}</div>
            <div className="text-lg">{intro}</div>
          </div>
        </div>
        <Button
          variant="outlined"
          color="success"
          style={{ borderRadius: "1rem", margin: "1rem" }}
        >
          팔로우
        </Button>
      </div>
    </div>
  );
};

export default Footer;
