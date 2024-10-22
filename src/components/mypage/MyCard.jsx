import React from "react";

const MyCard = () => {
  return (
    <div className="flex flex-col justify-between min-h-40 h-full shadow-md rounded-md p-4 border hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 gap-5">
      <div className="text-xl font-semibold">
        백준 파이썬 [1929] 소수 구하기
      </div>
      <div className="text-base text-gray-8 lg:min-h-[100px]">
        최근 싸이컴에서 제작한 게임 ‘입부 전쟁’에서는 다양한 아이템을 활용해
        전쟁의 승리 확률을 높일 수 있습니다. 아이템은 한 번에 𝑁개씩 강화할 수
        있습니다. 강화력이 각각 𝐴1,𝐴2,⋯,𝐴𝑁개의 아이템을 강화하려고 할 때,
        아이템을 강화하는 방법은 다음과 같습니다.
      </div>
      <div className="flex flex-row gap-5">
        <div className="text-sm text-gray-6">2024년 10월 18일</div>
        <div className="text-sm text-gray-6">1개의 댓글</div>
        <div className="text-sm text-gray-6">♥ 3</div>
      </div>
    </div>
  );
};

export default MyCard;
