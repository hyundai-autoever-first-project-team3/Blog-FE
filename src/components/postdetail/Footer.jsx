import React from "react";
import { Button } from "@mui/material";

const Footer = ({ nickname, profileImage, intro }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center my-20 h-32 ">
        <div className="flex flex-row items-center">
          <img
            className="size-32 rounded-full"
            // src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            src={profileImage}
            alt=""
          />
          <div className="flex flex-col px-4">
            <div className="text-2xl font-bold">{nickname}</div>
            <div className="text-lg">{intro}데이터가 없다</div>
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
