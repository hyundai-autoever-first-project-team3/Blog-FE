import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({
  id,
  title,
  thumbnail,
  content,
  createdAt,
  writerNickname,
  likeCount = 0,
  onClick,
  writerProfile,
}) => {
  // 날짜 가공
  const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const addDefaultThumbnail = (e) => {
    e.currentTarget.src =
      "https://velog.velcdn.com/images/k-svelte-master/post/43c86caf-fed8-4ab2-a98a-990b565efe0a/image.gif";
  };

  return (
    <div
      id={id}
      className="flex flex-col w-full h-full px-2 min-w-[320px] max-w-[720px] shadow-md border hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
      onClick={onClick}
    >
      <img
        src={
          thumbnail ||
          "https://velog.velcdn.com/images/k-svelte-master/post/43c86caf-fed8-4ab2-a98a-990b565efe0a/image.gif"
        }
        alt="dummy"
        className="w-full object-cover max-h-60 mb-2"
        onError={addDefaultThumbnail}
      />
      <div className="text-lg font-black truncate w-full px-1 mb-1">
        {title}
      </div>
      <div className="flex-grow text-base font-normal w-full px-1 line-clamp-3 mb-3">
        {content}
      </div>
      <div className="text-sm text-gray-5 py-3">{formattedDate}</div>
      <hr />
      <div className="flex flex-row justify-between items-center py-2 px-2">
        <div className="flex flex-row gap-2 items-center">
          <img
            src={writerProfile}
            alt="profile"
            className="w-8 h-8 rounded-full object-contain"
          />
          <div> by {writerNickname}</div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faHeart} />
          {likeCount}
        </div>
      </div>
    </div>
  );
};

export default Card;
