import React from "react";

const PostComment = ({
  id,
  content,
  createdAt,
  updatedAt,
  writerId,
  nickName,
  profile,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="flex flex-col justify-items-start my-8" key={id} id={id}>
        <div className="flex flex-row items-center mb-2 ">
          <img className="size-16 rounded-full" src={profile} alt="" />
          <div className="flex flex-col px-4">
            <div className="text-lg font-semibold ">{nickName}</div>
            <div className="text-md ">{formattedDate}</div>
          </div>
        </div>
        <div className="text-xl">{content}</div>

        <hr className="my-4" />
      </div>
    </>
  );
};

export default PostComment;
