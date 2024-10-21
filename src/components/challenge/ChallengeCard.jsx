import React from "react";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMedal } from "@fortawesome/free-solid-svg-icons";

const ChallengeCard = () => {
  const tags = ["백준-동전", "프로그래머스-등굣길", "LeetCode-Prefix"];
  return (
    <div className="flex flex-col justify-between min-h-40 h-full shadow-md rounded-md p-4 border">
      <div className="flex flex-col ">
        <div className="flex flex-row justify-end">
          <FontAwesomeIcon icon={faMedal} style={{ color: "#FFD43B" }} />
        </div>
        <div className="text-lg font-semibold">BFS/DFS 알고리즘</div>
        <div className="flex flex-row flex-wrap gap-2">
          {tags.map((item) => (
            <div className="text-sm">#{item}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div>
          <Button
            variant="outlined"
            color="success"
            style={{ borderRadius: "1rem" }}
          >
            챌린지방?
          </Button>
          <Button
            variant="contained"
            color="success"
            style={{ borderRadius: "1rem" }}
          >
            도전하기
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-base">조회수 {234}</div>
        <div className="text-base font-thin text-gray-3">2024년 10월 18일</div>
      </div>
    </div>
  );
};

export default ChallengeCard;
