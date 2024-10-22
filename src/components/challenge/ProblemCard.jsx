import React from "react";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMedal } from "@fortawesome/free-solid-svg-icons";

const ProblemCard = () => {
  const tags = ["hard", "medium", "easy"];
  return (
    <div className="flex min-h-30 justify-between h-full py-5 px-3 my-5 border-2 p-2 rounded-lg shadow-sm">
      <div className="flex flex-col px-3">
        <div className="text-xl font-semibold mb-2">경로찾기</div>
        <div className="text-lg">백준</div>
        <div className="text- lg">{tags[0]}</div>
      </div>

      <div className="flex flex-row items-center ">
        <div className="flex flex-col mx-4 ">
          <Button
            className="my-2"
            variant="outlined"
            color="success"
            style={{ borderRadius: "1rem" }}
          >
            질문방
          </Button>
          <Button
            className="my-2"
            variant="contained"
            color="success"
            style={{ borderRadius: "1rem" }}
          >
            도전하기
          </Button>
        </div>
        <div className="absolute top-0 right-5">
          <FontAwesomeIcon
            icon={faMedal}
            style={{ color: "#FFD43B" }}
            className="fa-4x"
          />
        </div>
      </div>
      {/* justify-between min-h-40 h-full shadow-md rounded-md p-4 border */}
      {/* 아이콘 */}
      {/* <div className="flex flex-row justify-end">
        <FontAwesomeIcon icon={faMedal} style={{ color: "#FFD43B" }} />
      </div> */}

      {/* 버튼 */}
      {/* <div>
          <Button
            variant="outlined"
            color="success"
            style={{ borderRadius: "1rem" }}
          >
            질문방
          </Button>
          <Button
            variant="contained"
            color="success"
            style={{ borderRadius: "1rem" }}
          >
            도전하기
          </Button>
        </div> */}
    </div>
  );
};

export default ProblemCard;
