import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ profileName = "이효원", likeCount = 123 }) => {
  return (
    <div className="flex flex-col w-full h-full px-2 min-w-[320px] max-w-[720px] shadow-md">
      <img
        src="https://velog.velcdn.com/images/k-svelte-master/post/43c86caf-fed8-4ab2-a98a-990b565efe0a/image.gif
"
        alt="dummy"
        className="w-full object-cover max-h-60 mb-2"
      />
      <div className="text-lg font-black truncate w-full px-1 mb-1">
        프론트엔드 개발자라면 페이지 전환 정도는 할 수 있어야죠? 못한다고요? 😱
      </div>
      <div className="text-base font-normal w-full px-1 line-clamp-3 mb-3">
        이제 이거 하면 경쟁력 바로 가집니다! 페이지 전환 기술을 익히면 웹
        개발뿐만 아니라 앱 개발에서도 자연스럽게 경쟁력을 갖출 수 있습니다. 웹뷰
        같은 기술 덕분에, 이제 웹 프론트엔드 개발자도 앱을 바로 개발할 수
        있습니다. 실질적 앱개발자로 전직할수도? 이제 이거 하면 경쟁력 바로
        가집니다! 페이지 전환 기술을 익히면 웹 개발뿐만 아니라 앱 개발에서도
        자연스럽게 경쟁력을 갖출 수 있습니다. 웹뷰 같은 기술 덕분에, 이제 웹
        프론트엔드 개발자도 앱을 바로 개발할 수 있습니다. 실질적 앱개발자로
        전직할수도?
      </div>
      <div className="text-sm text-gray-5 py-3">
        2024년 10월 9일 · 3개의 댓글
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center py-2 px-2">
        <div className="flex flex-row gap-2 items-center">
          <img
            src="https://avatars.githubusercontent.com/u/89841486?v=4"
            alt="profile"
            className="w-8 h-8 rounded-full object-contain"
          />
          <div> by {profileName}</div>
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
