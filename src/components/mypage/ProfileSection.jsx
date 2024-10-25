import React from "react";

const ProfileSection = ({ nickName, intro }) => {
  return (
    <div className="flex flex-row items-center gap-3 px-3 py-5">
      <img
        src="https://avatars.githubusercontent.com/u/89841486?v=4"
        alt="profile-image"
        className="w-[140px] h-[140px] rounded-full object-contain"
      />
      <div className="flex flex-col gap-1">
        <div className="text-lg font-semibold">{nickName}</div>
        <div className="text-lg text-gray-6">{intro}</div>
      </div>
    </div>
  );
};

export default ProfileSection;
