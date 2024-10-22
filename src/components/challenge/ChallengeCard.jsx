import React from "react";

const ChallengeCard = () => {
  const tags = ["백준-동전", "프로그래머스-등굣길", "LeetCode-Prefix"];
  return (
    <div className="flex flex-col justify-between min-h-40 h-full shadow-md rounded-md p-4 border hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex flex-col ">
        <div className="text-lg font-semibold">BFS/DFS 알고리즘</div>
        <div className="flex flex-row flex-wrap gap-2">
          {tags.map((item) => (
            <div className="text-sm">#{item}</div>
          ))}
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
