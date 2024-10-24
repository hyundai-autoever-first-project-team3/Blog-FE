import React from "react";

const PostComment = () => {
  return (
    <div>
      <div className="flex flex-col justify-items-start my-8">
        <div className="flex flex-row items-center mb-2 ">
          <img
            className="size-16 rounded-full"
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt=""
          />
          <div className="flex flex-col px-4">
            <div className="text-lg font-semibold ">고채린</div>
            <div className="text-md ">2024년 10월 20일</div>
          </div>
        </div>
        <div className="text-xl">
          블로그 글 정말 잘 읽었습니다.글을 통해 많은 정보를 얻을 수 있었고
          앞으로도 좋은 글 많이 기대하겠습니다!
        </div>

        <hr className="my-4" />
      </div>
    </div>
  );
};

export default PostComment;
