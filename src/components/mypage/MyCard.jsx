import React from "react";

const MyCard = ({
  id,
  title,
  content,
  createdAt,
  likeCount,
  commentCount,
  onClick,
}) => {
  // 날짜 가공
  const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="flex flex-col justify-between min-h-40 h-full shadow-md rounded-md p-4 border hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 gap-5"
      id={id}
      onClick={onClick}
    >
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-base text-gray-8 lg:min-h-[100px]">{content}</div>
      <div className="flex flex-row gap-5">
        <div className="text-sm text-gray-6">{formattedDate}</div>
        <div className="text-sm text-gray-6">{commentCount}개의 댓글</div>
        <div className="text-sm text-gray-6">♥ {likeCount}</div>
      </div>
    </div>
  );
};

export default MyCard;
