import React, { useState, useRef } from 'react';
import { TextField, Button, Avatar, Card, CardContent } from '@mui/material';
import { useForm } from 'react-hook-form';

const Setting = () => { // Setting 컴포넌트
  const [profileImage, setProfileImage] = useState('');
  const { register, handleSubmit } = useForm();
  const [blogTitle, setBlogTitle] = useState('야호의 코딩케어');
  const [email, setEmail] = useState('example@gmail.com');
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('홍길동');
  const [description, setDescription] = useState('프론트엔드 개발자 임미다...');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => { // 이미지 업로드 핸들러 함수
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
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
    <div className="h-screen max-w-3xl px-4 py-20 mx-auto">
      <div className="flex flex-row mb-10">
        <div className="flex flex-col items-center pr-4 border-r-2">
          <Avatar
            alt="Profile Image"
            src={profileImage}
            sx={{ width: 100, height: 100 }}
            className="mb-4"
          />
          <button
            className="px-5 py-1 font-light text-white duration-200 rounded-lg whitespace-nowrap bg-sky-400 hover:bg-blue-500"
            onClick={handleButtonClick}
          >
            이미지 업로드
          </button>
          <button
            className="py-1 mt-2 font-light duration-200 rounded-lg text-sky-400 px-7 whitespace-nowrap hover:bg-sky-50 "
            onClick={handleButtonClick}
          >
            이미지 제거
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>
        <div className="flex flex-col w-full ml-6">
          {isEditing ? (
            <>
              <input
                className="w-1/2 p-1 m-2 mb-4 text-3xl font-bold text-white rounded-sm outline-none bg-sky-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="m-1.5 p-2 border border-gray-300 rounded w-full font-thin hover:border-gray-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </>
          ) : (
            <>
              <span className="m-2 mb-4 text-4xl font-bold">{name}</span>
              <span className="ml-2 text-sm">{description}</span>
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
      <div>
        <div className="flex-col mb-4 border-b-2">
          <div className="flex items-center justify-between mb-2">
            <span className="w-1/3 mr-4 text-3xl font-bold">내 코딩케어 제목</span>
            {isEditingTitle ? (
              <>
                <input
                  className="flex-grow p-1 text-lg font-light duration-200 border border-gray-300 rounded hover:border-gray-500"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                />
                <button
                  className="px-4 py-2 ml-2 font-light text-white duration-200 rounded-lg bg-sky-500 hover:bg-sky-300"
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
          <span className="block mb-3 text-lg text-gray-500">
            개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.
          </span>
        </div>
        <div className="flex-col mb-4 border-b-2">
          <div className="flex items-center justify-between mb-2">
            <span className="w-1/3 mr-4 text-3xl font-bold ">이메일 주소</span>
            {isEditingEmail ? (
              <>
                <input
                  className="flex-grow p-1 text-lg font-light duration-200 border border-gray-300 rounded hover:border-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="px-4 py-2 ml-2 font-light text-white duration-200 rounded-lg bg-sky-500 hover:bg-sky-300"
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
          <span className="block mb-3 text-lg text-gray-500">
            회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
          </span>
        </div>
        <div className="mb-4 border-b-2">
          <span className="block mb-2 text-3xl font-bold">소셜 정보</span>
          <span className="block mb-3 text-lg text-gray-500">
            가입 시 등록된 소셜 정보입니다.
          </span>
        </div>
        <div className="mb-4 border-b-2">
          <div className="flex items-center justify-start mb-2">
            <span className="block pr-6 text-3xl font-bold">회원 탈퇴</span>
            <button className="px-4 py-2 font-light text-white bg-red-500 rounded-lg hover:bg-red-700">
              회원 탈퇴
            </button>
          </div>
          <span className="block mb-3 text-lg font-light text-gray-500">
            탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Setting;