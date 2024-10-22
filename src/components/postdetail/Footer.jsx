import React from "react";

import { Button } from "@mui/material";

function Footer() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-40 h-32 ">
        <div className="flex flex-row items-center">
          <img
            className="size-32 rounded-full"
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt=""
          />
          <div className="flex flex-col px-4">
            <div className="text-2xl font-bold">고채린</div>
            <div className="text-lg">나는 개발자다</div>
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
}

export default Footer;
