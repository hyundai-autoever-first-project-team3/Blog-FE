import React from "react";

const PostComment = () => {
  return (
    <div>
      <div className="flex flex-row items-center my-5">
        <img
          className="size-16 rounded-full"
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt=""
        />
        <div className="flex flex-col px-4">
          <div className="text-xl font-bold mx-1">
            아주 좋은 글이에요 도움이 됩니다.
          </div>
          <div flex flex-row>
            <span className="text-lg mx-1 mr-5">고채린</span>
            <span className="text-lg mx-3 mr-10 ">2024-10-20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
