import React, { useState } from "react";
import { Button } from "@mui/material";

export const DiscussionHeader = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`입력한 값: ${inputValue}`);
  };
  return (
    <div>
      {/* <Button
        variant="contained"
        sx={{ color: "white", backgroundColor: "black" }}
      >
        챌린지로 돌아가기
      </Button> */}

      <div className="my-2">
        <span className="text-lg mx-4 mr-10">백준</span>
        <span className="text-2xl">아기상어</span>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="w-96">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="border w-full p-1 m-2 "
              placeholder="여기에 입력하세요"
            />
          </div>
          <div className="mx-8">
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ color: "white", backgroundColor: "black" }}
            >
              제출
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
