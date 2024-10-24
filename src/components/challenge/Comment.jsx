import React from "react";
import { Button } from "@mui/material";

export const Comment = () => {
  return (
    <div>
      <div className="flex flex-row items-center my-2">
        <img
          className="size-16 rounded-full"
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt=""
        />
        <div className="flex flex-col px-4">
          <div className="text-xl font-bold mx-1">
            이거 어떻게 풀어요? 힌트 주세요
          </div>
          <div flex flex-row>
            <span className="text-lg mx-1 mr-10">고채린</span>
            <span className="text-lg mx-3 mr-10 ">2024-10-20</span>
            <span className="text-lg mx-3 mr-10">댓글 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
