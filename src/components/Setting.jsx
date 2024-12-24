import React, { useState, useRef,useEffect } from "react";
import { TextField, Button, Avatar, Card, CardContent } from "@mui/material";
import { useForm } from "react-hook-form";
import PageContainer from "./common/PageContainer";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { getCookie } from "../api/cookie";
import { updateMemberProfile, uploadProfileImage } from "../api/member";

const Setting = () => {
  const {data, refetch} = useGetUserInfo(getCookie('accessToken'));
  const [profileImage, setProfileImage] = useState("");
  const { register, handleSubmit } = useForm();
  const [blogTitle, setBlogTitle] = useState("야호의 코딩케어");
  const [email, setEmail] = useState("example@gmail.com");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("홍길동");
  const [description, setDescription] = useState("프론트엔드 개발자 임미다...");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (data) {
      setProfileImage(data.profileImage);
      setName(data.name);
      setEmail(data.email);
      setDescription(data.intro);
    }
  }, [data]);
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("img", file);
      
      try {
        const uploadResponse = await uploadProfileImage(formData);
        const imageUrl = uploadResponse.data.uploadedUrl;
        
        // 프로필 정보 업데이트
        await updateMemberProfile({
          profileImage: imageUrl
        });
  
        setProfileImage(imageUrl);
        refetch(); // 사용자 정보 다시 불러오기
        
      } catch (error) {
        console.error("프로필 이미지 업데이트 실패:", error);
      }
    }
  };
  
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await updateMemberProfile({
        nickname: name,
        intro: description
      });
      setIsEditing(false);
      refetch(); // 변경된 정보 다시 불러오기
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
    }
  };

  const handleEditTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleSaveTitleClick = () => {
    setIsEditingTitle(false);
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleSaveEmailClick = () => {
    setIsEditingEmail(false);
  };

  

  return (
    <PageContainer className=" px-2 xl:px-[250px] lg:px-[100px] md:px-5 sm:px-3 pt-8">
      {/* 프로필 정보 컨테이너 */}
      <div className="flex flex-row mb-10">
        {/* 프로필 이미지 */}
        <div className="flex flex-col items-center pr-4 border-r-2 min-w-[160px]">
          <Avatar
            alt="Profile Image"
            src={profileImage}
            sx={{ width: 100, height: 100 }}
            className="mb-4"
          />
          <Button
            variant="contained"
            color="info"
            onClick={handleButtonClick}
            sx={{ marginBottom: "8px" }}
          >
            이미지 업로드
          </Button>
          <Button variant="text" color="info" onClick={handleButtonClick}>
            이미지 제거
          </Button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>
        {/* 사용자 이름, 한 줄 소개 */}
        <div className="flex flex-col w-full ml-6">
          {isEditing ? (
            <>
              <input
                className="w-1/2 p-1 mb-4 text-2xl font-bold text-black border border-gray-300 rounded hover:border-gray-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full p-2 font-thin border border-gray-300 rounded hover:border-gray-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </>
          ) : (
            <>
              <span className="mb-4 text-2xl font-bold">{name}</span>
              <span className="text-sm">{description}</span>
            </>
          )}
          <div className="mt-2 duration-200">
            {!isEditing && (
              <button
                className="p-2 font-thin underline duration-200 text-sky-500 hover:text-sky-300"
                onClick={handleEditClick}
              >
                수정
              </button>
            )}
            {isEditing && (
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 font-light text-white duration-200 rounded-lg bg-sky-500 hover:bg-sky-300"
                  onClick={handleSaveClick}
                >
                  저장
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 추가 정보 */}
      <div className="flex-col mb-4 border-b-2">
        <div className="flex items-center justify-between mb-2">
          <span className="w-1/5 mr-8 text-lg font-bold whitespace-nowrap">
            내 블로그 제목
          </span>
          {isEditingTitle ? (
            <>
              <input
                className="flex-grow p-1 text-lg font-light duration-200 border border-gray-300 rounded hover:border-gray-500"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
              />
              <button
                className="w-12 h-8 ml-2 text-xs font-light text-white duration-200 rounded-lg sm:w-16 sm:h-10 sm:text-base bg-sky-500 hover:bg-sky-300"
                onClick={handleSaveTitleClick}
              >
                저장
              </button>
            </>
          ) : (
            <>
              <span className="flex-grow mr-4 text-lg font-light text-gray-700 duration-200">
                {blogTitle}
              </span>
              <button
                className="p-2 font-thin underline duration-200 text-sky-500 hover:text-sky-300"
                onClick={handleEditTitleClick}
              >
                수정
              </button>
            </>
          )}
        </div>
        <span className="block mb-3 text-base text-gray-500 ">
          개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.
        </span>
      </div>
      <div className="flex-col mb-4 border-b-2">
        <div className="flex items-center justify-between mb-2">
          <span className="w-1/5 mr-8 text-lg font-bold whitespace-nowrap">
            이메일 주소
          </span>
          {isEditingEmail ? (
            <>
              <input
                className="flex-grow p-1 text-lg font-light duration-200 border border-gray-300 rounded hover:border-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* w-12 h-8 */}
              {/* w-24 h-10  */}
              <button
                className="w-12 h-8 ml-2 text-xs font-light text-white duration-200 rounded-lg sm:w-16 sm:h-10 sm:text-base bg-sky-500 hover:bg-sky-300"
                onClick={handleSaveEmailClick}
              >
                저장
              </button>
            </>
          ) : (
            <>
              <span className="flex-grow mr-4 text-lg font-light text-gray-700 duration-200">
                {email}
              </span>
              <button
                className="p-2 font-thin underline duration-200 text-sky-500 hover:text-sky-300"
                onClick={handleEditEmailClick}
              >
                변경
              </button>
            </>
          )}
        </div>
        <span className="block mb-3 text-base text-gray-500 ">
          회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
        </span>
      </div>
      <div className="mb-4 border-b-2">
        <span className="block mb-2 mr-8 text-lg font-bold whitespace-nowrap">
          소셜 정보
        </span>
        <span className="block mb-3 text-base text-gray-500 ">
          가입 시 등록된 소셜 정보입니다.
        </span>
      </div>
      <div className="mb-4 border-b-2">
        <div className="flex items-center justify-start mb-2">
          <span className="block pr-6 text-lg font-bold whitespace-nowrap">
            회원 탈퇴
          </span>
          <Button variant="contained" color="error">
            회원 탈퇴
          </Button>
        </div>
        <span className="block mb-3 text-base text-gray-500">
          탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
        </span>
      </div>
    </PageContainer>
  );
};

export default Setting;
