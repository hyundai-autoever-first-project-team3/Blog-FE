import React from "react";

const PostComment = ({
  key,
  id,
  content,
  createdAt,
  updatedAt,
  writerId,
  writerNickname,
  writerProfileImage,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div
        className="flex flex-col justify-items-start py-4 px-1 border border-b-gray-3 min-h-[140px] border-x-0 border-t-0"
        key={key}
        id={id}
      >
        <div className="flex flex-row items-center">
          <img
            className="size-12 rounded-full"
            src={writerProfileImage}
            alt=""
          />
          <div className="flex flex-col px-4">
            <div className="text-lg font-semibold">{writerNickname}</div>
            <div className="text-sm text-gray-5">{formattedDate}</div>
          </div>
        </div>
        <div className="text-lg font-thin text-gray-8 py-6">{content}</div>
      </div>
    </>
  );
};

export default PostComment;
